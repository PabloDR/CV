
document.getElementById('item1').addEventListener('click', function() {  
    mostrar ("detalles","item1");
});

document.getElementById('item2').addEventListener('click', function() {
    mostrar("habilidades","item2");
});
   
document.getElementById('item3').addEventListener('click', function() {
    mostrar("educacion","item3");
});

document.getElementById('item4').addEventListener('click', function() {
    mostrar("experiencia","item4");
});

document.getElementById('item5').addEventListener('click', function() {
    mostrar("cursos","item5");
});

document.getElementById('item6').addEventListener('click', function() {
    mostrar("pasantia","item6");
});

document.getElementById('item7').addEventListener('click', function() {
    mostrar("extra","item7");
});

function mostrar(seccion,item) {

    var paneles = document.getElementsByClassName('info');
    for (var i = 0; i < paneles.length; i++) {
       paneles[i].style.display= "none";
    }
    
    var  items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('a-activo');
        items[i].classList.add('a-normal');
    }

        document.getElementById(seccion).style.display = "flex";
        document.getElementById(item).classList.remove('a-normal');
        document.getElementById(item).classList.add('a-activo');
       
};

