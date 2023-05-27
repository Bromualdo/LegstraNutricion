 const Inicio=document.getElementById("home")


Inicio.addEventListener('mouseover',()=>{
    Inicio.style.backgroundColor='pointer'
})


function punteros(nombreDiv,nombreId){
    nombreDiv=document.getElementById(`${nombreId}`)
    nombreDiv.addEventListener('mouseover',()=>{
        nombreDiv.style.cursor='pointer'
        nombreDiv.style.backgroundColor="rgb(174, 205,173)"
        nombreDiv.style.color="white"
        nombreDiv.style.border="2px solid rgb(78, 165,106)"
    })

}

punteros("inicio","home")
punteros("trabajo","trabajo")
punteros("servicios","servicios")
punteros("modTrabajo","modTrabajo")