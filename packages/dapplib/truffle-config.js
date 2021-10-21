require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe street dash rural evolve install argue bubble tower'; 
let testAccounts = [
"0xddebc51680d871163a56ce59b31680d83d9145bdd0a0626136d831b5a4d35a3f",
"0x4e871ac884b5ec1913461e470db6db698446fe26a3deb35b92e919c97dee9a9d",
"0x213128baaf9eb5380c93b7d210587da8d47d66726afe5c1aba6e7a8bb505dfc3",
"0x396179818e10679ad7a21be17da3605e05d32c9ce09df3cf146545774c2020bc",
"0x180ea7a97c4b6603ef6410cdd651e1a593d436d9a93c1a0323da2a62d0061398",
"0x3bb7adee1952bb84926713e0ada68759b51d501ce37c20af9dbcfa9c82410084",
"0x14c706131bfa56eb32b220ee20b1f22b080cee7b52359e6bffd723e14ba81715",
"0xf9695c5901662275a256694835c038d42666ecb6589e0bc1aeca672b9a0eac53",
"0x693b9b3d16444c26cb4278a4a70056f3f71915ac1e5cacd3fb81778c55f40b7d",
"0x98d10778461a9858c96ed38863be16145aafb278e57eb242cead831f65725152"
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
            version: '^0.8.0'
        }
    }
};

