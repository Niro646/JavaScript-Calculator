let input = document.getElementById("inputBox"); //stores referance to element known by the id "inputbox" into variable "input"
let buttons = document.querySelectorAll("button"); //selects all buttons from document

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string); //The eval() function evaluates a string and returns its completion value.
      input.value = string; // changing a attribute of input called "value" to the new string
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
