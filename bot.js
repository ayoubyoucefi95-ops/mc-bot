const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
  res.write("Bot is running 24/7!");
  res.end();
}).listen(process.env.PORT || 3000);

function startBot() {
  const bot = mineflayer.createBot({
    host: 'AYOUB_andda7man.aternos.me', // عنوان السيرفر
    // تم حذف port: 11025 لأن هذا البورت خاص بـ Bedrock وليس Java
    username: 'AFK_Bot_247',
    version: false // يدع اختيار النسخة تلقائياً
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
