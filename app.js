            
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    previousGuesses: [],
    getGuess: function() {
      let guess;
      while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }
      return guess;
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1))
       + this.smallestNum;
      let currentGuess;
      do {
          currentGuess = this.getGuess()
          this.previousGuesses.push(currentGuess)
          this.render()
        } while (true)
    },
    render : function()
    {
      let lastGuess = this.previousGuesses.pop()
      this.previousGuesses.push(lastGuess)
      if(lastGuess===this.secretNum)
      {
     alert(`Congrats! You guessed the number in ${this.previousGuesses.length} guesses!`)
      }
      if(lastGuess>this.secretNum)
      {
        alert(`your guess is too high Previous Guesses ${this.previousGuesses.join(', ')}`)
      }
      if(lastGuess<this.secretNum)
      {
        alert(`Your guess is too low Previous Guesses ${this.previousGuesses.join(', ')}`)
    }
  }
}
game.play()






