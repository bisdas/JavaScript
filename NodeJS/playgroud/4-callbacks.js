// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)


// const names = ['Bishnu', 'Bish', 'B']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// console.log(shortNames)


// // async callback example
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })



const add = (firstNumber, secondNumber, callback) => {
    setTimeout(() => {
        callback(firstNumber + secondNumber)
    }, 2000)
}

add(1, -4, (sum)=> {
    console.log(sum)
})