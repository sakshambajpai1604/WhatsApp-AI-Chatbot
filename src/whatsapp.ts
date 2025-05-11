import { Client, Message } from 'whatsapp-web.js';

const client = new Client({
    puppeteer: {
        headless: true,
    },
});

client.on('qr', (qr) => {
    console.log('QR Code:', qr);
});

client.on('ready', () => {
    console.log('WhatsApp client is ready!');
});

client.on('message', async (message: Message) => {
    console.log('Received message:', message.body);
    // Forward message to WebSocket server or AI handler
});

client.initialize();

export default client;