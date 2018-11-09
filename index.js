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
    wallet.mnemonic = newWallet.signingKey.mnemonic;
    wallet.privateKey = (newWallet.signingKey.privateKey).slice(2, 66);
    wallet.address = newWallet.signingKey.address;
    fs.writeFileSync('./wallet/wallet_' + i + type(), JSON.stringify(wallet), 'utf8');
    console.log('success');
}