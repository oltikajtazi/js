//$(window).ready(function(){
 //   alert("its working");
//})


$('li').click(function(){
    alert("click");

})

$('#btn').click(function(){

    console.log($('#h1').text());
    $('#h1').text('Testing text');
    $('#h1').append('extra text')
})




$('#btn2').on("click",function(){
    console.log("second button is clicked")

})



$("#mydiv").click(function(){
    $(this).addclass("clicked");
})
.find('span')
.attr('title','hover over me')

$("#btn3").click(function(){
    $('.hidden').show('slow');
});


$("#btn4").click(function(){
    $('.hidden').hide();
});


$("#square").click(function(){
    $("#square").animate({
        'width': '200px',
        'height' : '200px'
    })

})

$(".testing").click(function(){
    $(".testing").animate({
        'left': '+=50px',
        'opacity' : 0.25,
        'fontSize':'30px'
    },300,
    function(){
        console.log("animation is completed");
    }
   );
})







