const assets = [
    { id: 1, name: 'Amazon Stock', type: 'stock', price: 468.87, quantity: 60}
    { id: 2, name: 'Walmart Stock', type: 'stock', price: 872.29, quantity:90 }
    { id: 3, name: 'Municipal Bond', type: 'bond', price: 291.91, quantity: 100}
    
    function getAssetById {
        return assets.find(asset => asset.id === id);
      }
      export { assets, getAssetById };
    ]