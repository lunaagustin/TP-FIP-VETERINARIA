import { Paciente } from "./paciente";
import { Generador } from "./generadorId";

export class Cliente{
    protected nombre:string;
    protected telefono: number;
    private id: number;
    private esVIP: boolean;
    private acumulVisitas: number;
    protected mascotas: Paciente[];

    constructor(nombre:string,telefono:number){
        this.nombre= nombre;
        this.telefono= telefono;
        this.id= this.setID();
        this.esVIP= false;
        this.acumulVisitas= 0;
        this.mascotas= [];
    }

    public getNombre():string{
        return this.nombre;
    }

    public getTelefono():number{
        return this.telefono;
    }

    public getID():number{
        return this.id;
    }

    public getVIP():boolean{
        return this.esVIP;
    }

    public getAcumulVisitas():number{
        return this.acumulVisitas;    
    }

    public getListasMascotas():Paciente[]{
        return this.mascotas;
    }

    public muestroMascotasAsignadas():Paciente[]{
        return this.mascotas
    }

    public setNombre(nombre:string):void{
        this.nombre= nombre;
    }

    public setTelefono(telefono:number):void{
        this.telefono= telefono;
    }

    public setID():number{
        let idGenerado = new Generador();
        let id = idGenerado.generadorIdUnico(); 
        return id;
    }

    public setVIP():void{
        console.log("¿El cliente es vip?");
        if(this.acumulVisitas >= 0 && this.acumulVisitas < 5){
            console.log(`${this.esVIP = false}. No cuenta con las suficientes visitas.`);
        }else{
            console.log(`${this.esVIP = true}. Tiene las visitas requeridas para serlo.`);
        }
    }
    
    public setAcumulVisitas(visitas:number):void{
        this.acumulVisitas += visitas;
    }

    public adoptarPaciente(paciente: Paciente) {
        this.mascotas.push(paciente);
    }

    public verCantVisitas(){
        console.log (`El cliente ${this.nombre} tiene un total de: ${this.acumulVisitas} visitas`); 
    }
}
