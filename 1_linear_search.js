const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11, 23, 16]
let count = 0
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
   
    console.log(linearSearch(array, 23))
    return null
}

console.log(linearSearch(array, 50))
console.log('count = ', count)
