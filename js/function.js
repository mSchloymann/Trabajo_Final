
const nav = document.getElementById ('nav');
const button = document.getElementById ('button');
const perfil = document.getElementById ('perfil');
const experiencia = document.getElementById ('experiencia');
const contacto = document.getElementById ('contacto');
const redes = document.getElementById ('redes');


button.addEventListener('click', () =>{
    console.log('Enviado');
});

redes.addEventListener('click', () =>{
    console.log('Click');
});

perfil.addEventListener('mouseenter', () =>{
    perfil.style.background = 'gray'
});

perfil.addEventListener('mouseleave', () =>{
    perfil.style.background = 'white'
});

experiencia.addEventListener('mouseenter', () =>{
    experiencia.style.background = 'gray'
});

experiencia.addEventListener('mouseleave', () =>{
    experiencia.style.background = 'whitesmoke'
});

contacto.addEventListener('click', () =>{
    console.log('Clik')
});

