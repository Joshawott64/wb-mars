// Introduction alerts
alert('Prepare to be amazed!')
alert('Starting Mars Adventure')
alert('Booting up...')
alert('All systems go!')

// Ask for user name and greet user
const username = prompt('Please enter your name:')
alert('Welcome aboard, Captain ' + username + '!')

// Exposit game premise
alert('This is a game where you travel to Mars. How exciting!')

// Gauge excitement
let excitement = prompt('Are you excited? (Type Y or N)')
excitement = excitement.trim()
excitement = excitement.toUpperCase()
console.log(excitement)

if (excitement.startsWith("YES")) {
    excitement = "Y"
} else if (excitement.startsWith("NO")) {
    excitement = "N"
}

if (excitement === ('Y')) {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
} else if (excitement === ('N')) {
    alert("Well, it's too late to back out now.")
} else {
    alert("Neither, eh? We've got quite the contrarian on our hands.")
}

// Prompt for number of suitcases (added consequences)
let petDisaster
alert("It's time to pack for your trip to Mars.")
let numSuitcases = prompt('How many suitcases do you plan to bring?')
numSuitcases = Number(numSuitcases)

if (numSuitcases > 2) {
    alert("That's way too many. I hope nothing bad happens...")
    petDisaster = true
} else {
    alert("Perfect. You'll certainly fit in the spaceship!")
}

// Prompt for pack animal 1
alert("You're allowed to bring one companion animal with you.")

let companionType = prompt('What kind of companion animal would you like to bring?')
let companionName = prompt("What is your companion's name?")

// Convert first letters to uppercase on pack animal 1
let firstLetterName = companionName[0]
firstLetterName = firstLetterName.toUpperCase()

let otherLettersName = companionName.slice(1)
otherLettersName = otherLettersName.toLowerCase()

companionName = firstLetterName + otherLettersName

let firstLetterType = companionType[0]
firstLetterType = firstLetterType.toUpperCase()

let otherLettersType = companionType.slice(1)
otherLettersType = otherLettersType.toLowerCase()

companionType = firstLetterType + otherLettersType

// Prompt for pack animal 2
alert("We've just been informed that you can bring one more animal companion with you.")

let companionTypeTwo = prompt('What kind of companion animal would you like to bring?')
let companionNameTwo = prompt("What is your companion's name?")

// Convert first letters to uppercase for pack animal 2
let firstLetterNameTwo = companionNameTwo[0]
firstLetterNameTwo = firstLetterNameTwo.toUpperCase()

let otherLettersNameTwo = companionNameTwo.slice(1)
otherLettersNameTwo = otherLettersNameTwo.toLowerCase()

companionNameTwo = firstLetterNameTwo + otherLettersNameTwo

let firstLetterTypeTwo = companionTypeTwo[0]
firstLetterTypeTwo = firstLetterTypeTwo.toUpperCase()

let otherLettersTypeTwo = companionTypeTwo.slice(1)
otherLettersTypeTwo = otherLettersTypeTwo.toLowerCase()

companionTypeTwo = firstLetterTypeTwo + otherLettersTypeTwo

alert("Cool, so you're bringing " + companionName + " the " + companionType + " and " + companionNameTwo + " the " + companionTypeTwo + ".")

// Prompt for decor
alert('Our state of the art interior design team is dying to spruce up your space ship.')
let decorChoice = prompt(`Your interior design options are as follows:
A   'Lived in space' a la Star Wars
B   'Not so lived in space' a la everything else
C   Padded room
`)
decorChoice = decorChoice.toUpperCase()

let decor;
if (decorChoice === 'A') {
    decor = 'lived in space'
    alert("The force is strong with this one")
} else if (decorChoice === 'B') {
    decor = 'not so lived in space'
    alert("Ok, Trekkie")
} else if (decorChoice === 'C') {
    decor = 'padded room'
    alert("Do I even want to ask why you chose that one?")
} else {
    decor = 'sketchy rest stop'
    alert("You seem to have had trouble picking between A, B, or C. Our auto-fill system detected what you were trying to enter. Thank you for choosing 'Sketchy rest stop'")
}

// Adventure preview
alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship`)

// Liftoff!
let timer = 5
while (timer > 0) {
    alert(`${timer}...`)
    timer--
}
alert('*** LIFTOFF ***')

// Animal disaster if user packed too heavily
if (petDisaster) {
    alert(`Oh no! You overpacked and there isn't enough room! ${companionName} and ${companionNameTwo} flew out the window! Nice going, dingus!`)
}