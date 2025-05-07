const members = require('./team/members.json');
console.log("Teamleden:");
members.forEach(m => console.log(`- ${m.name}`));