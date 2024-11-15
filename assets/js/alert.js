'use strict'
// Задание 1
let price = prompt('Стоимость товара')
let money = prompt('Ваши деньги')
if(price === money){
    alert('Покупка совершена')
}else if (money < price ){
    alert(`вам не хватает ${price-money} руб`)
}else if (money > price){
    alert(`Покупка совершена. Сдача ${money-price} р`)
}

// Задание 2
let nomber = prompt ('число')
if (nomber>0){
    alert('1')
}else if (nomber < 0){
    alert('-1')
}else if (nomber == 0){
    alert('0')
}

// Задание 3
let result = (a + b < 4) ? 'Мало' : 'Много'

// Задание 4
let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ?  'Здравствуйте' : (login == '') ? 'Нет логина' : ''Пусто”