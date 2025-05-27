numbers = [3, 4, 5, 6, 7, 8]
console.log('Numbers initially = ', numbers)

sum = numbers.reduce( (sum_of_numbers, number) =>
{
    return sum_of_numbers + number
}, 0)

console.log(`Sum = ${sum}`);