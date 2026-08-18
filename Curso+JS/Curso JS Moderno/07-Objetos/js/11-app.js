
const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio: 7890,
  disponible: true,
  mostarInfo: function(){
    console.log(`El producto: ${this.nombre} tienen un precio de: ${this.precio}`)
  }
}

const producto2 = {
  nombre:"Tablet",
  precio: 3800,
  disponible: true,
  mostarInfo: function(){
    console.log(`El producto: ${this.nombre} tienen un precio de: ${this.precio}`)
  }
}

producto.mostarInfo();
producto2.mostarInfo();