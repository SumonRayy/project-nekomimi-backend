module.exports = mongoose => {
    var schema = mongoose.Schema({
        title: String,
        description: String,
        creatorId: String,
        contractAddress: String,
        tags: [String],
        comments: [{
            author: String,
            comment: String,
            date: Date,
            likes: Number,
            dislikes: Number
        }],
        likes: Number,
        dislikes: Number,
        views: Number,
        duration: Number,
    }, {
        timestamps: true
    });

    schema.methods.toJSON = function () {
        var obj = this.toObject();
        delete obj.__v;
        return obj;
    };

    const Videos = mongoose.model('Videos', schema);
    return Videos;
}


