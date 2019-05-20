const Block = require('./block');
const {GENESIS_DATA} = require('./config');

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

    describe('genesis()', () => {
      const genesisBlock = Block.genesis();

      it('returns a Block instance', () => {
        expect(genesisBlock instanceof Block).toBe(true);
      });
      
      it('returns the genesis data', () => {
        expect(genesisBlock).toEqual(GENESIS_DATA);
      });

    });
    
});