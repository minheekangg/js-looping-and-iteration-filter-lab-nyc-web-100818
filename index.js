// Code your solution in this file
function findMatching (collection, name) {
  const result = collection.filter(word => word.toUpperCase() === name.toUpperCase());
  return result
}

function fuzzyMatch(collection, match){
  const wordLength = match.length
  const result = collection.filter(word => word.substring(0, wordLength) === match);
  // debugger;
  return result
}

function matchName(collection, drivername) {
  const result = collection.filter(each => each.name === drivername);
  // debugger;
  return result
}
