const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page1Anim(){
    var t1= gsap.timeline();

    t1.from('.nav',{
        y: '-20',
        opacity:0,
        duration:1
    })
    .to('.BoundingElem',{
       y:0,
       duration:1 ,
       ease: Expo.easeInOut,
       stagger:.2,
       delay:-.5
    })
    .from('.footer',{
        y: -10,
        opacity:0,
        delay:-1,
        duration:1.5
    })
     
}
var cursor = document.querySelector('.cursor');

function movingCrsr(){
    window.addEventListener('mousemove',function(index){
        cursor.style.transform=`translate(${index.clientX}px,${index.clientY}px)`;
        
    })
}


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

  
    elem.addEventListener("mouseleave", function (dets) {
        elem.querySelector('img').style.display = 'none'; 
      gsap.to(elem.querySelector("img"), {
        // opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
        elem.querySelector('img').style.display = 'block'; 
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

movingCrsr();
page1Anim();