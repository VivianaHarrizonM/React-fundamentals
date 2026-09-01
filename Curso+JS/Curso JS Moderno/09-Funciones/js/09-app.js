
//Métodos de propiedad
const reproductor = {
  reproducir: function(id){
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function(){
    console.log(`Pausando..`);
  },
  borrar: function(id){
    console.log(`Borrarndo cación con el id ${id}`)
  },
  playList: function(nombre){
    console.log(`Creando la playlist de:  ${nombre}`)
  },
  reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo la playlist:  ${nombre}`)
  },
}

reproductor.reproducir(12);
reproductor.reproducir(23);
reproductor.pausar();
reproductor.borrar(12);
reproductor.playList('Banda');
reproductor.reproducirPlaylist('Corridos');


