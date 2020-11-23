// Skriv en while loop
// Som varje iteration (repetition) slumpar ett heltal mellan 0 och 10
// Om talet blir 6, avsluta loopen
// Exempel på output:
// 4
// 7
// 3
// 8
// 4
// 1
// 1
// 6


let n = Math.floor(Math.random() * 10) + 1 
while (n != 6){
    console.log(n)
    n = Math.floor(Math.random() * 10) + 1
}
//(nedan) logga ut 6 efter den tagit slut
console.log(n)

console.log("------------")
//testar med en for-loop också

for (let i = 0; i != 6; i = Math.floor(Math.random() * 10) + 1) {
    console.log(i)
}
