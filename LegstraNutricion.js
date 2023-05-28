//  const Inicio=document.getElementById("home")


// Inicio.addEventListener('mouseleave')


function punteros(nombreDiv){
    nombreDiv=document.getElementById(`${nombreDiv}`)
    nombreDiv.addEventListener('mouseover',()=>{
        nombreDiv.style.cursor='pointer'
        nombreDiv.style.backgroundColor="rgb(181, 200, 238)"
        nombreDiv.style.color="white"
        nombreDiv.style.border="2px solid cornflowerblue"
    })
    nombreDiv.addEventListener('mouseleave',()=>{
        nombreDiv.style.color='black'
        nombreDiv.style.backgroundColor='white'
        nombreDiv.style.border="0px solid rgb(78, 165,106)"

    })   
    
}

punteros("home")
punteros("trabajo")
punteros("servicios")
punteros("modTrabajo")

trabajo.addEventListener('click',()=>{
    document.getElementById('bienvenida').remove()
    document.getElementById('portraits').remove()
    trabajo.style.backgroundColor="rgb(181, 200, 238)"
    trabajo.style.color="white"
    trabajo.style.border="2px solid cornflowerblue"
})