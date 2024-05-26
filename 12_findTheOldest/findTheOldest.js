const findTheOldest = function(a = []) {
let index = a.map((item) => {
    if("yearOfDeath" in item){
        return item.yearOfDeath - item.yearOfBirth;
    }
    else{
        date = new Date();
        return date.getFullYear() - item.yearOfBirth;
    }
});
let sorted = index.map(item => item);
sorted.sort((a, b) => b - a);
let lowest = sorted[0];
let resultInd = index.findIndex(item => item == lowest);
return a[resultInd];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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

  findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
