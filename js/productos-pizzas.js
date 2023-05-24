let htmlcad=`
 <div class="contenedor">
`
for(let pizza of pizzasData.pizzas){
    htmlcad= htmlcad+ `       
            <div class="tarjeta">
                <img src= ${pizza.url_imagen}   alt="producto">
                <div class="textocard">
                    <h2> ${pizza.nombre} </h2>
                    <p> ${pizza.descripcion}  </p>
                </div>
            </div>
    `
}
htmlcad=htmlcad+`</div>`
console.log(htmlcad);
document.querySelector("main").innerHTML=htmlcad;