var arr = [3, 6, 7, 12, 15, 14, 20],
    arrFilterNew = [],
    arrMapNew = [];

function Lesson3_Task3 () {
    for (var i=2; i<=10; i+=2) {
        alert(i);       // Even numbers from 2 to 10
    }
}

// return true for even numbers
function isEven(arrItem) {
    return (+arrItem % 2 === 0 );
};

// Lesson3 Task4
// functions map and filter in native view
function filterAndMapNative () {
    for ( let i = 0; i < arr.length; i++ ) {
        arrMapNew [i] = 'Item [' + i + '] = ' + arr[i];
        if (isEven( arr[i] ) ) {
            arrFilterNew.push(arr[i]);
        }
    }
};
Lesson3_Task3 ();
filterAndMapNative ();
alert (arrFilterNew);
alert (arrMapNew);



