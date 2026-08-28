const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'driftfish.aternos.host',
    port: 11025,
    username: 'AFK_Bot_247',
    checkTimeoutInterval: 60 * 1000,
  });

  bot.on('spawn', () => {
    console.log('Bot joined successfully!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);
    }, 1000);
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 5s...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Bot error:', err);
  });
}

startBot();
