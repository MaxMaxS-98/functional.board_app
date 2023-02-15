const { User } = require('../models');

const userData = [
  {
    id: 1,
    fullname: 'Jane',
    username: 'Jane123',
    email: 'jane@example.com',
    password: 'samplePassword123'
  },
  {
    id: 2,
    fullname: 'Jack',
    username: 'Jack456',
    email: 'Jack@example.com',
    password: 'samplePassword123'
  },
  {
    id: 3,
    fullname: 'John',
    username: 'John789',
    email: 'John@example.com',
    password: 'samplePassword123'
  },
  {
    id: 4,
    fullname: 'Jim',
    username: 'Jim01234567',
    email: 'Jim@example.com',
    password: 'samplePassword123'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
