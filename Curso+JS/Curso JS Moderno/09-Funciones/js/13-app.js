
//Métodos de propiedad
const reproductor = {
  cancion: '',
  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log(`Pausando..`),
  borrar: id => console.log(`Borrarndo cación con el id ${id}`),
  playList: nombre => console.log(`Creando la playlist de:  ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist:  ${nombre}`),

  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion(){
    console.log(`${this.cancion}`);
  }
}

reproductor.nuevaCancion = "Enter Sandam";
reproductor.obtenerCancion;

reproductor.reproducir(12);
reproductor.reproducir(23);
reproductor.pausar();
reproductor.borrar(12);
reproductor.playList('Banda');
reproductor.reproducirPlaylist('Corridos');


