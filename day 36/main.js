//$(window).ready(function(){
 //   alert("its working");
//})


$('li').click(function(){
    alert("click");

})


$('h1').click(function(){
    $('#h1').text("testing text");
    $('#h1').append("testing text");
})

$('#btn').on("click",function(){
    console.log("second button is clicked")

})



$("#mydiv").click(function(){
    $(this).addclass("clicked");


})


$("#btn3").click(function(){


})


