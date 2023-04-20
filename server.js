const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
let history = {
  mensajes: [],
  ips: []
};
// Configuración de CORS
app.use(cors());

// Endpoints de tu aplicación
app.post('/', (req, res) => {
  const data = req.body;
  history.mensajes.push(data.mensajes);
  history.ips.push(data.ip);
});

app.get('/view', (req, res) => {
  res.json(history);
});



// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});