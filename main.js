var word = prompt("Enter a word!");

if (word) { alert("You entered: " + word + 
	"\n" + "There are " + word.length + " characters in the word." + 
	"\n" + "The 3rd character is " + word.substring(2,3) +
	"\n" + "Lowercase: " + word.toLowerCase() +
	"\n" + "Uppercase: " + word.toUpperCase() +
	"\n" + "Example: I have wanted a " + word + " since I was a wee one." +
	"\n" + "Subword: " + word.substring(1, 4)
	)};
