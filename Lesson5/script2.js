function lesson5_Task4 () {
    var text = prompt('Enter the text: ')||'В треве сидел кузнечик! Зелененький он был ? Представьте себе.';
    alert(text);
    text = text.replace('!', '.').replace('?','.').split('.');  // remove ?!. and split
    var textSplit = [];

    for (var i=0; i<text.length; i++) {
        var letCount = 0;
        for (var j=0; j<text[i].length;j++) {
            if ((text[i][j].toUpperCase()>='А'& text[i][j].toUpperCase()<='Я')||(text[i][j].toUpperCase()>='A'& text[i][j].toUpperCase()<='Z')) {
                letCount++;
            }
        }
        textSplit.push(text[i] + ' (Letters count: ' + letCount + ')');
    };
    alert(textSplit);
}


function lesson5_Task5 () {
    var b = [1,8,2,4,7,6,4,5,3],
        len = b.length;
    function bubbleSort(arr, i) {
        var  a;
        if ( i <= len ) {
            for ( var j = 0; j < len-1; j++ ) {
                if ( arr[j] > arr[j+1] ) {
                    a = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=a;
                }
            }
            i++;
            bubbleSort( arr, i );
        }
        return arr;
    }
    document.write( 'Task 4 ');
    document.write( 'Array: ' + b  + ' ');
    document.write( 'Sorted array: ' + bubbleSort( b, 0 ) );
}

lesson5_Task4();
lesson5_Task5();
