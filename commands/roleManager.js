
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require("discord-api-types/v10")
const { bold, underscore, mention } = require('./utility/formatting');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role-manager')
		.setDescription('Add a role manager'),

    async execute(interaction) {


		return interaction.reply({
            content: "Please do something!",
            components: [row],
            allowed_mentions: { parse: [] }
        });
	},
};