const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

const userAdmin = new User({email: "admin@admin.com", password: "admin"})
userAdmin.save()

router.post('/', async(req, res)=>{
    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('Ese usuario ya existe')
    user = new User({
        email: req.body.email,
        password: req.body.password
    })

    const result = await user.save()
    const jwtToken = user.generateJWT();
    res.status(200).send({jwtToken})
})

module.exports = router