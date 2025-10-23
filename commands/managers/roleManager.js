
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require("discord-api-types/v10")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role-manager')
		.setDescription('Add a role manager'),

    async execute(interaction) {

      const confirm = new ButtonBuilder()
            .setCustomId('confirm')
            .setLabel('Confirm')
            .setStyle(ButtonStyle.Success);

      const row = new ActionRowBuilder()
            .addComponents(confirm);

      const response = interaction.reply({
          content: "Please confirm that you accept and agree to the rules of the server.\nThis will unlock the rest of the server for you.",
          components: [row],
          allowed_mentions: { parse: [] }
      });

		  return response;
	  },
};