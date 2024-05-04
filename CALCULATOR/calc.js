const output = document.getElementById("output");

function displayKey(input) {
	const lastChar = output.value.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(input)) {
    	output.value = output.value.slice(0, -1) + input; 
    }else{
    	output.value += input; 
    	output.scrollLeft = output.scrollWidth;
	}
}

function compute() {
    try {
        const result = eval(output.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("can't divide to 0");
        }
        output.value = result;
    } catch (error) {
        output.style.fontSize = "40px";
        if (error.message === "can't divide to 0") {
            output.value = error.message;
        } else {
            output.value = "Syntax ERROR";
        }
    }
}

function reset() {
	output.value = "";
}

function del() {
	output.value = output.value.slice(0, -1);
}