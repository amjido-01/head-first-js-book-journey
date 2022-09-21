const scores = [
    60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
];

const costs = [
    .25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];

function getHigherVal(arr) {
    let higherVal = 0;
    arr.forEach(items => {
        if (items > higherVal) {
            higherVal = items;
        }
    })
    return higherVal
}

let higherVal = getHigherVal(scores)
console.log(higherVal);

function getIndex(arr, biggerNumber) {
    let indexArr = [];
    arr.forEach( (items, index) => {
        if (items == higherVal) {
            indexArr.push(index)
        }
    })
    return indexArr;
}

let indexArr = getIndex(scores, higherVal)
console.log(indexArr)


function mostCost(arr, costs, higherVal) {
    let cost = 100;
    let index;
    
    for (let i = 0; i < scores.length; ++i) {
        if (scores[i] == higherVal) {
            if (cost > costs[i]) {
                index = 1;
                cost = costs[i]
            }
        }
    }
}

let mostCostResult = mostCost(scores, costs, higherVal);
console.log(mostCostResult);


const car = {
    name: 'Honda',
    brand: 'Hala',
    color: 'Red',
    year: 2000,
    mileage: 2800,
    passingers: 6,
    faul: 'Diesel',
    washed: true
}

function testing(taxi) {
    if (taxi.brand === 'Hala') {
        return true;
    } else {
        return false;
    }
} 

let result = testing(car)
if (result) {
    console.log(`hi`)
} else {
    console.log('hy')
}

const main = document.createElement(`div`);
main.setAttribute(`class`, 'container-main');
let number = 200;
for (let i = 0; i < number; i++) {
    const miniDiv = document.createElement(`div`);
    main.appendChild(miniDiv)
}
console.log(main)

function robotRefactory(name, model, makeSound) {
    return {
        name: name,
        model: model,
        makeSound() {
            console.log('hello')
        },
    }
}

robotOne = robotRefactory('piana', 2000)
robotTwo = robotRefactory('sandia', 3000)
console.log(robotOne.name)





function alerting() {
    alert(`hello world`)
}
let timerId;  //setInterval(alerting, 2000)
function timeHandler() {
    if (timerId) {
        timerId = setInterval(alerting, 2000)
    }
}


const word = 'This iS a bOy';

function myFunc(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(myFunc(word));

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
      console.log(result)
    }
  
    return result.slice(0, result.length - 1);
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function alphaModify(str1) {
    let resultTwo = '';
    str1.forEach(items => {
        let codeTwo = str1.toUpperCase().charCodeAt(items);
        if (codeTwo > 64 && codeTwo < 91) resultTwo += (codeTwo - 64) + ' ';
    })
    return resultTwo.slice(0, resultTwo.length - 1);
}
console.log(alphaModify("The sunset sets at twelve o' clock"))