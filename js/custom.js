$('#myBtn').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
          $(this).toggleClass('animate');
    } else {
      $("#myVideo").prop('muted', true);
      $(this).toggleClass('animate');
    }
});