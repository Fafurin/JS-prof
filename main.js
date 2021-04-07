'use strict';

//Выполнение 1-го задания

const str = 
`One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
    One: 'Not too bad. The weather is great isn't it?'
    Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
    Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`;


//Выполнение 2-го задания

let result = str.replace(/\s'/g, ' "');

console.log(result.replace(/'\s/g, '"\n'));


//Выполнение 3-го задания

const nameRegExp = /^[А-ЯЁёа-яA-Za-z]+$/g;
const numberRegExp = /^\+7\(\d{3}\)\d{3}-\d{4}$/g;
const mailRegExp = /^[a-zа-я.-]+@[a-z]+\.[a-z]{2}$/iu;

const nameBlock = document.querySelector('.form__name');
const numberBlock = document.querySelector('.form__number');
const mailBlock = document.querySelector('.form__mail');


document.querySelector('.form').addEventListener('submit', e => {
    if (nameBlock.value.search(nameRegExp) == -1) {
         document.querySelector('.form__name--alert').innerHTML = 'Имя введено неверно';
         nameBlock.style.borderColor = 'red';
         e.preventDefault();
    } 

    if (numberBlock.value.search(numberRegExp) == -1) {
        document.querySelector('.form__number--alert').innerHTML = 'Телефон введен неверно';
        numberBlock.style.borderColor = 'red';
        e.preventDefault();
    } 
    
    if (mailBlock.value.search(mailRegExp) == -1) {
        document.querySelector('.form__mail--alert').innerHTML = 'E-mail введен неверно';
        mailBlock.style.borderColor = 'red';
        e.preventDefault();
    } 
})
