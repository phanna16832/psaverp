const prices = [10, 20, 30];

// forEach for side effects (like logging)
prices.forEach(price => {
    console.log(`Price: $${price}`);
});

// map for transforming data
const discounted = prices.map(price => price * 0.9);
// discounted is [9, 18, 27]
console.log(global);