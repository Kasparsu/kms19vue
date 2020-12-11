const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 3000});

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Recieved:' + message);
        wss.clients.forEach(client => {
            if(client !== ws) {
                client.send(message);
            }
        })
    });
    ws.send('Welcome to server');
})