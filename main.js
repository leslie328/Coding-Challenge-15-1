//Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log('Total Portfolio Value:', calculatePortfolioValue());
console.log('Total Portfolio Percentages:');
console.log(`${asset.name}: ${asset.allocationPercentage}%`);

console.log('\nExecuting transactions...');
const buyAmazon = new Transaction(1, 'buy', 30);
buyAmazon.execute;
const buywalmart = new Transaction(2, 'buy', 20);
buywalmart.execute;
 console.log('\nUpdated Portfolio Value:', calculatePortfolioValue());

