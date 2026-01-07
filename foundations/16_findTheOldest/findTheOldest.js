const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function (people) {



    let highestAge = null;
    for (let person of people) {

        if (person.yearOfDeath === undefined) {
            const currentYear = new Date().getFullYear();
            person.yearOfDeath = currentYear;
        }

        person.age = person.yearOfDeath - person.yearOfBirth;
        if (!highestAge) {
            highestAge = person;
        } else if (highestAge.age < person.age) {
            highestAge = person;
        }
    }
    // console.log(highestAge);
    console.log(highestAge);
    return highestAge;
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
