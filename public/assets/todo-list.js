const myForm = document.getElementById('todoForm');

myForm.addEventListener('submit',async function(e){
    
    e.preventDefault();

    const formData = new FormData(this);
    const formDataSerialized = Object.fromEntries(formData);

    fetch('/todo', {
          
            method:'post',
            body:JSON.stringify(formDataSerialized), 
    })
    .then( (resp) => { location.reload(); return resp.text()})
    .then( txtData => console.log(txtData))
    .catch( e => console.log('error',e.message));

});




const liElements = document.getElementsByTagName('LI');

//we cannot use forEach for liElements as it is an HTML collection and not an array

for( let i = 0 ; i < liElements.length ; i++){
 liElements[i].addEventListener('click',async function(e){
      let item = this.innerText.replace(/ /g,'-');
      // console.log('got clicked');
      try{

        const response = await fetch('/todo/'+item, 
                                      {
                                        method:'delete',
                                      });
        responseAsData = await response.json();
        console.log(responseAsData);
        location.reload();
      }catch(e){
        console.log('Error : ',e.message);
      }
});
}


//OlderAJAX code

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




  // $('li').on('click', function(){
  //     var item = $(this).text().replace(/ /g, "-");
  //     $.ajax({
  //       type: 'DELETE',
  //       url: '/todo/' + item,
  //       success: function(data){
  //         //do something with the data via front-end framework
  //         location.reload();
  //       }
  //     });
  // });

// });
