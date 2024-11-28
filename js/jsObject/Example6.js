const sportsmen = [
  {
    name: "Lionel Messi",
    sport: "Football",
    country: "Argentina",
    age: 37,
    ranking: 1,
    totalMedals: 0,
  },
  {
    name: "LeBron James",
    sport: "Basketball",
    country: "USA",
    age: 39,
    ranking: 1,
    totalMedals: 4,
  },
  {
    name: "Roger Federer",
    sport: "Tennis",
    country: "Switzerland",
    age: 42,
    ranking: 5,
    totalMedals: 20,
  },
  {
    name: "Cristiano Ronaldo",
    sport: "Football",
    country: "Portugal",
    age: 39,
    ranking: 2,
    totalMedals: 0,
  },
  {
    name: "Usain Bolt",
    sport: "Athletics",
    country: "Jamaica",
    age: 37,
    ranking: 1,
    totalMedals: 8,
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    country: "USA",
    age: 39,
    ranking: 1,
    totalMedals: 23,
  },
  {
    name: "Novak Djokovic",
    sport: "Tennis",
    country: "Serbia",
    age: 37,
    ranking: 2,
    totalMedals: 24,
  },
  {
    name: "Virat Kohli",
    sport: "Cricket",
    country: "India",
    age: 35,
    ranking: null,
    totalMedals: 0,
  },
  {
     name: "Rinku shingh",
     sport: "Cricket",
     country: "India",
     age: 30,
     ranking: null,
     totalMedals: 0,
   },
  {
    name: "Serena Williams",
    sport: "Tennis",
    country: "USA",
    age: 42,
    ranking: 8,
    totalMedals: 23,
  },
  {
    name: "Kylian Mbappé",
    sport: "Football",
    country: "France",
    age: 25,
    ranking: 1,
    totalMedals: 0,
  },
];
// country india and age > 30

const indiaAndAgeAboveThirty = sportsmen.filter(
  (player) => player.country === "India" && player.age > 30
);

console.log(indiaAndAgeAboveThirty);
// find all cricket players and remove them from the list
console.log(sportsmen.length);

