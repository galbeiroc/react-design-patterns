let currentUser = {
  id: "101",
  name: 'Jonh Doe',
  age: 54,
  hairColor: 'Brown',
  hobbies: [ 'Swimming', 'Bicycling', 'Video games']
};

let users = [
  {
    id: "101",
    name: 'Jonh Doe',
    age: 54,
    hairColor: 'Brown',
    hobbies: [ 'Swimming', 'Bicycling', 'Video games']
  },
  {
    id: "102",
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'Black',
    hobbies: [ 'Golf', 'Math']
  },
  {
    id: "103",
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'Blonde',
    hobbies: [ 'Biology', 'Gymnastics', 'Medicine']
  }
];

let products = [
  {
    id: "201",
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.3,
  },
  {
    id: "202",
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    id: "203",
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art tecnology for optimum running',
    rating: 4.1,
  }
];

module.exports = { currentUser, users, products };
