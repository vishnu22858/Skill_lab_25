numbers = [3, 4, 5, 6, 7, 8]
console.log('Numbers initially = ', numbers)

numbers_plus_five = numbers.map( (number) =>
{
    return number + 5
})

console.log(`Numbers after adding 5 = ${numbers_plus_five}`);