//vanliga:
let str1 = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str1 = str1 + '*'
    }
    str1 = str1 + '\n' // Lägg till en radbrytning
}

console.log(str1)



//mellanslag mellan varje:
let str2 = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str2 = str2 + ' *' //lade till mellanslag
    }
    str2 = str2 + '\n' // Lägg till en radbrytning
}

console.log(str2)


//Upp och nervänd:
let str4 = ''
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        str4 = str4 + '*'
    }
    str4 = str4 + '\n' // Lägg till en radbrytning
}

console.log(str4)


//Kvadrat:

let str3 = ''
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) { //skrev j < 5 istället
        str3 = str3 + ' * '
    }
    str3 = str3 + '\n' // Lägg till en radbrytning
}

console.log(str3)



//Romb:
let str = ''
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        str = str + ' * '
    }
    str = str + '\n' // Lägg till en radbrytning
    for (let x = 0; x < i + 1; x++) {
        str = str + ' '
    }
}

console.log(str)