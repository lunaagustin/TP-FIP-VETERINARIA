import { Generador } from "./generadorId";

export class Proveedor {
    protected nomProveedor: string;
    protected telefono: number;
    private idProveedor: number;

    constructor (nomProveedor:string, telefono:number){
        this.nomProveedor = nomProveedor;
        this.telefono = telefono;
        this.idProveedor = this.generarId(); 
    }

     //METODO PARA GENERAR ID ALEATORIA
    public generarId(): number {
        let idGenerado = new Generador();
        let id = idGenerado.generadorIdUnico(); 
        return id; 
    }

    public getId(): number{
        return this.idProveedor; 
    }

    public getNomProveedor(): string {
        return this.nomProveedor; 
    }

    public setNomProveedor(nomProveedor:string){
        this.nomProveedor = nomProveedor; 
    }

    public getTelefono(): number{
        return this.telefono; 
    }

    public setTelefono(telefono:number){
        this.telefono = telefono;
    }

}

