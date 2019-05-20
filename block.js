//jshint esversion: 6
const { GENESIS_DATA } = require('./config');

class Block {

    constructor({ timeStamp, lastHash, data, hash }) {
            this.timeStamp = timeStamp;
            this.lastHash = lastHash;
            this.data = data;
            this.hash = hash;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }
};

module.exports = Block;