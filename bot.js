const mineflayer = require('mineflayer');
const express = require('express');

// 1. تشغيل سيرفر وهمي باش Render ما يطفيش الخدمة
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('AFK Bot is alive!');
});

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

// 2. إعدادات البوت بالـ IP والـ Port الخاص بسيرفرك
function startBot() {
  const bot = mineflayer.createBot({
    host: 'driftfish.aternos.host', // الـ IP الديناميكي
    port: 11025,                   // الـ Port الخاص بسيرفرك
    username: 'AFK_Bot_247',
    checkTimeoutInterval: 60 * 1000, // 60 ثانية منعاً للفصل
  });

  bot.on('spawn', () => {
    console.log('Bot joined successfully!');
    // قفز مستمر كل ثانية باش يبقى البوت نشيط وما يتحسبش AFK
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
