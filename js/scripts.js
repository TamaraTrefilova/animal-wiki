$(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var animal = $("#animals").val();
    $(".cat, .dog, .rabbit").hide();
    // alert(animal);
    if(animal==="Cat"){
      $(".cat").show();
    } else if(animal==="Dog"){
      $(".dog").show();
    } else if(animal==="Rabbit"){
      $(".rabbit").show();
    }
//
  });
});
