
const button = document.getElementById ('button')



button.addEventListener('click', () =>{
    console.log('Enviado');
})

document.getElementById('nav').addEventListener('click', function(){
    console.log('Clik')
});

document.getElementById('redes').addEventListener('click', function(){
    console.log('Clik')
});

document.getElementById('perfil').addEventListener('mouseenter', function() {
    perfil.style.background = "gray"
} );

document.getElementById('perfil').addEventListener('mouseleave', function() {
    perfil.style.background = "white"
} );

document.getElementById('experiencia').addEventListener('mouseenter', function() {
    perfil.style.background = "gray"
} );

document.getElementById('experiencia').addEventListener('mouseleave', function() {
    perfil.style.background = "white"
} );