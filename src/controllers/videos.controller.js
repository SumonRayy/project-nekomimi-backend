const db = require('../models');
const Video = db.videos;

exports.findAll = (req, res) => {
    Video.find()
        .then(videos => {
            res.send(videos);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving videos."
            });
        });
};

exports.findOne = (req, res) => {
    Video.findById(req.params.videoId)
        .then(video => {
            if (!video) {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            res.send(video);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Error retrieving video with id " + req.params.videoId
            });
        });
};

exports.upload = (req, res) => {
    const video = new Video({
        title: req.body.title,
        description: req.body.description,
        creatorId: req.body.creatorId,
        contractAddress: req.body.contractAddress,
        tags: req.body.tags,
        comments: req.body.comments,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        views: req.body.views,
        duration: req.body.duration
    });

    video.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the video."
            });
        });
}