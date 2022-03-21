module.exports = app => {
    const videos = require('../controllers/videos.controller');
    var router = require('express').Router();

    // Retrieve all videos
    router.get('/', videos.findAll);

    // Retrieve a single video with videoId
    router.get('/:videoId', videos.findOne);

    // upload a new video
    router.post('/', videos.upload);

    app.use('/api/videos', router);
};  