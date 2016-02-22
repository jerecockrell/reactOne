var candy = [
	{ name: 'snickers', type: 'chocolate' },
	{ name: 'starburst', type: 'corn syrup' },
	{ name: 'sour patch kids', type: 'corn syrup' },
	{ name: 'hersheys', type: 'chocolate' },
	{ name: 'vines', type: 'licorice' },
	{ name: 'reeses', type: 'chocolate' },
];

var candyFilter = function(c){
	return c.type === 'chocolate';
}

var notChoc = function(c) {
	return c.type !== 'chocolate';
}

var candyMap = function(c){
	return c.name + ' is not a chocolate';
}

var notChocolates = candy.filter(notChoc).map(candyMap);
console.log(notChocolates); 