const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
  res.write("Bot is running 24/7!");
  res.end();
}).listen(process.env.PORT || 3000);

function startBot() {
  const bot = mineflayer.createBot({
    host: 'driftfish.aternos.host', // استخدام IP الديناميكي الحقيقي
    port: 11025,                   // المنفذ الظاهر في الصورة
    username: 'AFK_Bot_247'
  });

  bot.on('spawn', () => {
    console.log('Bot joined successfully!');
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 5s...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', err => console.log('Error:', err));
}

startBot();
