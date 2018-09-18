//task3
var n = prompt("Введите целое число: ");
function sumToCicle(n) {
    var sum=0;
    for (var i=1;i<n+1;i++) {
        sum+=i;
    }
    return sum;
};
// The slowest
function sumToRecursion(n) {
    if (n != 1) {
        return n + sumToRecursion(n-1);
    } else {
        return n;
    }
};
/* The fastest
S=(2*a1+(n-1)*d)/2*n
d=1
*/
function sumToProgression(n) {
    return (2+(n-1))/2*n;
};
alert(sumToCicle(+n));
alert(sumToRecursion(+n)); //for n=100000 RangeError: Maximum call stack size exceeded
alert(sumToProgression(+n));
