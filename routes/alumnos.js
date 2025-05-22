const express = require('express');
const router = express.Router();
const alumnos = require('../data/alumnos.json');

router.get('/', (req, res) => {
  res.json(alumnos);
});

router.get('/:id', (req, res) => {
  const alumno = alumnos.find(a => a.id == req.params.id);
  if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });
  res.json(alumno);
});

module.exports = router;
