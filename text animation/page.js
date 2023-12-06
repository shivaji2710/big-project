


function mousemove(){
window.addEventListener("mousemove",function(dets){
    document.querySelector("#curser").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)` 
        
})
}

document.querySelectorAll(".elem").forEach(function(elem){
elem.addEventListener("mousemove",function(data){
    gsap.to(elem.querySelector("img"),{
        opacity:2,
        ease:Power3,
    })
})

})

function textanum(){
 var tl =gsap.timeline()
 tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut
 })
 .to(".textanimated",{
    y:0,
    duration:1.3,
    ease:Expo.easeInOut,
    stagger:.2
 })
 .from("#end",{
    y:-10,
    opacity:0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInOut
 })
}



mousemove()
textanum()