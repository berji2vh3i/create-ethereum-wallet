const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const ethers = require('ethers');
const fs = require('fs');

class Wallet {
    constructor(address, privateKey, mnemonic) {
        this.address = address;
        this.privateKey = privateKey;
        this.mnemonic = mnemonic;
    }
}
class HDWallet {
    constructor() {
        this.ArrayWallet = [];
    }
    newWallet (wallet) {
        this.ArrayWallet.push(wallet);
    }
}

let createWallet = () => {
    return ethers.Wallet.createRandom();
}

let NewWallet = new HDWallet();

app.get('/', (req, res) => {
    for (let i = 0; i < 10; i++) {
        let nWallet = createWallet();
        NewWallet.newWallet(new Wallet(nWallet.signingKey.address, (nWallet.signingKey.privateKey).slice(2, 66), nWallet.signingKey.mnemonic)); 
        // fs.appendFileSync('./wallet' + type(), JSON.stringify(wallet) + ',\n', 'utf8');
        console.log('success ' + i);
    }
    res.send(JSON.stringify(NewWallet, null, 2));
});

app.listen(port, () => console.log('app run on port ' + port));