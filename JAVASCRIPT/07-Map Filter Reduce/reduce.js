const callback = function(acum, currentValue) {
    acum = 0;
    return acum += currentValue;
}

arr = [1,2,3];

let tot = arr.reduce(callback);

console.log(tot);