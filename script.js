let moon = document.getElementById("moon")
let body = document.querySelector("body")
let sun = document.getElementById("sun")

moon.addEventListener("click",function(){
    body.style.background = "black"
    body.style.color = "white"
})
sun.addEventListener("click",function() {
    body.style.background= "white"
})

console.log(moon,sun);