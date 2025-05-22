const express = require('express');
const cors = require('cors');
const app = express();
const alumnosRoutes = require('./routes/alumnos');

app.use(cors()); 
app.use('/alumnos', alumnosRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
