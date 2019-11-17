const express = require('express');
const router = express.Router();

const Message = require('../../models/Message');

router.get('/', (req, res) => {
    Message.find()
    .then(messages => res.json(messages))
});

router.post('/', (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        message: req.body.message
    });
    newMessage.save().then(message => res.json(message));
});

module.exports = router;