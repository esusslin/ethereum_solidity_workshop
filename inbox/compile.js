const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// PRINT THE SOLIDITY OBJECT
console.log(solc.compile(source, 1));

// EXPORT THE SOLIDITY COMPILED OBJECT (source + # of contracts)
module.exports = solc.compile(source, 1).contracts[':Inbox'];