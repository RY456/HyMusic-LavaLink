

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://yojanderhernandez046:<db_password>@hymusic.6rup8g4.mongodb.net/?retryWrites=true&w=majority&appName=HyMusic",
  spotifyClientId : "1f3212b311c340d3bb8b11a52135afc7",
  spotifyClientSecret : "5b044756376c44c1845e2180703bf01c",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
