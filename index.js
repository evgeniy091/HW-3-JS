// const number = +prompt("Введите число")
// if (number >10) {
//     alert("Больше")
// } else if (number <10) {
//     alert("Меньше")
// } else if (number == 10) {
//     alert("Равно")
// }
// const a = +prompt("введите первое число")
// const b = +prompt("введите второе число")
// const c = +prompt("введите третье число")


// if(a > b && a > c ) {
//     alert(`Число ${a} оказалось самым большим`)
// }
// else if (b > a && b > c) {
//     alert (`Число ${b} оказалось самым большим`)
// }
// else if (c > b && c > a) {
//     alert (`Число ${c} оказалось самым большим`)
// }


const x = +prompt("Введите первое число")
const y = +prompt("Введите второе число")
const multiplicationXY = (x * y)
const z = +prompt("Результат умножения первого числа на второе")
if (x * y == z){
alert("Это правильный ответ!")
}
else{
    alert(`Вы ошиблись,правильный ответ ${multiplicationXY} `)
}
