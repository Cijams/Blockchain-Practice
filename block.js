const SHA256 = require('crypto-js/sha256');

// The main block class that will form all blocks in the chain.
class Block {
	
	constructor(timestamp, lastHash, hash, data) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
	}
	
	toString() {
        return `Block -
        	Timestamp: ${this.timestamp}
        	Last Hash: ${this.lastHash.substring(0,10)}
        	Hash     : ${this.hash.substring(0,10)}
        	Data     : ${this.data}`;
    }
	
	// The origional and first block in the blockchain.
	static genesis() {
		return new this('Genesis time', '--------', 'FIRST-HASH', []);
	}
	
	// The method called that will allow a block to be mined and
	// added to the chain.
static mineBlock(lastBlock, data) {
	const timestamp = Date.now();
	const lastHash = lastBlock.hash;
   const hash = Block.hash(timestamp, lastHash, data);
  return new this(timestamp, lastHash, hash, data);
}
	
	// SHA256 Hashing algorithm to be used on each block.
static hash(timestamp, lastHash, data) {
	return SHA256(`${timestamp}${lastHash}${data}`).toString();
}

	static blockHash(block) {
		const { timestamp, lastHash, data } = block;
		return Block.hash(timestamp, lastHash, data);
	}
}

module.exports = Block;