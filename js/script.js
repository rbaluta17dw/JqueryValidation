$(document).ready(function () {

  $('#form').validate({ // initialize the plugin
    rules: {
      nif:{
        required: true;
      },
      email: {
        required: true,
        email: true
      },
      nombre: {
        required: true,
        minlength: 5
      }
    }
  });

});
