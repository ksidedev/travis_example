let arrayExport = [];
let arrayContent = () => {
    var compound = [
        {
            car: 'Volvo',
            people: 5,
            houses: 7
        },
        {
            car: 'Toyota',
            people: 2,
            houses: 2
        },
        {
            car: 'Nissan',
            people: 12,
            houses: 1
        },
        {
            car: 'Mitsubushi',
            people: 8,
            houses: 2
        }
    ]

    arrayExport = compound;
    return new Promise(function (resolve, reject) {
        resolve(true);
    });
}

/* Sort the initial compound array by number of people */
let updatedCarArray = [];
let sortInitialArrayByPeople = () => {
    updatedCarArray = arrayExport.sort(function(a,b) {
        if(a.people > b.people) {
            return 1;
        } else{
            return -1;
        }
    });
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(true);
            console.log(updatedCarArray)
        }, 3000);
    });
}

/* LOOP through updated compound array and get cars. */
let loopCars = () => {
    let carsArray = updatedCarArray.map(function(element){
        $('.showCars').append(`<p> ${element.car}</p>`);
        return element.car
    })
    newCarArray = carsArray
    console.log(newCarArray)
}

/* Show done message */
let AllDone = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(true);
            console.log('Done Burger')
        }, 1000);
    });
}

arrayContent().then(function() {
    return sortInitialArrayByPeople();
}).then(function() {
    return loopCars();
}).then(function() {
    return AllDone();
});
