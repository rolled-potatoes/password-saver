import cryptojs from 'crypto-js';

class Crypt {
  encrypt(input) {
    return cryptojs.AES.encrypt(input, process.env.REACT_APP_SECRET_KEY).toString();
  }

  decrypt(input) {
    const bytes = cryptojs.AES.decrypt(input, process.env.REACT_APP_SECRET_KEY);
    return bytes.toString(cryptojs.enc.Utf8);
  }
}

const myCrypto = new Crypt();

export default myCrypto;
