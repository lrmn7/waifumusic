require('dotenv').config();

module.exports = {
    // most importants
    WAIFU_TOKEN: process.env.WAIFU_TOKEN,
    OWNER_ID: process.env.HACHIKI || "742457036914294855",
    OWNER_TAG: process.env.HACHIKI_TAG || "LRMN#9749",
    OWNER_LINK: process.env.HACHIKI_LINK || "https://discord.com/users/742457036914294855",
    DEV_GUILD: process.env.DEV_GUILD || "1088032923443277824",

    // prefix
    WAIFU_PREFIX: process.env.WAIFU_PREFIX || "w!",

    // database mongodb
    MONGO_DB: process.env.MONGO_DB,

    // spotify for distube
    // If spotify_tracks is true then you can play song from spotify more than 100+ the default is *false*
    // You can get these secret and client_id from here: https://developer.spotify.com/dashboard/applications
    WAIFU_TRACKS: parseBoolean(process.env.WAIFU_TRACKS || false),
    SPOTIFY_SECRET: process.env.SPOTIFY_SECRET,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,

    // youtube cookie to make less lag
    YOUTUBE_COOKIE: process.env.YOUTUBE_COOKIE,

    // embed colors
    MAIN_COLOR: process.env.MAIN_COLOR || "#2F3136",
    ERR_COLOR: process.env.ERR_COLOR || "#ED2828"
}

function parseBoolean(ask) {
    if (typeof (ask) === 'string') {
        ask = ask.trim().toLowerCase();
    }
    switch (ask) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}