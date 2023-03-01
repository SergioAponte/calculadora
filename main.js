let number=0
let number2=0
function mostrar(){
    number2=document.getElementById('numeros')
    resultado= parseInt(number) + parseInt(number2)
    document.getElementById("display").innerText=resultado
}
function operador(operando){
    switch(operando){
            case '+':
                simbolo.innerText='+'
                number=document.getElementById('numeros')
                numeros.value=''
                break
            case '-':
                resultado=parseInt(num1.value) - parseInt(num2.value)
                simbolo.innerText='-'
                console.log(resultado)
                break
            case '*':
                resultado=parseInt(num1.value) * parseInt(num2.value)
                simbolo.innerText='*'
                console.log(resultado)
                break
            case '/':
                resultado=parseInt(num1.value) / parseInt(num2.value)
                simbolo.innerText='/'
                console.log(resultado)
                break
            case 'AC':
                resultado=' '
                simbolo.innerText=' '
                num1.value=' '
                num2.value=' '
                mostrar()
                break
    }
}