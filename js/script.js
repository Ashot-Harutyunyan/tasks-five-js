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


let input = document.querySelectorAll('.input')
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

//  ------------------------------------------------------------------------------------------ 

// Ստեղծել Գրանցման դաշտ, HTML  Form, Որտեղ մարդկանց տվյալներ են լրացվում։
//  -> Անուն
//  ->Ազգանուն
//  ->ծն ամ/ամս
//  ->դաս || ուսան
//  ->Աշխ. փորձ ժամկ(եթե դասախոս)
//  ->Ֆակուլտետ խումբ (եթե ուսանող)
//  ->Վերականգման և գաղտնիության կոդ (ուսանողի համար 7 անիշ թիվ ու մի թիվը չկրկնվի 2 ից ավել, դաս համար 9 սիմվոլ որից առնվազն 3 ը տառեր են և չկրկնվող, թվերը նույնպես չկրկնվեն 2 ից ավել)
//  Այս ամբողջ ինֆոն գրել լրացնելուց հետո պահպանվի լոկալ սթորիջում իր id ով։
//  (Id ն տրվում է ավտոմատ այնպիսի ալգորիթմով որ երբևէ չկրկնվի։
//  Պրոցեսը տեղի ունենա ամեն անգամ լրացնել հաստատման կոճակին սեղմելուց հետո։
//  Օգտագործել ռեգուլար էքսպրեսիոն վալիդացման համար։ Տեղեկացնել օգտատիրոջը այն սխալ լրացրած դաշտի մասին, որը լրացվել է սխալ։


const form = document.querySelector("#form")
const userNameInput = document.querySelector('#name')
const surnameInput = document.querySelector('#surname')
const teacherRadio = document.querySelector('#Teacher')
const studentRadio = document.querySelector('#Student')
const workExperienceInput = document.querySelector('#WorkExperienceTime')
const facultyGroupInput = document.querySelector('#FacultyGroup')
const inputControlRadio = document.querySelector('.input-control-radio')
const errorRadio = inputControlRadio.querySelector('.error')
const passwordInput = document.querySelector('#password')
const dateOfBirthInput = document.querySelector('#Date-of-Birth')
const submitButton = document.querySelector('button')
let validationCount = 0
const users = JSON.parse(localStorage.getItem("users")) || []



form.addEventListener("submit", (e) => {
    e.preventDefault()
    validationCount = 0
    validateInputs()

    if (validationCount === 5) {
        const newUser = {
            id: new Date().getTime().toString(),
            name: userNameInput.value.trim(),
            surname: surnameInput.value.trim(),
            dateOfBirth: dateOfBirthInput.value.trim(),
            profession: teacherRadio.checked ? 'Teacher' : 'Student',
            workExperience: workExperienceInput.value.trim(),
            facultyGroup: facultyGroupInput.value.trim(),
            password: passwordInput.value.trim(),
        }

        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        form.reset()
    }
})


function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

function isValidPasswordForTeacher(password) {
    const teacherPasswordPattern = /^(?!.*(\d).*\1.*\1)\d{7,}$/
    return teacherPasswordPattern.test(password)
}

function isValidPasswordForStudent(password) {
    const studentPasswordPattern = /^(?=.*[a-zA-Z]{3}).{9,}$/
    return studentPasswordPattern.test(password)
}

function validateInputs() {

    validateField(userNameInput, 'Name is required')
    validateField(surnameInput, 'Surname is required')
    validateField(dateOfBirthInput, 'Date of Birth is required')

    if (!teacherRadio.checked) {
        errorRadio.textContent = 'Please select either Teacher or Student'
    } else {
        errorRadio.textContent = ''
        const radioInputError = document.querySelector('.radioError')

        if(workExperienceInput.value.trim() === ''){
            workExperienceInput.style.border = '2px solid #ff3860'
            radioInputError.textContent = 'work experience, time is required'
        }else {
            workExperienceInput.style.border = '2px solid #09c372'
            radioInputError.textContent = ''
            validationCount++
        }
    }

    if(!studentRadio.checked){
        errorRadio.textContent = 'Please select either Teacher or Student'
    }else {
        errorRadio.textContent = ''
        const radioInputError1 = document.querySelector('.radioError1')
    
        if(facultyGroupInput.value.trim() === ''){
            facultyGroupInput.style.border = '2px solid #ff3860'
            radioInputError1.textContent = 'work experience, time is required'
        }else {
            facultyGroupInput.style.border = '2px solid #09c372'
            radioInputError1.textContent = ''
            validationCount++
        }
    }

    if(teacherRadio.checked || studentRadio.checked){
        errorRadio.textContent = ''
    }

    validatePassword()
}

function validateField(inputElement, errorMessage) {
    if (inputElement.value.trim() === '') {
        setError(inputElement, errorMessage)
    } else {
        setSuccess(inputElement)
        validationCount++
    }
}

function validatePassword() {
    const password = passwordInput.value.trim()

    if (password === '') {
        setError(passwordInput, 'Password is required')
    } else if (teacherRadio.checked && !isValidPasswordForTeacher(password)) {
        setError(passwordInput, 'Password must contain only numbers')
    } else if (studentRadio.checked && !isValidPasswordForStudent(password)) {
        setError(passwordInput, 'Password must contain only numbers')
    } else {
        setSuccess(passwordInput)
        validationCount++
    }
}