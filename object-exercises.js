var phonebookDict = {
  Alice: '703-493-1834',
  Bob: ['857-384-1234','404-444-4567','404-444-4567','404-444-4567'],
  Elizabeth: ['484-584-2923','404-444-4567','404-444-4567','404-444-4567']
};

// Print Elizabeth's Phone Number
// var phone = phonebookDict.Elizabeth;
// console.log("Elizabeth's Phone Number:\n" + phone);

// Add Kareem's Name and Phone Number
// phonebookDict.Kareem = '938-489-1234';
// console.log(phonebookDict);

// Delete Alice's Phone entry
delete phonebookDict.Bob.splice(3,2);
delete phonebookDict.Alice[1];
console.log(phonebookDict);
