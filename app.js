const express = require('express');
const cors = require('cors');
const alumnosRoutes = require('./routes/alumnos');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/alumnos', alumnosRoutes);

// Este bloque es fundamental para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
