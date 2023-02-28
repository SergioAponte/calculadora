function mostrar(){
          document.getElementById("display").innerText=resultado
}
function operador(operando){
          switch(operando){
                    case '+':
                              resultado=parseInt(num1.value) + parseInt(num2.value)
                              simbolo.innerText='+'
                              console.log(resultado)
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
                              num1=' '
                              num2=' '
                              mostrar()
                              break
          }
}