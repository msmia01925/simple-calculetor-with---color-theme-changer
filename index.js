// var outputscreen = document.getElementById("output");

// function display (num){
//     outputscreen.value += num;
// }
// function calculate(){
//     try{
//         outputscreen.value = eval(outputscreen.value);

//     }
//     catch(err){
//         alert("please enter vaild number")
//     }
// }

// var clearbtn = document.getElementById("id");

// clearbtn.addEventListener("click",function(){
//     outputscreen.value = ""
// })

// var del = document.getElementById("placemaines");


// del.addEventListener("click",function(){
//     outputscreen.value = outputscreen.value.slice(0,-1)
// })

var output = document.getElementById("output");

function display(num){
      output.value += num
}

var result = document.getElementById("equel");

result.addEventListener("click" , function(){
    try{
      output.value = eval(output.value)   
    }
    catch{
        alert("invalid")
    }
})

var clearbtn = document.getElementById("id");

clearbtn.addEventListener ("click" , function(){
    output.value = ""
})

var del = document.getElementById("del");

del.addEventListener("click",function(){
    output.value = output.value.slice(0,-1)
})







// ---------------theme-color section -------------


var theme_btn1 = document.getElementById("theme-btn1");
var color_box = document.getElementById("color-box")

theme_btn1.onclick = () =>{
    color_box.classList.toggle("active")
    theme_btn1.classList.toggle("active2")
}

var theme_btn = document.querySelectorAll(".theme-btn");

theme_btn.forEach(color =>{
    color.addEventListener("click" , () =>{
        var datacolor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--main-color" ,datacolor)
    })
})