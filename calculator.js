let input=document.querySelector("input")
function display(char){
    input.value += char;

}

function result(){
    input.value = eval(input.value);
}

function remove(){
    input.value = "";

}

function back(){
    input.value = input.value.substring(0,input.value.length-1);

}

// let but = document.querySelectorAll("button")[0];

// but.addEventListener("mouseenter",()=>{
//     but.style.height = "100px";
//     but.style.transition = "1s";
// })
// but.addEventListener("mouseout",()=>{
//     but.style.height = "100px";
//     but.style.transition = "1s";
// })









