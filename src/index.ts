import client from './whatsapp';
import wss from './websocket';
import { handleAIRequest } from './ai';

client.on('message', async (message) => {
    const content = message.body;

    // Send message to AI handler
    const aiResponse = await handleAIRequest(content);

    // Send AI response back to WhatsApp
    if (aiResponse.choices[0]?.message?.content) {
        message.reply(aiResponse.choices[0].message.content);
    } else {
        message.reply('Sorry, I could not process your request.');
    }
});

console.log('Bot is running...');