function fibonacci() {
  let number = document.getElementById("number").value;
  let num1 = 1, num2 = 1, sequence;

  if(number <= 100 && number >= 1) {
    let array = [num1];
    for(let i = 2; i <= number; i++) {
      sequence = num1 + num2;
      num1 = num2;
      num2 = sequence;
      array.push(num1);
    }
    alert(array.join(", "));
  } else {
    alert("Invalid Input. Input number only from 1 to 100");
  }
}

document.getElementById("submit").addEventListener("click", fibonacci);
