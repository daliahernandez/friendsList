$(document).ready(function(){
  $('#userAnswers').submit(function(event){

    var idTags = ['fOne', 'fTwo', "fThree"]

  //  var userAnswers = []
    idTags.forEach(function(idTags){
      var userInput = $('input#' + idTags).val();
    //  userAnswers.push(userInput)
    });

    $('.friendList').text(userInput);
    event.preventDefault();
  });
});
