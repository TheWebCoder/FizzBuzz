//get the values from the page
//start or controller function
function getValues() {
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    

    //We need to validate our input
    //parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call fizzBuzz
        let fbArray = fizzBuzzC(fizzValue,buzzValue);
        //call display data by passing in the array
        displayData(fbArray);
    } else {
        alert("You must enter integers");
    }
}


//Initiate FizzBuzz
function fizzBuzz(fizzValue,buzzValue) {

    let returnArray = []

    //loop from 1 to 100
    //Check to see if divisible by fizz value, buzz value, or both
    for (let i = 1; i <= 100 ; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push("FizzBuzz")
        } else if (i % fizzValue == 0) {
            returnArray.push("Fizz");
        } else if (i % buzzValue == 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

            Fizz = i % fizzValue == 0;
            Buzz = i % buzzValue == 0;

            switch(true)
            {
                case Fizz && Buzz:{
                    returnArray.push("FizzBuzz");
                    break;
                }
                case Fizz: {
                    returnArray.push("Fizz");
                }
                case Buzz: {
                    returnArray.push("Buzz");
                }
                default:{
                    returnArray.push(i);
                    break;
                }
            }
     }

    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];
   

    for(let i = 1; i <= 100; i++) {

        let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "" ) || i);
        returnArray.push(value);

    }

    return returnArray;
}

function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab just the td and put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);

    }

}