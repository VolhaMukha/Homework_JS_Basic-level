var getUsersBtn = document.getElementsByTagName('button')[0];

getUsersBtn.onclick = function () {
   var xhr = new XMLHttpRequest();

   xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

   xhr.onload = function () {
       console.log(JSON.parse(this.response).data);
   };

   xhr.send ();
}