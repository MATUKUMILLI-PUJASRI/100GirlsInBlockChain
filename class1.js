let text = "ABCDE|FGH|IJKLMN|OPQRST|V";
let length = text.length;
let text3="5";
console.log("length is",length);
let part = text.slice(7, 13);
console.log("(slicing method) is",part);
let part2 = text.substr(7,6);
console.log("substring is",part2);//substring is similar to sliceThe difference 
//is that the second parameter specifies the length of the extracted part.
let text2 = "100 Girls in Blockchain!";
let newText = text2.replace("girls", "CharmingGirls");
console.log("(replace method)",newText);
console.log("(upper case method)",text2.toUpperCase());
console.log("(upper case method)",text2.toLowerCase());
console.log("(concatination method)",text.concat(" ", text2));
console.log("(charAt method)",text.charAt(0));
console.log("(split method)",text.split("|"));
console.log("(padEnd method)",text3.padEnd(4,"0"));