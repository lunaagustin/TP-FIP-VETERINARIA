export class Cliente{
    private nombre:string;
    private telefono: number;
    private id: number;
    private esVIP: boolean;
    private acumulVisitas: number;
    //atributo mascotas: Paciente[]

    constructor(nombre:string,telefono:number){
        this.nombre= nombre;
        this.telefono= telefono;
        this.id= this.setID();
        this.esVIP= false;
        this.acumulVisitas= 0;
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

    public setNombre(nombre:string):void{
        this.nombre= nombre;
    }

    public setTelefono(telefono:number):void{
        this.telefono= telefono;
    }

    public setID():number{
        return this.id= Math.floor(Math.random()*100);
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
}
