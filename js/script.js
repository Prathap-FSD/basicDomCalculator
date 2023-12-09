let containerDiv = document.createElement('div')
document.body.append(containerDiv)
containerDiv.setAttribute('class','container')

let subDiv = document.createElement('div')
containerDiv.append(subDiv)
subDiv.setAttribute('class','col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  p-3 subDiv')

let heaOne = document.createElement('h1')
subDiv.append(heaOne)
heaOne.id="title"
heaOne.innerText="Calculator"

let pTag = document.createElement('p')
subDiv.append(pTag)
pTag.id="description"
pTag.innerText=" 2023"

let calDiv = document.createElement('div')
subDiv.append(calDiv)
calDiv.setAttribute('class','col-12')

let displayInput = document.createElement('input')
calDiv.append(displayInput)
displayInput.setAttribute('type','text')
displayInput.setAttribute("disabled", "")
displayInput.id = 'result'
displayInput.innerText = '0'
displayInput.classList.add('col-12')

let btnsDiv = document.createElement('div')
calDiv.append(btnsDiv)
btnsDiv.setAttribute('class','btnsDiv mt-2')

let clearDisplay = document.createElement('button')
btnsDiv.append(clearDisplay)
clearDisplay.id = 'clear'
clearDisplay.innerText = 'C'

let dele  = document.createElement('button')
btnsDiv.append(dele)
dele.innerText = '←'

let divisionSym  = document.createElement('button')
btnsDiv.append(divisionSym)
divisionSym.innerText = '/'

let multiSym  = document.createElement('button')
btnsDiv.append(multiSym)
multiSym.innerText = '*'

let seven  = document.createElement('button')
btnsDiv.append(seven)
seven.innerText = '7'

let eight  = document.createElement('button')
btnsDiv.append(eight)
eight.innerText = '8'

let nine  = document.createElement('button')
btnsDiv.append(nine)
nine.innerText = '9'

let subt  = document.createElement('button')
btnsDiv.append(subt)
subt.innerText = '-'
subt.id = 'subtract'
subt.setAttribute('onclick','appendToDisplay("-")')

let four  = document.createElement('button')
btnsDiv.append(four)
four.innerText = '4'

let five  = document.createElement('button')
btnsDiv.append(five)
five.innerText = '5'

let six  = document.createElement('button')
btnsDiv.append(six)
six.innerText = '6'

let addi  = document.createElement('button')
btnsDiv.append(addi)
addi.innerText = '+'
addi.id = 'add'
addi.setAttribute('onclick','appendToDisplay("+")')


let one  = document.createElement('button')
btnsDiv.append(one)
one.innerText = '1'
one.id="1"
one.setAttribute('onclick','appendToDisplay("1")')

let two  = document.createElement('button')
btnsDiv.append(two)
two.innerText = '2'
two.id="2"
two.setAttribute('onclick','appendToDisplay("2")')

let three  = document.createElement('button')
btnsDiv.append(three)
three.innerText = '3'
three.setAttribute('onclick','appendToDisplay("3")')

let ttl  = document.createElement('button')
btnsDiv.append(ttl)
ttl.innerText = '='
ttl.id = 'equal'
ttl.setAttribute('class','ttl')

let zero  = document.createElement('button')
btnsDiv.append(zero)
zero.innerText = '0'
zero.setAttribute('class','zero')

let dot  = document.createElement('button')
btnsDiv.append(dot)
dot.innerText = '.'




document.addEventListener('keydown', function(event){
    if(event.key >='0' && event.key<='9' || ['/','*', '-', '+','.','shiftKey'].includes(event.key)){
        event.preventDefault()
        appendToDisplay(event.key)
    }else if (event.key === 'Escape') {
        event.preventDefault();
        cleanDisplay();
    }else if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLastValue();
    }else if (event.key === 'Enter') {
        event.preventDefault();
        calcResult();
    }else if (event.key >= 'a' && event.key <= 'z' ) {
        event.preventDefault();
        alert('Only Numbers are allowed')
    }

})

function appendToDisplay(value){
    document.getElementById('result').value += value;
}

function cleanDisplay(){
    document.getElementById('result').value = '';
}

function deleteLastValue(){
    let currentDisplayValue = document.getElementById('result').value
    document.getElementById('result').value = currentDisplayValue.slice(0, -1)
}

function calcResult(){
    let result = eval( document.getElementById('result').value)
    document.getElementById('result').value = result
}


