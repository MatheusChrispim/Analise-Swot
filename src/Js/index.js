const cardSwot = document.querySelectorAll('.analise');
const expandBtn = document.getElementById('expandBtn');
const list = document.querySelectorAll('.list');


//Aqui temos o botão que irá expandir todas as divs e mostrar todo conteúdo;
expandBtn.addEventListener('click', () =>{
    cardSwot.forEach(card => {
                card.style.flexBasis = 'calc(20% -10px)'; //Redimensiona o tamanho das div não selecionadas para ficar menor.
                card.classList.add('expand');
                card.querySelector('.list').classList.remove('hidden'); //remove classe que mantém o conteúdo da lista oculto
                card.querySelector('.list').classList.add('visible'); //mostra o conteúdo da lista.
           });
           card.classList.toggle('expand'); 
           card.querySelector('.list').classList.toggle('visible');
           card.querySelector('.list').classList.toggle('hidden');
    });

    

//Aqui expande Div por DIV;
cardSwot.forEach(card => {
    card.addEventListener('click', () =>{
       cardSwot.forEach(othercard =>{
        if (othercard !== card) {
            othercard.style.flexBasis = 'calc(20% -10px)';
            othercard.classList.remove('expand');
            othercard.querySelector('.list').classList.remove('visible');
            othercard.querySelector('.list').classList.add('hidden');
        }
       });
       card.classList.toggle('expand'); 
       card.querySelector('.list').classList.toggle('visible');
       card.querySelector('.list').classList.toggle('hidden');
    });
});
