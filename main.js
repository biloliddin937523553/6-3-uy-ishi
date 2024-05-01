let inp = document.querySelector('#inp')
let add = document.querySelector('#add')
let btn = document.querySelector('#button')
let p = document.querySelector('#p')
p.innerHTML = localStorage.getItem('ism')


add.addEventListener('click', ()=>{
    localStorage.setItem('ism', inp.value )
    p.innerHTML = localStorage.getItem('ism')
    inp.value = ''
    if (inp.value === p) {
        inp.value =''
    }
    
})