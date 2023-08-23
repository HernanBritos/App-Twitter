// Importa las dependencias
const Twit = require('twit');
require('dotenv').config(); // Para leer las variables de entorno desde un archivo .env

// Configura la conexión a la API de Twitter
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Manejar errores de conexión
T.get('account/verify_credentials', { skip_status: true })
  .catch((err) => {
    console.error('Error en la autenticación:', err);
  });

// IDs de las cuentas de Twitter que deseas analizar
const account1Id = ''; // Reemplaza con el ID de la primera cuenta
const account2Id = ''; // Reemplaza con el ID de la segunda cuenta

// Obtén interacciones de las cuentas
T.get('statuses/user_timeline', { user_id: account1Id, count: 10 }, (err, data, response) => {
  if (!err) {
    console.log('Interacciones de la cuenta 1:', data);
  } else {
    console.error('Error al obtener interacciones de la cuenta 1:', err);
  }
});

T.get('statuses/user_timeline', { user_id: account2Id, count: 10 }, (err, data, response) => {
  if (!err) {
    console.log('Interacciones de la cuenta 2:', data);
  } else {
    console.error('Error al obtener interacciones de la cuenta 2:', err);
  }
});
