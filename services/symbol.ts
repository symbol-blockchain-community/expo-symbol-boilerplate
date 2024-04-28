import { PrivateKey, Bip32 } from 'symbol-sdk';
import { Address, SymbolFacade } from 'symbol-sdk/symbol';

export default function sampleCode() {
  const privateKey = PrivateKey.random();
  console.log('Your PrivateKey', privateKey.toString());

  const facade = new SymbolFacade('testnet');
  const transaction = facade.transactionFactory.create({
    type: 'transfer_transaction_v1',
    signerPublicKey: '87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8',
    fee: 1000000n,
    deadline: 41998024783n,
    recipientAddress: 'TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I',
    mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }],
  });

  const signature = facade.signTransaction(new facade.static.KeyPair(privateKey), transaction);
  const jsonPayload = facade.transactionFactory.static.attachSignature(transaction, signature);

  console.log('Signed result', jsonPayload);

  const bip32 = new Bip32(SymbolFacade.BIP32_CURVE_NAME, 'japanese');
  const mnemonic = bip32.random();
  console.log('Your Mnemonic', mnemonic);

  const bip32Node = bip32.fromMnemonic(mnemonic, '');
  const maxAccountCount = 10;
  for (let i = 0; i < maxAccountCount; i++) {
    const bip32Path = facade.bip32Path(i);
    const childBip32Node = bip32Node.derivePath(bip32Path);
    const keyPair = SymbolFacade.bip32NodeToKeyPair(childBip32Node);
    const address = new Address(facade.network.publicKeyToAddress(keyPair.publicKey));
    console.log(`[${i}]`, address.toString(), keyPair.privateKey.toString());
  }
}
