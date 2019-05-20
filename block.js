//jshint esversion: 6

class Block {

    constructor({ timeStamp, lastHash, data, hash }) {
            this.timeStamp = timeStamp;
            this.lastHash = lastHash;
            this.data = data;
            this.hash = hash;
    }
};

module.exports = Block;