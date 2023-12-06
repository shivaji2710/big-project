gsap.to("#nav",{
    backgroundColor:"#000",
    height:"13vh",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:2,
    }
})

var cur=document.querySelector("#curser")
var curblur=document.querySelector("#curser-blur")
document.addEventListener("mousemove",function(data){
    cur.style.left=data.x+"px"
    cur.style.top=data.y+"px"
    curblur.style.left=data.x-120+"px"
    curblur.style.top=data.y-120+"px"
})

var circule=document.querySelectorAll("#nav h2")
circule.forEach(function(data){
    data.addEventListener("mouseenter",function(){
        cur.style.scale=3
        cur.style.border=".1px solid #fff"
        cur.style.backgroundColor="transparent"

    })

    data.addEventListener("mouseleave",function(){
        cur.style.scale=1
        cur.style.border="0px solid #A1D020"
        cur.style.backgroundColor="#A1D020"

    })
})


gsap.from("#page2-aboutus ,img,aboutustext",{
    y:80,
    opacity:0,
    duration:1,
    stagger:0.41,
    scrollTrigger:{
        trigger:"#page2-aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 68%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.6,
    opacity:0,
    duration:3,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        star:"top 70%",
        end:"top 50%",
        scrub:2
    }
})

gsap.from("#img1",{
    y:-50,
    x:-70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 76%",
        scrub:1
    }
})
gsap.to("#img2",{
    y:50,
    x:70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 76%",
        scrub:2
    }
})