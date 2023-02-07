const mongoose = require("mongoose")

const MongodbPrivateMessageSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    from_user: {
        type: String
    },
    to_user:{
        type: String
    },
    message: {
        type: String
    },
    date_sent: {
        type: Date
    }
})

const MongodbPrivateMessage = mongoose.model("MongodbPrivateMessage", MongodbPrivateMessageSchema);
module.exports = MongodbPrivateMessage