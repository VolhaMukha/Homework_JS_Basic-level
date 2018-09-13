function task1 () {
	var log = prompt('Enter login');	
	if (log=='Админ') { 
		var passw = prompt('Enter password'); 	
		if (passw=='Чёрный Властелин') {
			alert('Welcome!');
		}	else if (passw==null) {
			alert('Enter canceled');
		} else {
			alert('The password is incorrect');
		}
	} else if (log==null) {
		alert('Login canceled');
	} else {
		alert("I don't know who are you");
	};
}

function task2() {
	var login = prompt('Login: '),
		message; 
	message = (login=='Вася') ? 'Привет': (login=='Директор') ? 'Здравствуйте' : (login=='') ? 'Нет логина':'';
	alert(message);
}

function task3() {
	var sum=0;
	for (i = 2; i<=10;i+=2) {
		sum+=i;
	}
}

task1();
task2();
task3();

