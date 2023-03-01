
for (let i=0; i<=9; i++){
    document.getElementById('btn_' + i).addEventListener('click', (evento)=>mostrar(evento.target));
}
function mostrar(tecla){
    document.getElementById('display').innerHTML=
    document.getElementById('display').innerHTML+tecla.value
}
function mostrar2(tecla){
    document.getElementById('display').innerHTML=
    document.getElementById('display').innerHTML+tecla.value
}
addEventListener('keypress', evento=>{
    if(!isNaN(evento.key)){
        mostrar2(evento.key)
    }
})

function valor(ingresar){
    let num=ingresar
    switch (num.type){
        case '1':
            
    }
}