const mongoose = require('mongoose');
const express = require('express');
const Somier = require('../models/somier');
const router = express.Router();

/* Listado de todos los somieres */
router.get('/somieres', async(req, res) => {
    const s = await Somier.find()
    res.send(s);
})

/* Listado de un usuario pasandole su id */
router.get('/somieres/:id', async(req, res) => {
    const s = await somier.findById(req.params.id)
    if(!s) return res.status(404).send('No existe ese somier especifico')
    res.send(u);
})

/* Creando un somier */
router.post('/somieres', async(req, res) => {
    const s = new Somier({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    const somier = await s.save()
    res.status(201).send(somier);
})

/* Modificando un somier existente */
router.put('/somieres/:id', async(req, res) => {
    const s = await Somier.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    },{
        new: true   //para que nos devuelva el nuevo
    })
    if(!s) return res.status(404).send('No existe ese somier especifico')
    res.status(204).send(s);
})

/* Borra un somier especifico */
router.delete('/somieres/:id', async(req, res) => {
    const s = await Somier.findByIdAndDelete(req.params.id)
    if(!s) return res.status(404).send('No existe ese somier especifico')
    res.status(204).send(s);
})

module.exports = router;