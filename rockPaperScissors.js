const getUserChoise = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!');  // to make sure the user typed a valid choise
  }
};
// User Choise function


const getComputerChoise = () => {
  const randomNumber =
  Math.floor(Math.random() *3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
// Computer Choise function


const determineWinner = (userChoise, computerChoise) => {
  if (userChoise === computerChoise){
    return 'The game is a tie!';
  }

  if (userChoise === 'rock'){
    if(computerChoise === 'paper'){
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoise === 'paper'){
    if(computerChoise === 'scissors'){
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoise === 'scissors'){
    if(computerChoise === 'rock'){
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoise === 'bomb'){
    return 'You super won!';
  }

};
// determine the Winner function


const playGame = () => {
  const userChoise = getUserChoise(prompt('Your choise?'));  // insert your choise
  const computerChoise = getComputerChoise();
  console.log('You threw: ' + userChoise);
  console.log('The computer threw: ' + computerChoise);
  console.log(determineWinner(userChoise, computerChoise))
};

playGame();
