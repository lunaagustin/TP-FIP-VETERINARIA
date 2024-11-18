import { Veterinaria } from "./veterinaria";
import { Proveedor } from "./proveedor";

export class RedVeterinaria {
    private nombre: string;
    private veterinarias: Veterinaria[];
    private proveedores: Proveedor[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.veterinarias = []
        this.proveedores = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    public AltaVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
    }

    public BajaVeterinaria(nombreVeterinaria: string): void {
        this.veterinarias = this.veterinarias.filter(veterinaria => veterinaria.getNombre() !== nombreVeterinaria)
    }


    public modificarVeterinaria(id: number, nuevoNombre?: string, nuevaDireccion?: string): void {
        let veterinaria = this.veterinarias.find(vet => vet.getId() === id);
        if (veterinaria) {
            if (nuevoNombre) veterinaria.setNombre(nuevoNombre);
            if (nuevaDireccion) veterinaria.setDireccion(nuevaDireccion);
            console.log(`Veterinaria con id '${id}' modificada.`);
        } else {
            console.log(`Veterinaria con id '${id}' no encontrada.`);
        }
    }

    public AltaProveedor(proveedor:Proveedor):void{
        this.proveedores.push(proveedor);
    }

    public BajaProveedor(nombreProveedor:string):void{
        this.proveedores= this.proveedores.filter(proveedor => proveedor.getNomProveedor() !== nombreProveedor);
    }

    public ModificarProveedor(id: number, nuevoNombre?: string, nuevoTelefono?: number): void {
        let proveedores = this.proveedores.find(prov => prov.getId() === id);
        if (proveedores) {
            if (nuevoNombre) proveedores.setNomProveedor(nuevoNombre);
            if (nuevoTelefono) proveedores.setTelefono(nuevoTelefono);
            console.log(`Proveedor con id '${id}' modificado.`);
        } else {
            console.log(`Proveedor con id '${id}' no encontrado.`);
        }
    }
}
