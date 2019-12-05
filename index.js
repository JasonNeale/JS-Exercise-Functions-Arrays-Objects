function addNumbers( num1, num2 ) {
    return num1 + num2;
}

function makePersonObject( id, name, email ) {
    let newArray = { id, name, email };
    return newArray;
}

function getName( person ) {
    return `Hello, my name is ${person.name}`;
}

function makeSmartPerson( name ) {
    return {
        name: name,
        sum: ( a, b ) => { return a + b },
        speak: () => { return `Hello, my name is ${name}` }
    }
}

function get3rdCar( inventory ) {
    const the3rd = inventory.find(( item, index ) => {
      return index === 2
    })
    return `The car is a ${the3rd.car_make} ${the3rd.car_model}`
}

function getCarInfoByIndex( inventory, index ) {
    let make = inventory[ index ].car_make;
    let model = inventory[ index ].car_model;
    return `This is a ${make} ${model}`;
}

function getLastCarInfo( inventory ) {
    let make = inventory[inventory.length - 1].car_make;
    let model = inventory[inventory.length - 1].car_model;
    return `This is a ${make} ${model}`;
}

function getCarInfoById(inventory, id) {
    for ( let i = 0; i < inventory.length; i++ ) {
        if (inventory[i].id === id) {
            return `This is a ${inventory[i].car_make} ${inventory[i].car_model}`;
        }
    }
}

function sortCarInventory( inventory ) {
    inventory.sort( function ( a, b ) {
        let start = a.car_model;
        let end = b.car_model;

        if( start < end ) {
            return -1;
        } else if( start > end ) {
            return 1;
        }
        
        return 0;
    });
    
    return inventory;
}

function getModelYears( inventory ) {
    let yearsArr = [];

    for(let i = 0; i < inventory.length; i++) {
        yearsArr.push(inventory[i].car_year);
    }

    return yearsArr;
}

function getOlderCars( inventory, maxYear ) {
    let yearsArr = [];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year <= maxYear) {
            yearsArr.push(inventory[i]);
        }
    }

    return yearsArr;
}

function getGermanCars(inventory) {
    let makeArr = [];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_make === 'Audi') { makeArr.push(inventory[i]) }
        if (inventory[i].car_make === 'Mercedes-Benz') { makeArr.push(inventory[i]) }
        if (inventory[i].car_make === 'Volkswagen') { makeArr.push(inventory[i]) }  
        if (inventory[i].car_make === 'BMW') { makeArr.push(inventory[i]) }
    }

    return makeArr;
}

const sum = (a,b) => {return a + b};
const addFive = (num) => {return num + 5};
const argTimesTwo = (num) => {return num * 5};

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(odometer) {
    return {
        odometer: odometer,
        drive: function(distance) {
            return this.odometer += distance;
        }
    }
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (addNumbers) { module.exports.addNumbers = addNumbers }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
