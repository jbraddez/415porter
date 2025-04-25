const iframes = document.querySelectorAll('.releases iframe');
const cards = document.querySelectorAll('.card');

window.addEventListener('resize',changetoSize())


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

function changetoSize(){
    if(window.innerWidth < 650){
        iframes.forEach((iframe)=>{
            const parent = iframe.parentElement;
            if(parent.classList.contains('card')){
            iframe.remove()
            parent.after(iframe);
        }})
    }
    if(window.innerWidth >= 650){
        iframes.forEach((iframe)=>{
            const parent = iframe.parentElement;
            if(!parent.classList.contains('card')){
            const card = document.getElementById('c-' + iframe.id);
            iframe.remove()
            try{
                card.firstElementChild.after(iframe);
            }catch(e){
               return; 
            }
        }})
    }
}

changetoSize();