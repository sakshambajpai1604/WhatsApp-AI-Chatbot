import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('WebSocket connection established.');

    ws.on('message', (message) => {
        console.log('Received from WebSocket:', message.toString());
        // Process message and send response
    });

    ws.send('WebSocket server is ready.');
});

export default wss;