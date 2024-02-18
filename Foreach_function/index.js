let dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

dayOfTheWeek.forEach(capitalize);
dayOfTheWeek.forEach(display);

function capitalize(element, index, array){
  array[index] = element.charAt(0).toLowerCase() + element.slice(1)
  console.log(index)
}

function display(element){
  console.log(element)
}