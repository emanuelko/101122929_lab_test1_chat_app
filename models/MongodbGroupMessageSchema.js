const mongoose = require("mongoose")

const MongodbGroupMessageSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    from_user: {
        type: String
    },
    room:{
        type: String
    },
    message: {
        type: String
    },
    date_sent: {
        type: Date
    },
})

const MongodbGroupMessage = mongoose.model("MongodbGroupMessage", MongodbGroupMessageSchema);
module.exports = MongodbGroupMessage