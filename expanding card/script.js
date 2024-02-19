const panels=document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('mouseenter',() =>{
        removeClass()
        panel.classList.add('active')
    })
    panel.addEventListener('mouseout',() =>{
        removeClass()
        panel.classList.remove('active')
    })
})

function removeClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}