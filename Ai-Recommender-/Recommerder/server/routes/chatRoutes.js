const express = require('express');
const router = express.Router();
const { searchChatGPT } = require('../controllers/chatSearchController');

console.log("Chat routes loaded");

router.post('/', searchChatGPT);

module.exports = router;
