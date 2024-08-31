//  Գրել ֆունկցիա որը կաշխատի այն ժամանակ երբ կոճակին քլիք արվի, body ի մեջից ընտրի մեկ պատահական div
//  (div-երը ի սկզբանե ստեղծված են html css ով) և այդ դիվին պատահական գույն տա, գործողությունը կրկնելիս
//  ֆունկցիան նույն բանը կատարի արդեն մեկ այլ պատահական div ընտրելով, կառավարել որ արդեն գունավորված
//  div-ը նորից գույն չստանա։

let child = document.querySelectorAll('.child')
let button = document.querySelector('.click') 
let arr = []

function randomColor(){
    let color
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return  color = `rgb(${r}, ${g}, ${b})`
}


button.addEventListener('click', function(){
    let loop = true
    if(arr.length <= 6){
        while(loop){
           let randomNumber = Math.floor(Math.random() * 7)
           if(!arr.includes(randomNumber)){
              arr.push(randomNumber)
              loop = false
            }
        }
     child[arr[arr.length -1]].style.backgroundColor = randomColor()
    }else{
        return
    }
})

//  ------------------------------------------------------------------------------------------

//  Գրել ֆունկցիա որը կաշխատի երբ քլիք անեմ 100% width ու 750px height ունեցող
//  div ի մակերեսին, որտեղ քլիք արվել է այդտեղ 120x120px չափի պատահական
//  գույնով դիվ է հայտնվում։

let parent1 = document.querySelector('.parent1')

parent1.addEventListener('click', function(e){
    let element = document.createElement('div')
    element.style.backgroundColor = randomColor()
    element.style.left = (e.offsetX - 60) + 'px'
    element.style.top = (e.offsetY - 60) + 'px'
    parent1.appendChild(element)
})

//  ------------------------------------------------------------------------------------------

//  Գրել ֆունկցիա որը կաշխատի երբ Form-ի input-ի հետ եմ աշխատում։ Ինպուտի մեջ գրված է տեքստ որը ցույց է
//  տալիս հուշելով օվտատիրոջը թե ինչ պիտի գրվի, երբ ֆունկցիան աշխատում է այդ հուշող տեքստը պիտի տեղաշարժվի
//  և տեղադրվի տվյալ ինպուտի վերևի մասում։ Ինպուտի հետ աշխատանքն ավարտելուց կամ ինպուտից հեռանալուց հետո
//  տեքսը գա իր սկզբնական դիրքին եթե ինպուտի մեջ ոչինչ չի լրացվել։ Ունենալ առնվազն 5 ինպուտ։


let input = document.querySelectorAll('input')
let span = document.querySelectorAll('span')

function addAndRemove(e){
    if(e.target.value.length > 0){
        span[e.target.dataset.n].classList.add('activ')
    }else{
        span[e.target.dataset.n].classList.remove('activ')
    }
}

input.forEach((elem)=>{
    elem.addEventListener('input', addAndRemove)
})

//  ------------------------------------------------------------------------------------------ 

// թվային ժամ 

function updateClock() {
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    hours < 10 ? hours = '0' + hours : hours
    minutes < 10 ? minutes = '0' + minutes : minutes
    seconds < 10 ? seconds = '0' + seconds : seconds

document.querySelector('.digital-clock').textContent = `${hours} : ${minutes} : ${seconds}`
}

setInterval(updateClock, 1000)
updateClock()