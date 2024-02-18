// find index and lenght of list
var name = ["sonoo", "vimal", "ratan"]

console.log(name.length)
console.log(name.indexOf("sonoo"))

// merge two dict into one

var sentence = "Today will be a good day";
var words = sentence.split(" ");

if (words.length >= 4) {
  var fourthWord = words[3];
  console.log("Fourth word:", fourthWord);
} else {
  console.log("The sentence doesn't have enough words.");
}

console.log(sentence[3])

for (let i = 0; i < sentence.length; i++) {
    console.log(i)
}
