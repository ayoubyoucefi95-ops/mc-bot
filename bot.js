const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const bot = mineflayer.createBot({
  host: 'driftfish.aternos.host',
  port: 11025,
  username: 'AFK_Bot'
});

bot.on('login', () => {
  console.log('Bot joined successfully!');
});

bot.on('error', (err) => {
  console.log('Bot error:', err);
});

bot.on('end', () => {
  console.log('Bot disconnected, reconnecting in 5s...');
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
