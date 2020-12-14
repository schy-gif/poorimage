    // FIX THIS . PUT IT IN ITS OWN FILE
     




    //FIX THIS . PUT IT IN ITS OWN FILE
$('.marquee').marquee({
    //duration in milliseconds of the marquee
    duration: 45000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 500,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true, 
    startVisible: true
})

$("#layout1__s1").hover(function(){
    $(".hover-on-1").addClass("active");
}, function(){
    $(".hover-on-1").removeClass("active");
})

// $("#box1").hover(function(){
//     $(this).addClass("open");
// }, function(){
//     $(".hover-on-1").removeClass("active");
// })




$("#layout1__s2").hover(function(){
    $(".hover-on-2").addClass("active");
}, function(){
    $(".hover-on-2").removeClass("active");
})



$("#layout1__s3").hover(function(){
    $(".hover-on-3").addClass("active");
}, function(){
    $(".hover-on-3").removeClass("active");
})

$("#layout1__s4").hover(function(){
    $(".hover-on-4").addClass("active");
}, function(){
    $(".hover-on-4").removeClass("active");
})

$("#layout1__s5").hover(function(){
    $(".hover-on-5").addClass("active");
}, function(){
    $(".hover-on-5").removeClass("active");
})

$("#layout1__s6").hover(function(){
    $(".hover-on-6").addClass("active");
}, function(){
    $(".hover-on-6").removeClass("active");
})
// console.log("testing")
// $(".menu").click(function(){
// 	$(this).toggleClass("open")
// })



// $(".double").hover(function(){
// 	$(".another").addClass ("shapeShift")
		
// },function(){
// 	$(".another").removeClass ("shapeShift")
		
// })
