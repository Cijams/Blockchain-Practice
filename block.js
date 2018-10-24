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
        	Last Hash: ${this.lastHash}
        	Hash     : ${this.hash}
        	Data     : ${this.data}`;
    }
	
	static genesis() {
		return new this('Genesis time', '--------', 'FIRST-HASH', [])
	}
	
	static mineBlock(lastBlock, data) {
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = 'TODO-Hash';
		
		return new this(timestamp, lastHash, hash, data);
	}
}

module.exports = Block;