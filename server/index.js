const cors = require("cors");
const axios = require("axios");
const express = require("express");

const app = express();
const port = 3200;

app.use(cors());

app.get("/api/apps/top100", async (req, res) => {
    const response = await axios.get("https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/100/explicit.json")
    const ids = response.data.feed.results.map(cur => cur.id);
    const ratingResponse = await axios.get("https://itunes.apple.com/hk/lookup", { params: { id: ids.join(",") } });

    response.data.feed.results.map(result => {
        const target = ratingResponse.data.results.find(cur => cur.trackId == result.id);
        result.rating = {
            usersRating: target.averageUserRatingForCurrentVersion,
            countOfRating: target.userRatingCount
        }
    })

    res.send(response.data);
})

app.get("/api/apps/top10_grossing", async (req, res) => {
    const response = await axios.get("https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json")
    res.send(response.data);
})

app.listen(port, () => {
    console.log("Example app listening at port 3200");
})