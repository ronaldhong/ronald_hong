/////
//About me Image Slide in////
// $("#card").flip();
////nav bar smooth scroll
function Scroll($this){
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($this.title).offset().top
  }, 1200);
}



$(document).ready(function() {
  var animation_elements_l =$(".position-onscroll-l")
  var animation_elements_r =$(".position-onscroll-r")
  var animation_elements_title =$(".wrapper")
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view(animation_elements, boolean) {
      //get current window information
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
      // console.log(window_height, window_top_position, window_bottom_position);
      $.each(animation_elements,function(){
        //get the element s information
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
        }
      });
    }
    //on or scroll, detect elements in view
    var waiting= false;
    $(window).scroll(function() {
      if (waiting){
        return;
      }
      check_if_in_view(animation_elements_l)
      check_if_in_view(animation_elements_r)
      setTimeout(function () {
        waiting = false;
      }, 5000);
    })
      //trigger our scroll event on initial load
      $(window).trigger('scroll');
  })

///Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

////////Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction($this) {
  if (($this.title)=="Toggle Navigation Menu"){
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
  }
  else{
    console.log("in");
    var x = document.getElementById(($this.title))
    if (x.className.indexOf("work_show")==-1){
      console.log("no");
      x.className =x.className.replace(" work_hide"," work_show");
    }else{
      console.log("yes");
      x.className = x.className.replace("work_show"," work_hide")
    }
  }
}

///////Home title scroll at different speed
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseFloat(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});
