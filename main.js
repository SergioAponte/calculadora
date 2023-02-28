const contenedor=[]
let recorrido=false

function mostrar(){
          document.getElementById("display").innerText=resultado
}

function registrar(){
          while (recorrido!=mostrar()){
                    valor=parseInt(document.getElementById("numeros"))
                    contenedor+=valor
          }
}

function operador(operando){
          switch(operando){
                    case '+':
                              resultado=(contenedor[0]+contenedor[1])
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
                              num1.value=' '
                              num2.value=' '
                              mostrar()
                              break
          }
}