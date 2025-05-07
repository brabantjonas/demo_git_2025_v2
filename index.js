const members = require('./team/members.json');
console.log("Teamleden:");
members.forEach(member => console.log(`- ${member.name}`));