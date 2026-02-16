const counter = document.querySelector(".counter");
let count = 0;
const decrement = document.querySelector(".decrement")
const reset = document.querySelector(".reset")
const increment = document.querySelector(".increment")

function onClick(ele, operation){
  ele.addEventListener("click", () => {
    switch(operation){
      case "i":
        count++;
        break;
      case "r":
        count = 0;
        break;
      case "d":
        count--;
        break;
    }
    counter.textContent = count;
  });
}
onClick(increment, "i");
onClick(reset, "r");
onClick(decrement, "d");