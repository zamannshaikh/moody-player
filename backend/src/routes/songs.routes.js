const express= require('express');

const multer = require('multer');
const uploadFile = require('../service/storage.service');
const Song = require('../models/song.model');
 
const router = express.Router();

const upload = multer({ storage :multer.memoryStorage() });

router.post('/songs', upload.single("audio"), async (req, res) => {
    // Logic to add a new song
    console.log(req.body);
    const fileData =  await uploadFile(req.file);
    const song = await Song.create({
        title: req.body.title,
        artist: req.body.artist,
        audio: fileData.url, // Assuming fileData contains the URL of the uploaded file
        mood: req.body.mood
    });
    console.log(fileData);
    console.log(req.file);




    res.status(201).send('Song added successfully');
});







router.get('/songs', async (req, res) => {
    // Logic to get all songs
   const {mood} = req.query;
   const songs=await Song.find({
    mood:mood
   })
   res.status(200).json({
    message: "Songs fetched successfully",
    songs: songs
   })
});

module.exports = router;