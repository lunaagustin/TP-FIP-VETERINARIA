export class RedVeterinaria{
    private nombre:string;

    constructor(nombre:string){
        this.nombre= nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nuevoNombre:string):void{
        this.nombre= nuevoNombre;
    }
}
