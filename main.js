function print(text) {
    const dest = document.querySelector("main");
    const newElement = document.createElement("div");
    const textElement = document.createTextNode(text);
    dest.appendChild(textElement);
    dest.appendChild(newElement);
}







// 1. Display the numbers from 1 to 20. (1, 2, 3, ...,19, 20)

var questionOne = [];
for (let i = 1; i <= 20; i++) {
   questionOne.push(i);
}

print("1: " + JSON.stringify(questionOne));

// 2. Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)

var questionTwo = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        questionTwo.push(i);
    }
}

print("2: " + JSON.stringify(questionTwo));

// 3. Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)

var questionThree = [];
for (let i = 1; i <= 20; i++) {
    if ((i % 2) !== 0) {
        questionThree.push(i);
    }
}

print("3: " + JSON.stringify(questionThree));

// 4. Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)

var questionFour = [];
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        questionFour.push(i);
    }
}

print("4: " + JSON.stringify(questionFour));

// 5. Display the square numbers (Links to an external site.)Links to an external site. up to 100. (1, 4, 9, ..., 81, 100)

var questionFive = [];
for (let i = 1; i <= 10; i++) {
    questionFive.push(i * i);
}

print("5: " + JSON.stringify(questionFive));

// 6. Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)

var questionSix = [];
for (let i = 20; i > 0; i -= 1) {
    questionSix.push(i);
}

print("6: " + JSON.stringify(questionSix));

// 7. Display the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)

var questionSeven = [];
for (let i = 20; i > 0; i -= 1) {
    if (i % 2 == 0) {
        questionSeven.push(i);
    }
}

print("7: " + JSON.stringify(questionSeven));

// 8. Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)

var questionEight = [];
for (let i = 20; i > 0; i -= 1) {
    if ((i % 2) !== 0) {
        questionEight.push(i);
    }
}

print("8: " + JSON.stringify(questionEight));


// 9. Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)

var questionNine = [];
for (let i = 100; i > 0; i -= 1) {
    if (i % 5 == 0) {
        questionNine.push(i);
    }
}

print("9: " + JSON.stringify(questionNine));

// 10. Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)

var questionTen = [];
for (let i = 10; i > 0; i -= 1) {
    questionTen.push(i * i);
}

print("10: " + JSON.stringify(questionTen));

// 11. Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940,
    472
];

print("11: " + JSON.stringify(sampleArray));


// 12. Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)

var questionTwelve = [];
for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 0) {
        questionTwelve.push(sampleArray[i] + " ");
    }
}

print("12: " + JSON.stringify(questionTwelve));

// 13. Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)

var questionThirteen = [];
for (let i = 0; i < sampleArray.length; i++) {
    if ((sampleArray[i] % 2) !== 0) {
        questionThirteen.push(sampleArray[i] + " ");
    }
}

print("13: " + JSON.stringify(questionThirteen));

// 14. Display the square of each element in sampleArray. (219961, 570025, ..., 222784)

var questionFourteen = [];
for (let i = 0; i < sampleArray.length; i++) {
    questionFourteen.push(sampleArray[i] * sampleArray[i] + " ")
}

print("14: " + JSON.stringify(questionFourteen));

// 15. Display the sum of all the numbers from 1 to 20.

let questionFifteen = 0;
for (let i = 1; i <= 20; i++) {
    questionFifteen += i;
}

print("15: " + JSON.stringify(questionFifteen));

// 16. Display the sum of all the elements in sampleArray.

function sum(array) {
    let s = 0;

    for (let i = 0; i < sampleArray.length; i++) {
        s += array[i];
    }
    print("16: " + JSON.stringify(s));
}

sum(sampleArray);


// 17. Display the smallest element in sampleArray.

print("17: " + JSON.stringify((Math.min.apply(null, sampleArray))));


// 18. Display the largest element in sampleArray.

print("18: " + JSON.stringify((Math.max.apply(null, sampleArray))));

// 19. Display 20 solid gray rectangles, each 20px high and 100px wide.

for (let i = 1; i <= 20; i++) {
    let newBox = document.createElement("div");
    newBox.className = "box";

    let newText = document.createTextNode("19");
    newBox.appendChild(newText);

    let destination = document.getElementById("main");
    destination.appendChild(newBox);

}

// 20. Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).

for (let i = 1; i <= 20; i++) {
    let newBox = document.createElement("div");
    newBox.className = "box3";

    let newText = document.createTextNode("20");
    newBox.appendChild(newText);

    let destination = document.getElementById("main");
    destination.appendChild(newBox);

    let width = i * 5;
    newBox.style.width = 105 + width + "px";
}

// 21. Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.

function newWidth(arr) {
    for (let i = 0; i < sampleArray.length; i++) {
        let newBoxC = document.createElement("div");
        newBoxC.className = "box3";

        let newText = document.createTextNode("21");
        newBoxC.appendChild(newText);

        let destinationB = document.getElementById("two");
        destinationB.appendChild(newBoxC);

        newBoxC.style.width = arr[i] + "px";
    }
}

newWidth(sampleArray)


//22. As in #21, but alternate colors so that every other rectangle is red.

function newRed(arr) {
    for (let i = 0; i < sampleArray.length; i++) {
        var newBoxC = document.createElement("div");
        newBoxC.className = "box3";

        var newText = document.createTextNode("22");
        newBoxC.appendChild(newText);

        var destinationB = document.getElementById("two");
        destinationB.appendChild(newBoxC);

        newBoxC.style.width = arr[i] + "px";

        if (i % 2 == 0) {
            newBoxC.style.backgroundColor = "red";
        }
    }
}

newRed(sampleArray)



//23. As in #21, but color the rectangles with even widths red (orange).


function newEven(arr) {
    for (let i = 0; i < sampleArray.length; i++) {
        var newBoxC = document.createElement("div");
        newBoxC.className = "box3";

        var newText = document.createTextNode("23");
        newBoxC.appendChild(newText);

        var destinationB = document.getElementById("two");
        destinationB.appendChild(newBoxC);

        newBoxC.style.width = arr[i] + "px";

        if (arr[i] % 2 === 0) {
            newBoxC.style.backgroundColor = "orange";
        }

    }
}

newEven(sampleArray)