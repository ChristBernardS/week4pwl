// Part 1
// if(true)
// {
//     pass
// } else {
//     pass
// }


// const getDay = () => {
//     if (new Date().getDay() === 0) {
//         return "Sunday"
//     }
//     if (new Date().getDay() === 1) {
//         return "Monday"
//     }
//     if (new Date().getDay() === 2) {
//         return "Tuesday"
//     }
//     if (new Date().getDay() === 3) {
//         return "Wednesday"
//     }
//     if (new Date().getDay() === 4) {
//         return "Thursday"
//     }
//     if (new Date().getDay() === 5) {
//         return "Friday"
//     }
//     if (new Date().getDay() === 6) {
//         return "Saturday"
//     }
// }

// document.getElementById("demo").innerHTML = `Today is ${getDay(0)}`

// Part 2
// Data
const today = {
    day: 1,
    name: "Monday"
}
const harilain = {
    day: 5,
    name: "Friday"
}

// // Ternary
// new Date().getDay() === today.day ? (console.log(`today is ${today.name}`)) : (console.log("Not Today"))

// // Ternary single condition
// new Date().getDay() === today.day
// ? (console.log(`today is ${today.name}`))
// : (console.log(`today is not ${today.name}`))

// // Multiple condition
// new Date().getDay() === today.day
//     ? (console.log(`Today is ${today.name}`))
//     : new Date().getDate() === harilain.day
//     ? (console.log(`TOday is ${harilain.name}`))
//     : (console.log(`Today is not ${today.name} and not ${harilain.name}`))

// if else ngecek dari atas, switch case langsung
// case(1) --> case 1: ...., case 2: ...., case 3: ....
// langsung case 1, tanpa melalui case lain

// Part 3
const getday = () => {
    switch (new Date().getDay()) {
        case 0:
            return "Sunday";
            break
        case 1:
            return "Monday";
            break
        case 2:
            return "Tuesday";
            break
        case 3:
            return "Wednesday";
            break
        case 4:
            return "Thursday";
            break
        case 5:
            return "Friday";
            break
        case 6:
            return "Saturday";
            break
        default:
            return "Tidak ada pilihan";
    }
}

// console.log(`Today is ${getday()}`)
document.getElementById("demo").innerHTML = `Today is ${getday()}`

function prosesData(data, callback) {
    let res = data.toUpperCase()
    callback(res)
}

function showRes(output) {
    document.getElementById("demo").innerHTML = `Teks: ${output}`
}

prosesData("halo dunia", showRes)