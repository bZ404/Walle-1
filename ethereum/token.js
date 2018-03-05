import web3 from './web3';
import WalleToken from './build/WalleToken.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(WalleToken.interface), address);
};
