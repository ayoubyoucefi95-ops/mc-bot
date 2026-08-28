const http = require('http');
const mineflayer = require('mineflayer');

// خادم ويب بسيط باش UptimeRobot يلقى وش يراقب
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is online!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

// إعدادات البوت والسيرفر
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
