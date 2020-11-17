function countDown() {
    let count = 6;
    while (count > 1) {
        count = count - 1;
        console.log(count);
    }
}
countDown();

function countUp(start, end) {
    console.log(start);
    while (start < end) {
        start = start +1;
        console.log(start);
    }
}
countUp(0,10);

function isLong(word) {
    if (word.length > 10) {
        // console.log(true);
        return true;
    } else{
        // console.log(false);
        return false;
    }
}
isLong('abracadabra');

function whatWaterState(temperature) {
    if (temperature <= 32) {
        console.log("solid");
    } else if (temperature < 212) {
        console.log("liquid");
    } else if (temperature >= 212) {
        console.log('gas');
    }
}
whatWaterState(20);
whatWaterState(211);
whatWaterState(220);

const sandiwches = [
    {
        type: 'italian',
        calories: 1000,
        cost: 7.69,
        isVegetairan: false,
    },
    {
        type: 'veggie',
        calories: 500,
        cost: 5.50,
        isVegetairan: true,
    },
    {
        type: 'meatball',
        calories: 900,
        cost: 8.25,
        isVegetairan: false,
    },
    {
        type: 'jackfruit',
        calories: 650,
        cost: 8.50,
        isVegetairan: true,
    }
]
function makeSandwich(sandwichArray, type, calories, cost, isVegetairan) {
    let newSandwich = {
        type: type,
        calories: calories,
        cost: cost,
        isVegetairan: isVegetairan,
    }
    sandwichArray.push(newSandwich)
}
makeSandwich(sandiwches, "caprese", 500, 7.75, true);
// console.log(sandiwches);

function findVegetarianSandwich(sandwichArray) {
    const foundVegetarian = sandwichArray.find(x => x.isVegetairan === true)
    // console.log(foundVegetarian);
    return foundVegetarian;
}
findVegetarianSandwich(sandiwches);


function findCheapestSandwich(sandwichArray) {
    let min = 10;
    let cheapestSandwich = '';
    sandwichArray.forEach(element => {
        if(element.cost < min) {
            min = element.cost;
            cheapestSandwich = element;
        }
    });
    // console.log(cheapestSandwich);
    return cheapestSandwich;
}
findCheapestSandwich(sandiwches);

