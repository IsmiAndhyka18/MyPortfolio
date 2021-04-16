
function sendMail(){
    var tempParams={
        from_name:document.getElementById("name").value,
        to_name:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
      console.log(tempParams);
    emailjs.send('gmail','template_0qw0fzt',tempParams)
    .then(function(res){
       
     

    })
    console.log("succes")

    }
  