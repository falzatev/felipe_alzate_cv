// gsap animations

gsap.from('.profile-img, .profile-img-line', {duration: 2.5, opacity: 0, scale: 0.3, ease: 'expo'});

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("experience_left") || elem.classList.contains("profile-details")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("experience_right")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".experience").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });

    gsap.utils.toArray('.title').forEach((elem) => {
        hide(elem);
  
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) }
        })
    });
    
    gsap.utils.toArray('.profile-details').forEach((elem) => {
        hide(elem);
  
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem, -1) },
            onEnterBack: function() { animateFrom(elem) },
            onLeave: function() { hide(elem) }
        })
    });
    
    gsap.utils.toArray('.experience-date').forEach((elem) => {
        hide(elem);
  
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem, -1) },
            onEnterBack: function() { animateFrom(elem) },
            onLeave: function() { hide(elem) }
        })
    });
  });


  