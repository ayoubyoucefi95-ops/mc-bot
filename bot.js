const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'AYOUB_andda7man.aternos.me', 
    port: 11025,
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