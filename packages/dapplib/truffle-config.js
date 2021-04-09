require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food repair renew saddle mixture install civil army gauge'; 
let testAccounts = [
"0xf0fe5c237ad52524099f33af958337675db4a6a4faf55cd9ab2403d4512edaec",
"0x67c512ec5d44d3c44ca52240742dcf98fd6a7c103c55eb75f924f3b0c7517af2",
"0xc11426cd1cb90661a053d45c9160b63d7169a3ac6dcaf0d641164de0ba5f2ace",
"0xc12af6656791929e06ddb2a5d1ac73cf0d49836e9290a8de0a7a0d6ff0aab839",
"0x180c20e653e0e2aa9bc26a56ee1b05a079f94d755f129ef47effdb538f9f0e1e",
"0x7a2ae35b9758d90ff3ff7bf4f1123fe18a99ec9e6f84e0238479e309157583e2",
"0x2094d158a4717eae84ac108490c1966a5838548402f13a4ca79553e77dc7bbff",
"0x21ce7612b37c52476bcd9da1ad5942bbea1a62cb371123a1b196d3e25c7f159a",
"0xfdcb750667f975bfaff38465e19f4694034028b8c26373f02af49b33b225afae",
"0x346533df7ec272f624c3a2885b4753b2ff1b4654168477b41dee5ca0e7caba97"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
