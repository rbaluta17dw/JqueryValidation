$(document).ready(function () {
  $('#form').validate({ // initialize the plugin
    rules: {
      nif:{
        minlength: 8,
        maxlength: 8
      },
      nombre: {
        required: true
      },
      apellidos:{
        required: true
      },
      sexo:{
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefono:{
        minlength: 8
        //telefono()
      }
    }
  });

});

/*
function telefono(){
  var telefono = document.forms['form']['telefono'].value;
  var nums = /\d/;
  if (nums.test(telefono)) {
    return true;
  }else {
    return false;
  }
}
*/
