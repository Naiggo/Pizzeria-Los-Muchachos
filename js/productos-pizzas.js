let htmlcad=`
 <div class="contenedor">
`
for(let pizza of pizzasData.pizzas){
    htmlcad= htmlcad+ `       
            <div class="tarjeta">
                <img src= ${pizza.url_imagen}   alt="producto">
                <div class="textocard">
                    <h2> ${pizza.nombre} </h2>
                    <div class="textocard-descripcion"> <p> ${pizza.descripcion}  </p> </div>
                    <h2> $${pizza.precio}  </h2>
                </div>
            </div>
    `
}
htmlcad=htmlcad+`</div>`
console.log(htmlcad);
document.querySelector("main").innerHTML=htmlcad;