var numbers = [1,2,3,4,5,6,7,8,9,10];

var filteredArr = numbers.filter(function(num){
	return num > 5;
});

var words = ['hello', 'goodbye', 'stuff', 'hi', 'so'];

var filterWords = function(w){
	return w.length > 2;
}

var mapWords = function(w){
	return "the word is: " + w;
}

var filteredStrs = words.filter(filterWords);
var mapStrs = words.map(mapWords);
var mapAndFilter = words.filter(filterWords).map(mapWords);

console.log(mapStrs);