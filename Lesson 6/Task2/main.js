var x = 0, y = 0,                                                 // Row, Column
    btn = document.getElementsByClassName('btn')[0],
    inputX = document.getElementsByClassName('input__x')[0],
    inputY = document.getElementsByClassName('input__y')[0];
  
btn.disabled = true;
btn.onclick = tableCreate;
inputX.addEventListener('blur', checkEmpty ,false);
inputY.addEventListener('blur', checkEmpty ,false);

function tableCreate() {
    var body = document.getElementsByTagName('body')[0],
        tbl = document.createElement('table'),
        tbdy = document.createElement('tbody');

    x = inputX.value;
    y = inputY.value;
    if (! (checkValue(x) && checkValue(y) ) ){
        return;
    }
    for (var i = 0; i < +x; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < +y; j++) {
          var td = document.createElement('td');
          (((i+j+1) % 2) != 0) ? td.style.backgroundColor = 'black' : td.style.backgroundColor = 'white';
          tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
    tbl.onclick = invertColor;
    btn.disabled = true;              // disable button after table creating
}

// onClick event 
function invertColor () {
  var myTable = document.getElementsByTagName('tbody')[0];
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
     myTable.rows[i].cells[j].style.backgroundColor == 'white' ? myTable.rows[i].cells[j].style.backgroundColor = 'black': myTable.rows[i].cells[j].style.backgroundColor = 'white';

    }
  }
}

function checkEmpty() {
  btn.disabled = (inputX.value=='')||(inputY.value=='');
}

function checkValue (val) {
    if ( Number.isInteger(+val) && (+val < 11 ) && ( +val > 0 ) ) {
       return true;
    }
    alert('Incorrect value');
    inputX.value='';
    inputY.value='';
    btn.disabled = false;
    return false;
}

