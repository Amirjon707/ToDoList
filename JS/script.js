let save = document.querySelector('#SAVE')
let del = document.querySelector('#del')
let WorkInput = document.querySelector('#WorkInput')
let ul = document.querySelector('ul')
let work = ""

save.addEventListener('click', () => {
    work = WorkInput.value
    let li = document.createElement(`li`)
    li.classList.add('li')
    let CLi = document.querySelectorAll('.li')
    li.textContent = work

    if (CLi.length === 3) { }
    else ul.appendChild(li)

    del.addEventListener('click', () => {
        li.remove()
    })
})