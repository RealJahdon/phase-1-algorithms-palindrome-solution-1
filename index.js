function isPalindrome(word) {
	const reversedWord = reverseString(word);
	return word === reversedWord;
}

function reverseString(word) {
	return word.split("").reverse().join("");
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

  console.log("");
	console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;