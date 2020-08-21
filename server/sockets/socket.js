const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app.',
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });
    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         ok: true,
        //         mensaje: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         ok: true,
        //         mensaje: 'TODO SALIO MAL!!!!!!'
        //     });
        // }

    })
});