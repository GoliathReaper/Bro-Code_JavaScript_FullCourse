const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let userInput = 3

function findTheDay(userInput, dayOfTheWeek){
  console.log(dayOfTheWeek[userInput])
}

for(i of dayOfTheWeek.reverse()){
  console.log(i)
}