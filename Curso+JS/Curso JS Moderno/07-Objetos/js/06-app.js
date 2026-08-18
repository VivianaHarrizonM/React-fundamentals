const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio: 380,
  disponible: true,
  informacion:{
    medidas:{
      peso: '1kg',
      medida: '1m'
    },
    fabricacion:{
      pais:'China'
    }
  }
}

const { nombre, informacion, informacion:{ fabricacion } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);