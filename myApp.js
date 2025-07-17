const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI="mongodb+srv://dkb096:scorpion100!@dbcluster.y4fasx2.mongodb.net/myapp?retryWrites=true&w=majority&appName=DBCluster");




let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]

});

let Person = mongoose.model("Person", personSchema);


const createAndSavePerson = (done) => {
  let newPerson = new Person({
    name: 'Jo Mama',
    age: 150,
    favoriteFoods: ['Pasta','Pizza']
  });
  newPerson.save((error, data) => {
    if (error) return done(error);
    done(null, data);
  });

 //done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
    Person.insertMany(arrayOfPeople)
    .then(function (docs) {
        done(null, docs);
    })
    .catch(function (err) {
        done(err);
    });

  //done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName})
    .then(people => done(null, people))
    .catch(err => done(err));
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food})
    .then(person => done(null, person))
    .catch(err => done(err));
};

const findPersonById = (personId, done) => {
  Person.findById(personId)
    .then(person => done(null, person))
    .catch(err => done(err));
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};









/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
