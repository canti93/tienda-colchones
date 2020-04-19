const mongoose = require('mongoose');
const express = require('express');
const Colchon = require('../models/colchon');
const router = express.Router();

/* Listado de todos los colchones */
router.get('/colchones', async(req, res) => {
    const c = await Colchon.find()
    res.send(c);
})

/* Listado de un colchon pasandole su id */
router.get('/colchones/:id', async(req, res) => {
    const c = await Colchon.findById(req.params.id)
    if(!c) return res.status(404).send('No existe ese colchon especifico')
    res.send(c);
})

/* Creando un colchon */
router.post('/colchones', async(req, res) => {
    const c = new Colchon({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    const colchon = await c.save()
    res.status(201).send(colchon);
})

/* Modificando un colchon existente */
router.put('/colchones/:id', async(req, res) => {
    const c = await Colchon.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    },{
        new: true   //para que nos devuelva el nuevo
    })
    if(!c) return res.status(404).send('No existe ese colchon especifico')
    res.status(204).send(c);
})

/* Borra un colchon especifico */
router.delete('/colchones/:id', async(req, res) => {
    const c = await Colchon.findByIdAndDelete(req.params.id)
    if(!c) return res.status(404).send('No existe ese colchon especifico')
    res.status(204).send(c);
})

module.exports = router;