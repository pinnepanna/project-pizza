// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to Ester's Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
const userName = prompt(`What's your name?`);
alert(
  `Hello ${userName}! Let's get started!`
  );

// Step 2 - Food choice
// Your code goes here
const foodchoice = prompt(`Select what you would like to order:
1 – Pizza
2 - Pasta
3 - Salad`);

//Initialize a variable to store the selected foodchoice
let selectedfoodchoice = ""

//Determine the selected foodchoice based on the user's selected choice

if (foodchoice === "1") {
  selectedfoodchoice = "Pizza";
} else if (foodchoice === "2") {
  selectedfoodchoice = "Pasta";
} else if (foodchoice === "3") {
  selectedfoodchoice = "Salad"
} else {
  alert(`Invalid choice. Reload the tab and start again!`)
  exit(1)
}
//Confirm the user's choice
alert(
  `You selected ${selectedfoodchoice}!`
  );

// Step 3 - Subtype choice
// Your code goes here
let subchoice = ""; 

if (selectedfoodchoice === "Pizza") {
  let pizzaChoice = prompt(`Select which pizza you would like to order:
  1 - Margarita
  2 - Capriccosa
  3 - Vezuvio`);

  switch(pizzaChoice) {
    case '1':
      subchoice = 'Margarita';
      break;
    case '2':
      subchoice = 'Capriccosa';
      break;
    case '3':
      subchoice = 'Vezuvio';
      break;
  }
}
else if (selectedfoodchoice === "Pasta") {
  let pastaChoice = prompt(`Select which pasta you would like to order:
  1 - Tomato
  2 - Carbonara
  3 - Pesto`);

  switch(pastaChoice) {
    case '1':
      subchoice = 'Tomato';
      break;
    case '2':
      subchoice = 'Carbonara';
      break;
    case '3':
      subchoice = 'Pesto';
      break;
  }
}
else if (selectedfoodchoice === "Salad") {
  let saladChoice = prompt(`Select which salad you would like to order:
  1 - Chevre
  2 - Brie
  3 - Parmesan`);

  switch(saladChoice) {
    case '1':
      subchoice = 'Chevre';
      break;
    case '2':
      subchoice = 'Brie';
      break;
    case '3':
      subchoice = 'Parmesan';
      break;
  }
}

// Confirmation
alert(
  `You selected ${subchoice}!`
  );
// Step 4 - Age
// Your code goes here
// Step 4 - Age
// Your code goes here
const age = prompt(`Write your age:`);

// Initialize a variable to store the user's choice meal size
let mealsize = "";

if (age > 15) {
  mealsize = "Adult";
} else if (age < 15) {
  mealsize = "Child";
}

// Initialize a variable to store the meal cost
let mealcost = "";

if (mealsize === "Adult") {
  mealcost = 120;
} else if (mealsize === "Child") {
  mealcost = 80;
}

// Complete the order
const confirmationChoice = prompt(
  `You have selected an ${mealsize} sized ${subchoice} ${selectedfoodchoice}. That will be in total ${mealcost} SEK.
  1 - Confirm
  2 - Decline`
);

// Step 5 - Order confirmation
// Your code goes here
if (confirmationChoice === "1") {
  alert(`Thank you for your order! You meal is now being prepared.`)
}
else if (confirmationChoice === "2") {
  alert(`Order declined. Have a great day and welcome back another time!`)
}
else {
  alert(`Invalid choice. Reload the tab and start again!`);
  exit(1);
}
