# InstagramAIO

InstagramAIO is a Discord bot designed to interact with Twitch channels and provide various functionalities, including adding Twitch followers, managing Discord channels, and more. This bot is built using Node.js and the Discord.js library.

## Features

- **Twitch Followers Management**: Add followers to a specified Twitch account.
- **Discord Channel Management**: Lock, unlock, and nuke channels.
- **Bot Information**: Provides information on bot latency, available stock, and how to purchase the bot.
- **Admin Commands**: Restricted commands for bot administrators to perform certain actions.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/quehole/InstagramAIO.git
   cd InstagramAIO
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Configuration**

   Create a `settings.json` file in the root directory with the following structure:

   ```json
   {
     "prefix": "!",
     "chatchannel": "channel id",
     "genchannel": "channel id",
     "token": "YOUR_DISCORD_BOT_TOKEN"
   }
   ```


   Create a `tokens.txt` file in the root directory and add your Twitch tokens, each on a new line.

4. **Run the Bot**

   Start the bot with:

   ```bash
   node index.js
   ```

## Commands

- `!help`: Displays a help message with a list of available commands.
- `!ping`: Shows the bot's current latency.
- `!buy`: Information on purchasing the bot.
- `!stock`: Shows the number of tokens currently in stock.
- `!tfollow <twitch username>`: Adds followers to the specified Twitch account (admin only).
- `!tspam`: Placeholder for a future feature.
- `!nuke`: Deletes and recreates the current channel (admin only).
- `!lock`: Locks the current channel to prevent sending messages (admin only).
- `!unlock`: Unlocks the current channel to allow sending messages (admin only).

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact

For any questions or further information, contact **quehole**.
