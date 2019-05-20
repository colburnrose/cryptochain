const Block = require('./block');

// Test Driven Development
describe('Block', () => {
    const timeStamp = 'a-date';
    const lastHash = 'foo-hash';
    const data = ['blockdata', 'data'];
    const hash = 'bar-hash';
    const block = new Block({timeStamp, lastHash, data, hash}); 

    it('has a timestamp, lastHash, data, hash', () => {

        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });
});