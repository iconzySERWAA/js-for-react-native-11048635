const { createUserProfiles } = require('./userInfo');

// Example arrays
const originalNames = ['Mandy', 'Serwaa', 'Acheampong'];
const modifiedNames = ['MANDY', 'SERWAA', 'ACHEAMPONG'];

// Creating user profiles
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
/*
[
  { id: 1, originalName: 'Mandy', modifiedName: 'MANDY' },
  { id: 2, originalName: 'Serwaa', modifiedName: 'SERWAA' },
  { id: 3, originalName: 'Acheampong', modifiedName: 'ACHEAMPONG' }
]
*/