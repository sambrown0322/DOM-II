// Your code goes here
let first = document.querySelector(".intro img");
first.addEventListener("mouseout", (event) => {
  event.target.style.opacity = "1";
});
first.addEventListener("mouseover", (event) => {
  event.target.style.opacity = ".8";
});
let introText = document.querySelectorAll("p");
introText.forEach(item => item.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white"
    // addEventListener("dblclick", (event) => {
//   event.target.style.backgroundColor = "black";
//   event.target.style.color = "white";
}));
document.addEventListener("keydown", () => {
  introText.forEach(item => {
    item.style.backgroundColor = "white";
    item.style.color = "black";

  })
  
});
function textColorChange(event) {
    event.target.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (color.length < 7) color += "0";
}
// introText.forEach(item => item.addEventListener("wheel", textColorChange)) 
let body = document.querySelector("body")
body.addEventListener("wheel", textColorChange)

// introText.forEach(item => item.addEventListener("copy", () => {
//     alert("Copied to clipboard!");
// }))
body.addEventListener("copy", () => {
    alert("Don't steal my shit!");
})
let buttons = document.querySelectorAll(".btn")
buttons.forEach(item => item.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
}))
buttons.forEach(item => item.addEventListener("mouseup", (event) => {
    event.target.style.backgroundColor = "#17A2B8"
    event.target.style.color = "white"
}))
buttons.forEach(item => item.addEventListener("mouseover", (event) => {
    event.target.style.color = "#17A2B8"
    event.target.style.backgroundColor = "white"
}))
buttons.forEach(item => item.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "#17A2B8"
    event.target.style.color = "white"
}))
let links = document.querySelectorAll("nav a")
links.forEach(item => item.addEventListener("click", (event)=> {
    event.preventDefault()
    console.log("hello")
}))
body.addEventListener("contextmenu", (event) => {
     event.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (color.length < 7) color += "0";
})