//console.log('Hello')

//let numbers = [10, 20]

//let [first, second] = numbers
//console.log(numnbers, first, second)

//let mahesh = {name : 'Mahesh', salary : 200000}
//let {name, salary} = mahesh

//console.log(mahesh, name, salary)

let numbers = [10, 20, 30, 10, 10, 30]
let freq = [[10, 3], [20, 1], [30, 2]]

console.log('Numbers: ')

for(let e of numbers) {
    console.log(e)
}

console.log('')

console.log('Frequency: ')

for(let eAr of freq) {
    console.log(eAr)
}

console.log('')

for (let [theNum, itsFreq] of freq) {
    console.log(`${theNum} occurs ${itsFreq} times`)
}