/**
 * The core server that runs on a Cloudflare worker.
 */

import { AutoRouter } from 'itty-router';
import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
  InteractionResponseFlags
} from 'discord-interactions';

import { DiscordClient } from './client'

const roleManagerCommand = require('./commands/managers/roleManager');

class JsonResponse extends Response {
  constructor(body, init) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };
    super(jsonBody, init);
  }
}

const router = AutoRouter();
/**
 * A simple :wave: hello page to verify the worker is working.
 */
router.get('/', (request, env) => {
  return new Response(`👋 ${env.DISCORD_APPLICATION_ID} ${env.DISCORD_PUBLIC_KEY}`);
});

/**
 * Main route for all requests sent from Discord.  All incoming messages will
 * include a JSON payload described here:
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
router.post('/', async (request, env) => {
    const { isValid, interaction } = await server.verifyDiscordRequest(
        request,
        env,
    );

    if (!isValid || !interaction) {
        return new Response('Bad request signature.', { status: 401 });
    }

    if (interaction.type === InteractionType.PING) {
        // The `PING` message is used during the initial webhook handshake, and is
        // required to configure the webhook in the developer portal.
        return new JsonResponse({
            type: InteractionResponseType.PONG,
        });
    } else if (interaction.type === InteractionType.APPLICATION_COMMAND) {
        // Most user commands will come as `APPLICATION_COMMAND`.
        switch (interaction.data.name.toLowerCase()) {   
            case roleManagerCommand.data.name:
                return await roleManagerCommand.execute(interaction);
            default:
                return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
        }
    } else if (interaction.type == InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE) {
        switch (interaction.data.name.toLowerCase()) {   
            case roleManagerCommand.data.name:
                return await roleManagerCommand.autocomplete(interaction);
            default:
                return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
        }
    } else if (interaction.type === InteractionType.MESSAGE_COMPONENT) {
        switch (interaction.data.custom_id.toLowerCase()) {   
            case "confirm":
                const response = await interaction.client.setRoleOnUser(interaction.guild_id, interaction.member.user.id, '1430569586914230402');
                
                const content = response.ok 
                    ? "✅ Thanks for confirming and welcome to the server!" 
                    : "❌ Something went wrong when trying to give you permissions to the server. Try again or contact a mod.";
            
                return new JsonResponse({
                    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: content, 
                        allowed_mentions: { parse: [] },
                        flags: InteractionResponseFlags.EPHEMERAL
                    }
                });
            default:
                return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
        }
    }

    console.error('Unknown Type');
    return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
});

router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request, env) {
    const signature = request.headers.get('x-signature-ed25519');
    const timestamp = request.headers.get('x-signature-timestamp');
    const body = await request.text();
    const isValidRequest =
    signature &&
    timestamp &&
    (await verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY));
    if (!isValidRequest) {
        return { isValid: false };
    }

    let interaction = JSON.parse(body);
    
    interaction.reply = function(data) {
        return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: data,
        });
    }

    interaction.respond = function(choices) {
        return new JsonResponse({
            type: InteractionResponseType.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
            data: { choices: choices },
        });
    }

    interaction.client = new DiscordClient(env.DISCORD_TOKEN);

    return { interaction: interaction, isValid: true };
}

const server = {
  verifyDiscordRequest,
  fetch: router.fetch
};

export default server;