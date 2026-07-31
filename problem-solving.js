// Problem 01

function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }

  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  }
}

// Problem 02

function isElevatorSafe(weights) {
  // Write your code here
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let totalWeights = 0;

  for (let i = 0; i < weights.length; i++) {
    if (typeof weights[i] !== "number") {
      return "Invalid";
    }
    totalWeights += weights[i];
  }

  let result = totalWeights <= 400;

  return result;
}

// Problem 03

function calculateAiCost(tokensUsed) {
  // Write your code here.
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }

  let extraUsedToken = tokensUsed - 500;

  let result = Math.floor(extraUsedToken / 100) * 5;

  return result;
}

// Problem 04

function topRatedRestaurant(restaurants) {
  // Write your code here
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let topRestaurant = restaurants[0];

  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > topRestaurant.rating) {
      topRestaurant = restaurants[i];
    }
  }

  return topRestaurant.name.toUpperCase();
}

// Problem 05

function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    total = total + times[i];
  }

  return total / times.length;
}

