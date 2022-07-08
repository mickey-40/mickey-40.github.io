//Require pet class
class Pet {
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
    // let element = document.querySelector('#puppyContainer')
    // let element2 = document.querySelector('#dogContainer')
    if (this.age === 6){
      changeImageDog()
      // element.classList.remove('movement')
      // element.classList.add('turnoff')
      // element2.classList.add('movement')
      // element2.classList.remove('turnoff')

      alert('Your puppy is now a dog!')
    }
    document.querySelector('.age').innerText = `Age : ${this.age}`
  }
//function to increment hunger by 1 and stop the interval when reaches 10 or greater
  hungerUp = () => {        
    if (this.hunger >= 10) {
      stopInterval()
      } else {
      this.hunger += 1
      document.querySelector('.hunger').innerText = `Hunger : ${this.hunger}`  
      
    }
  }
//function to increment sleepniness by 1 and stop the interval when reaches 10 or greater
  sleepUp = () => {
    if (this.sleepniness >= 10){
      stopInterval()
    } else {
      this.sleepniness += 1
      document.querySelector('.sleepniness').innerText = `Sleepniness : ${this.sleepniness}` 
    }
  }
  //function to increment boredom by 1 and stop the interval when reaches 10 or greater
  boredomUp = () => {
    if (this.boredom >= 10){
      stopInterval()     
    } else {
      this.boredom += 1
      document.querySelector('.boredom').innerText = `Boredom : ${this.boredom}`
      
    }
   

    
  }

}
//Instantiate my element to the class
const myPet = new Pet()
//event listener to start the game
document.querySelector('#start').addEventListener('click', function(){
  //User enters the name of the pet.
  myPet.name = window.prompt("Enter your name: ")
  //Replaces the text in the h1 with the user input
  document.querySelector('h1').innerText = myPet.name
//starts incrementing all the metrics
  startInterval()
 
})
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
  dogFainted()
  alert('fainted from neglect')

}
//Event listener when "feed" button is clicked it reduces hunger metric by one.
document.querySelector('#feed').addEventListener('click', function(){
  myPet.hunger -= 1
  document.querySelector('.hunger').innerText = `Hunger : ${myPet.hunger}`
})
//Event listener when "play with pet" button is clicked reduces boredom by one.
document.querySelector('#play').addEventListener('click', function(){
  myPet.boredom -= 1
  document.querySelector('.boredom').innerText = `Boredom : ${myPet.boredom}`
  
  })
//Event listener when "Turn off the lights" button is clicked reduces boredom by one.
document.querySelector('#sleep').addEventListener('click', function(){
  myPet.sleepniness -= 1
  document.querySelector('.sleepniness').innerText = `Sleepniness : ${myPet.sleepniness}`

})
//function to change image from puppy to dog
const changeImageDog = () => {
  document.querySelector('.puppyImg').src = 'img/adultdogpic.jpg'

}
//Function to change image to fainted dog
const dogFainted = () => {
  document.querySelector('.puppyImg').src = 'img/faintedDog.jpg'
}


