// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(integer) {
    // Return a function that multiplies the fare by the provided integer
    return function(fare) {
      return fare * integer;
    };
  }
  const doubleFare = createFareMultiplier(2);

  const fareDoubler = createFareMultiplier(2);

  // Now, you can use fareDoubler to double a fare value.
  //const fare = 10;
  const doubledFare = fareDoubler(fare)

  const fareTripler = createFareMultiplier(3);

  // Now, you can use fareTripler to triple a fare value.
  const fare = integer;
  const tripledFare = fareTripler(fare);



  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  