const botonCorazon = document.getElementById("button-heart");

function crearcorazon() {

    const corazon = document.createElement("div");
    corazon.textContent = "💛";
    corazon.className = "corazon"
    document.body.appendChild(corazon);
    
    setTimeout(() => {

        corazon.remove();

    }, 2500);

};


botonCorazon.addEventListener("click", () => {
   
    crearcorazon();

});









