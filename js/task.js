// 1
const p = document.querySelector(".test-text");
p.innerHTML = "Привет, <b>мир</b>! Меня зовут <i>Настя</i>"
console.log(p);
p.style.background = "lightblue";
p.style.color = "blue";
p.style.border = "2px solid blue";

// 2
const email = document.querySelector("input[type=email]");
console.log(email);
console.log(email.getAttribute("placeholder"));
email.setAttribute("placeholder", "mail@mail.ru");
email.disabled = true;
const checkbox = document.getElementById('remember');
checkbox.checked = true;
const btn = document.querySelector('input[type=submit]').value="Войти";

// 3
const container = document.querySelector("#form-auth")
console.log(container)
const link = document.createElement("a");
link.classList.add("link");
link.textContent = "Ссылка на сайт";
link.setAttribute("href", "https://midis.ru/");
link.setAttribute("target", "_blank");
link.classList.add("red")
container.after(link);

// 4
const startBtn = document.getElementById('btn1');
const balloon = document.querySelector('.balloon');

startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    balloon.classList.add('up');
});



