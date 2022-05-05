const maca = {
    value: 2,
}

const orange = {
    value: 3,
}

const nums = [1, 2]
function mapcomThis(arr, thisArg){
    return arr.map(function (item){
       return item * this.value;
    }, thisArg);
}

console.log('this -> maçã', mapcomThis(nums, maca));
console.log('this -> laranja', mapcomThis(nums, orange));