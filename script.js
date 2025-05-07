let input = document.querySelector("input");
let button = document.querySelectorAll("button");

let str = "";

let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener("click", (evt) => {
        if (evt.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
        } else if (evt.target.innerHTML == "AC") {
            str = ""
            input.value = str;
        } else if (evt.target.innerHTML == "DEL") {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }else{
            str += evt.target.innerHTML;
            input.value = str;
        }


    })
})