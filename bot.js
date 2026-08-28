const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
  res.write("Bot is running 24/7!");
  res.end();
}).listen(process.env.PORT || 3000);

function startBot() {
  const bot = mineflayer.createBot({
    host: 'driftfish.aternos.host',
    port: 11025,
    username: 'AFK_Bot_247'
  });

  bot.on('spawn', () => {
    console.log('Bot joined successfully!');
    
    // جعل البوت يدور ويكرر القفز للحفاظ على التواجد دون طرد AFK
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
      bot.look(bot.entity.yaw + 0.5, bot.entity.pitch, true);
    }, 4000);
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 5s...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', err => console.log('Error:', err));
}

startBot();
