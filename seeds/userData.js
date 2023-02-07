const { User } = require('../models');

const userdata = [
  {
    username: 'Jane',
    email: 'jane@example.com',
    password: 'samplePassword123'
  },
  {
    username: 'Jack',
    email: 'Jack@example.com',
    password: 'samplePassword123'
  },
  {
    username: 'John',
    email: 'John@example.com',
    password: 'samplePassword123'
  },
  {
    username: 'Jim',
    email: 'Jim@example.com',
    password: 'samplePassword123'
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
