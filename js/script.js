/* 1 - выбирать элементы на страничке */
// 1.1 - выбрать элемент по id
let header = document.getElementById('title');
console.log(header);
// 1.2 - Выбрать один элемент по селектору
const container = document.querySelector('.container');
console.log(container);
// 1.3 - выбрать несколько элементов по селектору
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

/* - Работа с контентом */
console.log(header.textContent); // только текст без тегов
console.log(header.innerHTML); // извлекаем и текст и теги
console.log(header.outerHTML); // извлекаем сам элемент и текст и теги
console.log(header.innerText); // извлекаем текст без тегов
console.log(header.outerText); // извлекаем текст без тегов

header.textContent = 'Новый заголовок <i class="bi bi-umbrella-fill"></i>'; // изменить текст(теги воспринимаются как текст)

header.innerHTML = 'Новый заголовок <i class="bi bi-umbrella-fill"></i>'; // меняем html(теги воспринимаются как теги)

header.outerHTML = '<h3>Новый заголовок <i class="bi bi-umbrella-fill"></i></h3>'; // полностью перезаписываем и содержимое и сам тег
/* 3 - работа с классами(с атрибутом class) */ 
const h2 = document.querySelector('h2');
// добавление классов
h2.classList.add('red');
h2.classList.add('big');
h2.classList.add('title');
// удаление класса
h2.classList.remove('big');
// проверить есть ли класс у элемента
console.log(h2.classList.contains('red'));
// переключатель классов
for (let elem of paragraphs){
    // elem.classList.toggle('text');
    if(elem.classList.contains('text')) 
        {
        elem.classList.remove('text');
    }
    else{
        elem.classList.add('text');
    }
}
/* 4 - Работа со стилями (атрибут style) */
const btn = document.querySelector('input[type=submit]');
console.log(btn);
// добавление стилей
btn.style.color = 'red';
btn.style.background = 'yellow';
btn.style.fontSize = '24px';
btn.style.border = '3px solid red'
/* 5 - Работа с атрибутами */
let link = document.querySelector('li:nth-child(1) a');
console.log(link);
// считываем атрибут
console.log(link.getAttribute('href'));
// установить атрибут/изменить атрибут 
link.setAttribute('href', 'https://getbootstrap.com/');
link.setAttribute('target', '_blank');
// удалить атрибут
btn.removeAttribute('style');

/* 6 - Создание нового элемента(тега) */
const block = document.createElement('div');
block.classList.add('block');
block.innerHTML = "новый блок";
container.append(block);

const image =  document.createElement('img');
image.setAttribute('src', 'img/1.jpg');
image.alt = 'ай лев'; // еще один способ задать атрибут
image.style.width = '50px';
// container.append(image); // добавить элемент в конец контейнера
// container.prepend(image); // добавить элемент в начале контейнера
// container.before(image); // добавить перед контейнером
container.after(image); // добавить элемент после контейнера

/* 7 - выбор потомков */ 
// выбираем все параграфы
const lorems = document.querySelectorAll('p');
console.log(lorems)
// выбираем только дочерние параграфы
const content = document.querySelector('.content');
const loremsInContent = content.querySelectorAll('p');
console.log(loremsInContent);

/* 8 - выбор предков */
let form = btn.closest('form'); // поиск ближайшего предка по селектору
form.style.border = '2px dotted orange';

/* 9 - Обработка событий(клик по кнопке) */
btn.addEventListener('click', function(event){
    event.preventDefault(); // отменяем поведение по умолчанию - обновление страницы
    const body = document.querySelector('body');
    body.style.background = 'darkblue';
    body.style.color = 'white';
    const pass = document.querySelector('input[type=password]').value;
    console.log(pass);
}); 
// 10 - удаление тегов
// живая коллекция 
const texts = document.querySelector('.content').childNodes;
console.log(texts);

const p1 = document.querySelector('p'); // выбираю первый параграф в документе
p1.outerHTML = ""; // удалем тег - первый параграф
console.log(paragraphs);

console.log(texts);