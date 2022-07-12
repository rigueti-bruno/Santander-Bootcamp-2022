//Selecionando os Elementos HTML:

const titulo = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const rodape = document.getElementsByTagName('footer')[0];
const corpo = document.getElementsByTagName('body')[0];

function darkMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    botao.classList.toggle('dark-mode');
    titulo.classList.toggle('dark-mode');
    rodape.classList.toggle('dark-mode');
    corpo.classList.toggle('dark-mode');
}

function changeText() {
    if(botao.classList.contains('dark-mode')) {
        botao.innerHTML = 'Light Mode';
        titulo.innerHTML = 'Dark Mode ON';
        return;
    }
    botao.innerHTML = 'Dark Mode';
    titulo.innerHTML = 'Light Mode ON';
}

botao.addEventListener("click", darkMode);
