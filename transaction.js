import { assets, getAssetById } from './assets.js';

class Transaction {
    constructor(assetId, type, quantity) {
      this.assetId = assetId;
      this.type = type;
      this.quantity = quantity;
    }
    if (this.type === 'buy') {
        asset.quantity += this.quantity;
        console.log(`${this.quantity} units of ${asset.name} bought.`);
      } else if (this.type === 'sell') {
        if (asset.quantity < this.quantity) {
          throw new Error(`Insufficient quantity for sale of [asset.name]`);
            }}
            export { Transaction };