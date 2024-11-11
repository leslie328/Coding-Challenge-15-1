import { assets } from './assets.js';

export function calculatePortfolioValue () {
    return assets.reduce((totalValue, asset) => {
      const assetValue = asset.price * asset.quantity, 0);
    
    },

  export function getPortfolioAllocation () {
    const totalValue = calculatePortfolioValue;
    return assets.map(asset => {
      const assetValue = asset.price * asset.quantity;
      const allocationPercentage = (assetValue / totalValue) * 100;
      return {
        name: asset.name,
        allocationPercentage: allocationPercentage
      };
    });
  }