// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(names, confirmTable) {
    return names.filter(names => names.toLowerCase() === confirmTable.toLowerCase());
}

function fuzzyMatch(names,confirmTable){
    return names.filter(drivers => drivers.toLowerCase().startsWith(confirmTable.toLowerCase()));
}

const element = drivers.filter(matchName);

function matchName(drivers, homeTown){
    return drivers.filter(drivers => drivers=== homeTown.toLowerCase());
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}