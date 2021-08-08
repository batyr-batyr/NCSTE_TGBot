const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1803854962:AAHrUeZ5FBHl1yBXuXxHHFGOOe5oq9sAlKU'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Добро пожаловать ${msg.from.first_name}. Задайте ваш вопрос, либо выберите из часто задаваемых вопросов')
    
})