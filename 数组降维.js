arr=[[1,2],[3,4],[5,6]];				//=> [1,2,3,4,5,6]
//1
arr.forEach(function(a, b) {
	arr.push(arr.shift());
});
//2
var flattened = arr.reduce(function(a, b) {
    return a.concat(b);
}, []);
//3
const flatten = (arr) => {
    return arr.reduce(
        (acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val) : val)
        }, []
    );
};
flatten(arr);