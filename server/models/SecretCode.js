const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const secretCodeSchema = new Schema({
    secretCodeText: {
        type: String,
        required: 'You need to leave a secret code!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

const SecretCode = model('SecretCode', secretCodeSchema);

module.exports = SecretCode;
