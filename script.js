const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        if(!card.classList.contains('selected')){
        cards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        }else{
        cards.forEach((c) => c.classList.remove('selected'));
        }
    });
})

