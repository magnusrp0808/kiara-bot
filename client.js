export class DiscordClient {
    constructor(token) {
        this.token = token;
    }

    async #makeRequest(url, method)
    {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bot ${this.token}`,
                'Content-Type': 'application/json',
            },
        });

        return response;
    }

    async setRoleOnUser(guildId, userId, roleId)
    {
        const url = `https://discord.com/api/v10/guilds/${guildId}/members/${userId}/roles/${roleId}`;
        return await this.#makeRequest(url, 'PUT');
    }
}

export default DiscordClient;