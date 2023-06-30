const qrcode = require('qrcode-terminal');
const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');

const app = express();
const port = 3000;

app.use(express.static('public')); // Agrega esta línea para servir archivos estáticos desde la carpeta "public"

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Conexión exitosa');
});

client.on('message', message => {
    console.log(message.body);
});

function enviarMensaje(destinatario, mensaje) {
    client.sendMessage(destinatario, mensaje)
        .then(() => {
            console.log('Mensaje enviado correctamente');
        })
        .catch(err => {
            console.error('Error al enviar el mensaje:', err);
        });
}

client.initialize();
