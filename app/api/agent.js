const axios = require("axios");

const agent = axios.create({
    baseURL : "http://localhost:3200/api/apps"
})

module.exports = agent;