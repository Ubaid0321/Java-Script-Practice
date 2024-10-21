const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
    if(e.target.id==='blue'){
        body.style.backgroundColor='blue';}
    if(e.target.id==='red'){
        body.style.backgroundColor='red';}
    if(e.target.id==='yellow'){
        body.style.backgroundColor='yellow';}
    if(e.target.id==='green'){
        body.style.backgroundColor='green';}
    })
})

