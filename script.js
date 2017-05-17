
$(document).ready(function(){ 


/******* EFFECTS FOR NAV AND PAGE SCROLLING ******/

$("a#goHome").click(function() {
     $('html, body').animate({
         scrollTop: $("section#home").offset().top   }, 1000);
 });
 
$("a#goAbout").click(function() {
 $('html, body').animate({
	 scrollTop: $("section#about").offset().top   }, 1000);
});

$("a#goSkills").click(function() {
 $('html, body').animate({
	 scrollTop: $("section#skills").offset().top   }, 1000);
});

$("a#goWork").click(function() {
 $('html, body').animate({
	 scrollTop: $("section#work").offset().top   }, 1000);
});

$("a#goContact").click(function() {
 $('html, body').animate({
	 scrollTop: $("section#contact").offset().top   }, 1000);
});

/*Draggable Skill Section
$( "#draggable").draggable({containment:"parent", scroll:false, grid: [ 80, 80 ] });
$( "#draggable1").draggable({containment:"parent", scroll:false, grid: [ 80, 80 ] });
$( "#draggable2").draggable({containment:"parent", scroll:false, grid: [ 80, 80 ] });
$( "#draggable3").draggable({containment:"parent", scroll:false, grid: [ 80, 80 ] });
*/

/******* OVERLAY HOVER BY WORK/PROJECTS SECTION *******/
function overlayIn() {
	$(".overlayDiv", this).addClass("overlay"); 
	$(".overlayText", this).removeClass("disappear");
}

function overlayOut() {
	$(".overlayDiv", this).removeClass("overlay");
	$(".overlayText", this).addClass("disappear");
}

$(".workCol").hover(overlayIn, overlayOut);

/******** BACK TO TOP BUTTON ******/

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

/******* BACK TO TOP BUTTON ****
window.onscroll = function() {scrollFunction()};

// Show "Back to Top" button when user scrolls down 20px from the top of the document
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#toTopBtn").style.display = "block";
    } else {
		$("#toTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
$("#toTopBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("section#home").offset().top }, 1000);
});***/


}); // End Document Ready