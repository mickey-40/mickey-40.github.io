//Require pet class
class Game {
  constructor(name, hunger = 0, sleepniness = 0, boredom = 0, age = 0) {
    this.name = name
    this.hunger = hunger
    this.sleepniness = sleepniness
    this.boredom = boredom
    this.age = age
  }
  //function that rises Attributes
  ageUp = () => {
    this.age += 1
    if (this.age === 6){
      document.querySelector('.puppyImg').src = 'img/adultdogpic.jpg'
      alert(`Puppy ${this.name} is now a dog!`)
    }
    document.querySelector('.age').innerText = `Age : ${this.age}`
  }
//function to increment hunger by 1 and stop the interval when reaches 10 or greater
  hungerUp = () => {        
    if (this.hunger >= 10) {
      this.dogFainted()
      stopInterval()
      } else {
      this.hunger += 1
      document.querySelector('.hunger').innerText = `Hunger : ${this.hunger}`  
      
    }
  }
//function to increment sleepniness by 1 and stop the interval when reaches 10 or greater
  sleepUp = () => {
    if (this.sleepniness >= 10){
      this.dogFainted()
      stopInterval()
    } else {
      this.sleepniness += 1
      document.querySelector('.sleepniness').innerText = `Sleepniness : ${this.sleepniness}` 
    }
  }
  //function to increment boredom by 1 and stop the interval when reaches 10 or greater
  boredomUp = () => {
    if (this.boredom >= 10){
      this.dogFainted()
      stopInterval()     
    } else {
      this.boredom += 1
      document.querySelector('.boredom').innerText = `Boredom : ${this.boredom}`
      
    }
  }
  //function to change the background color to black
  lightsOff = () => {
    document.querySelector('body').style.backgroundColor = 'black'
  }
  //Function to change image to fainted dog
  dogFainted = () => {
  //Target the src to change the image
    document.querySelector('.puppyImg').src = 'img/faintedDog.jpg'
    document.querySelector('h2').innerText = (`${myPet.name} fainted from neglect :(`)
    document.querySelector('body').style.backgroundColor = 'red'
}
//feedme funciton
feedMe = () => {
  //targets the div with id puppyContainer and adds feedPet class to it.
  document.querySelector('#puppyContainer').classList.add('feedPet')
  myPet.hunger -= 1
  document.querySelector('.hunger').innerText = `Hunger : ${myPet.hunger}`
  //add setTimeout function to it so it stops doing the animation and will do it again when button is pushed.
  setTimeout(() => {
    document.querySelector('#puppyContainer').classList.remove('feedPet')
  }, 500);
}
//playWithMe function
playWithMe = () => {
  //targets the div with id puppyContainer and adds flip class to it.
  document.querySelector('#puppyContainer').classList.add('flip')
  myPet.boredom -= 1
  document.querySelector('.boredom').innerText = `Boredom : ${myPet.boredom}`
  //add setTimeout function to it so it stops doing the animation and will do it again when button is pushed.
  setTimeout(() => {
    document.querySelector('#puppyContainer').classList.remove('flip')
  }, 500);
  
  }
  //letMeSleep function
  letMeSleep = () => {
    myPet.sleepniness -= 1
    myPet.lightsOff()
    document.querySelector('.sleepniness').innerText = `Sleepniness : ${myPet.sleepniness}`
    setTimeout(() => {
      document.querySelector('body').style.backgroundColor = 'darkblue'
    }, 200);
  
  }
  //startOver function
  startOver = () => {
    //this stops the intervals 
    stopInterval()
    //Resets the values to default
    this.age = 0
    this.hunger = 0
    this.boredom = 0
    this.sleepniness = 0
    this.name = 'Name of your pet'
    document.querySelector('body').style.backgroundColor = 'darkblue'
    const startButton = document.querySelector('#start')
    startButton.disabled = false
    document.querySelector('h1').innerText = `Name of your pet`
    document.querySelector('.hunger').innerText = `Hunger : 0`
    document.querySelector('.boredom').innerText = `Boredom : 0`
    document.querySelector('.sleepniness').innerText = `Sleepniness : 0`
    document.querySelector('.age').innerText = `Age : 0`
    document.querySelector('.puppyImg').src = 'img/puppypic.jpg'
}
//startTheGame function
startTheGame = () => {
  //User enters the name of the pet.
  this.name = window.prompt("Enter your name: ")
  //Replaces the text in the h1 with the user input
  document.querySelector('h1').innerText = this.name
  //starts incrementing all the metrics
  startInterval()
  //disables start button after starts
  const startButton = document.querySelector('#start')
  startButton.disabled = true
 
}
}
//Instantiate my element to the class
const myPet = new Game()
//event listener to start the game
document.querySelector('#start').addEventListener('click', myPet.startTheGame)

//set element names to enable the ablity to start and stop the interval
let hungerinterval;
let ageInterval;
let sleepInterval;
let boredomInterval;
//function to start the timed interval to increment the features
function startInterval() {
   hungerinterval = setInterval(myPet.hungerUp, 1000)
   ageInterval = setInterval(myPet.ageUp, 500)
   sleepInterval = setInterval(myPet.sleepUp, 1500)
   boredomInterval = setInterval(myPet.boredomUp, 2000)
}
//function to stop the timed interval when the pet faints. Turns off image of pet and turns on fainting image.
const stopInterval = () => {
  clearInterval(hungerinterval)
  clearInterval(ageInterval)
  clearInterval(sleepInterval)
  clearInterval(boredomInterval) 
}
//Event listener when "feed" button is clicked it reduces hunger metric by one and makes the image rotate 25 degrees both ways.
document.querySelector('#feed').addEventListener('click', myPet.feedMe)

//Event listener when "play with pet" button is clicked reduces boredom by one and makes the image rotate 360 degres.
document.querySelector('#play').addEventListener('click',myPet.playWithMe)
//Event listener when "Turn off the lights" button is clicked reduces sleepniess by one.
document.querySelector('#sleep').addEventListener('click', myPet.letMeSleep)
//Event listener to restart the game
document.querySelector('#restart').addEventListener('click',myPet.startOver)






