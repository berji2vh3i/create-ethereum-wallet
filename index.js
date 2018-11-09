const ethers = require('ethers');
const fs = require('fs');
let num = 1000;
let type = () => {
    return '.html';
}
let crateWallet = () => {
    return ethers.Wallet.createRandom();
}
for (let i = 0; i < num; i++) {
    let newWallet = crateWallet();
    let wallet = {};
    wallet.address = newWallet.signingKey.address;
    wallet.privateKey = (newWallet.signingKey.privateKey).slice(2, 66);
    wallet.mnemonic = newWallet.signingKey.mnemonic;
    fs.appendFileSync('./wallet' + type(), JSON.stringify(wallet) + ',\n', 'utf8');
    console.log('success' + i);
}