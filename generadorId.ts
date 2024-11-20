
//CLASE PARA GENERAR ID's unicos

export class Generador {
    private idsGenerados: number[] = []; 

    public generadorIdUnico(): number {
        let id: number;
      
        do {
          id = Math.floor(Math.random() * 100);
        } while (this.idsGenerados.includes(id)); // Verifica que el ID no exista en el arreglo
      
        this.idsGenerados.push(id); // Agrega el ID al arreglo para mantener registro
        return id;
      }
   
}
