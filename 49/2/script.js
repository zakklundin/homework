//vanliga:
let str1 = ''
for (let i = 0; i < 10; i++) {
    str1 = str1 + '*'.repeat(i)
    str1 = str1 + '\n' // Lägg till en radbrytning
}
console.log(str1)


//Kvadrat:
let str2 = ''
for (let i = 0; i < 5; i++) {
    str2 = str2 + '* '.repeat(5)
    str2 = str2 + '\n'
}
console.log(str2)