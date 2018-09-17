var obj = { a: 'a', e: 'b', y: 'c' },
    obj2 = {};

function isEmpty(obj) {
    return Object.keys(obj).length>0;
};
alert(isEmpty(obj2));
//alert(isEmpty(obj));
alert((obj=>Object.keys(obj).length>0)(obj));

function pow(a,b) {
    let product=1;
    for (let i=1;i<b+1;i++)
    {
        product*=a;
    }
    return product;
};
isEmpty(obj);               // Task 1
var x = prompt('Введите число: '),
    n = prompt('Введите степень: ');
(Number.isInteger(+n))&(n>0) ? alert(pow(+x,+n)) : alert('Incorrect value');




