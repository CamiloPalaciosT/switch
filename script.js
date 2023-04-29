const body = document.body;
const toggle = document.querySelector(".toggle");
const hero__title = document.querySelector(".hero__title");
const cubes = document.querySelectorAll(".cube");
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    hero__title.classList.toggle('active');
    hero__title.textContent = "Apagado";
    
    for (const cube of cubes) {
        cube.classList.toggle("active");
      }

    if (toggle.classList.contains('active')) {
        hero__title.textContent = "Apagado";
      } else {
        hero__title.textContent = "Encendido";
      }
}
