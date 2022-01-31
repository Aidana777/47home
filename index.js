const str = "Мне было 15 в 2012 году";
const final = str
  .split(" ")
  .filter((elem) => !isNaN(elem))
  .map((val) => parseFloat(val));
console.log(final);

function makeItCool(str) {
  let resuilt = "";
  let prevChsr = "";
  for (let i = 0; str.lenth; i++) {
    const currentChar = str[i];
    if (!(prevChsr == " " && currentChar == prevChsr)) resuilt += currentChar;
    prevChsr = currentChar;
  }
  return resuilt;
}

console.log(makeItCool("i am super"));

function withoutVowels(string) {
  let withoutVowels = "";
  for (let i = 0; i < string.length; i++) {
    if (!isVowel(string[i])) {
      withoutVowels += string[i];
    }
  }
  return withoutVowels;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

console.log(withoutVowels("banana apple orange"));

function fromQuestionToExclamation(arr) {
const newWords=arr.map((word)=>{
if(word.endsWith("?")){
  return `${word.slice(0,-1)}!`;

}else{
  return word;
}
})
return newWords;
  }
const words = ["Why?", "JS", "You", "Me?"];
console.log(fromQuestionToExclamation(words))
