// $(document).ready(function(){

// const { response } = require("express");

//   $('form').on('submit', function(){

//       var item = $('form input');
//       var todo = {item: item.val()};

//       $.ajax({
//         type: 'POST',
//         url: '/todo',
//         data: todo,
//         success: function(data){
//           //do something with the data via front-end framework
//           location.reload();
//         }
//       });

//       return false;

//   });


const myForm = document.getElementById('todoForm');

myForm.addEventListener('submit',async function(e){
    
    e.preventDefault();

    const formData = new FormData(this);
    alert(formData.entries())
    const formDataSerialized = Object.fromEntries(formData);

    fetch('/todo', {
          
            method:'post',
            body:JSON.stringify(formDataSerialized), 
    })
    .then( (resp) => {  return resp.text()})
    .then( txtData => console.log(txtData))
    .catch( e => console.log('error',e.message));

});


  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

// });
