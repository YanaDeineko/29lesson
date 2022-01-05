// 1.
let objectCar = {
    manufacturer: 'Germany',
    model: 'BMW X5',
    year: 2020,
    speed: 150,
    fuel_Tank: 83,
    liters_per_100_km: 11,
    driver: 'Lord Voldemort',

    info() {
        console.log(`
    manufacturer : ${this.manufacturer}, 
    model : ${this.model},
    year : ${this.year},
    speed : ${this.speed},
    fuel_Tank : ${this.fuel_Tank},
    liters_per_100_km : ${this.liters_per_100_km},
    driver : ${this.driver},
    `);
    },

    Driver(newDriver){
    let drivers = this.driver + " ," + newDriver;
    console.log(drivers);
    },

    refill(gasoline) {
        if (gasoline <= 5) {
            console.log('You need to find a gas station');
        } else if (gasoline > 5 && gasoline < 15) {
            console.log('You need to refuel your car soon');
        } else {
            console.log('You tank is full.');
        }
    },
};

let newDriver = ' Hermione Granger';
objectCar.info();
objectCar.refill(5);
objectCar.Driver(newDriver);


// 2.
let time = {
    hours: 10,
    minutes: 13,
    seconds: 22,

    showTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    Seconds(seconds) {
        if (seconds <= 0) {
            console.log("You entered incorrect time, changes your time please");
        } else if (seconds + this.seconds >= 60) {
            let differenceMin = Math.floor((this.seconds + seconds) / 60);
            this.seconds = (this.seconds + seconds) % 60;
            this.Minutes(differenceMin);
        } else {
            this.seconds += seconds;
        }
    },

    Minutes(minutes) {
        if (minutes <= 0) {
            console.log("You entered incorrect time, changes your time please");
        } else if (this.minutes + minutes >= 60) {
            let differenceHours = Math.floor((this.minutes + minutes) / 60);
            this.minutes = (this.minutes + minutes) % 60;
            this.Hours(differenceHours);
        } else {
            this.minutes += minutes;
        }
    },

    Hours(hours) {
        if (hours <= 0) {
            console.log("You entered incorrect time, changes your time please");
        } else if (hours + this.hours >= 24) {
            this.hours = (this.hours + hours) % 24;
        } else {
            this.hours += hours;
        }
    }
};

time.showTime();
time.Seconds(320);
time.showTime();
time.Minutes(130);
time.showTime();
time.Hours(4);
time.showTime();


// 3.
let fraction = {
    divided: 2,
    divisor: 5,

    addition(divided, divisor) {
        let sum = this.divided / this.divisor + divided / divisor;
        console.log(sum);
    },

    subtraction(divided, divisor) {
        let subtr = this.divided / this.divisor - divided / divisor;
        console.log(subtr);
    },

    multiplication(divided, divisor) {
        let multip = (this.divided / this.divisor) * (divided / divisor);
        console.log(multip);
    },

    division(divided, divisor) {
        let divis = (this.divided / this.divisor) / (divided / divisor);
        console.log(divis);
    },
};

let divided = 4;
let divisor = 10;
fraction.addition(divided, divisor);
fraction.subtraction(divided, divisor);
fraction.multiplication(divided, divisor);
fraction.division(divided, divisor);