
const currentNumber=document.querySelector(".currentNumber");
const operatorButton=document.querySelectorAll(".operator");
const numberButton=document.querySelectorAll(".number");
const clearButton=document.querySelector(".clear");
const equalsButton=document.querySelector(".equals");
const mathSign=document.querySelector('.mathSign');
const previousNumber=document.querySelector(".previousNumber p");
const historyList=document.querySelector(".history-list");
const historyClearButton=document.querySelector(".history-clear");




let result='0';

function operate(){

    if(currentNumber.innerHTML==='' && this.textContent==='-') {return currentNumber.innerHTML='-';
    return;
}
else if(currentNumber.innerHTML===''){
    return;
}

if(mathSign.innerHTML!==''){
    showResult();
}
previousNumber.innerHTML=currentNumber.innerHTML;
mathSign.innerHTML=this.textContent;
currentNumber.innerHTML='';

}

function historyAdd(){

const newHistoryElement=document.createElement('li');
newHistoryElement.classList.add("history-list-element");
historyList.appendChild(newHistoryElement);
newHistoryElement.innerHTML=`${previousNumber.innerHTML}${mathSign.innerHTML}${currentNumber.innerHTML}=${result}`;
console.log(newHistoryElement);
    
}

function displayNumbers(){

    if(this.textContent==='.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent==='.' && currentNumber.innerHTML==='' ) return currentNumber.innerHTML='.0';

    currentNumber.innerHTML+=this.textContent;

}

function showResult(){

    if(previousNumber.innerHTML==='' || currentNumber.innerHTML==='') return;

    let a=Number(currentNumber.innerHTML);
    let b=Number(previousNumber.innerHTML);
    let operator=mathSign.innerHTML;

    switch(operator){
        case '+':
            result=a+b;
            break;
        case '-':
            result=b-a;
            break;
        case 'x':
            result=a*b;
            break;
        case '/':
            result=b/a;
            break;
        case 'x^2':
            result=b**a;
            break;
        case '%':
            result=b%a;
        case '^':
            result=a**b;
}   

historyAdd();

currentNumber.innerHTML=result;
previousNumber.innerHTML='';
mathSign.innerHTML=''


}

function clearDisplay(){

    currentNumber.innerHTML='';
    previousNumber.innerHTML='';
    mathSign.innerHTML=''

}



operatorButton.forEach((button)=>button.addEventListener('click',operate))
numberButton.forEach((button)=>button.addEventListener('click',displayNumbers))
equalsButton.addEventListener('click',showResult);
clearButton.addEventListener('click',clearDisplay);
historyClearButton.addEventListener("click",()=>{
    historyList.innerHTML='';
})

