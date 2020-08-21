var socket = io('http://localhost:3000');

//Escuchar Informacion
socket.on('connect', () => {
    console.log('Conectado con el servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Bryan',
    mensaje: 'Hola Mundo!',
}, function(res) {
    console.log('Respuesta server: ', res);
});
//Escuchar Información
socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor:', mensaje)

});