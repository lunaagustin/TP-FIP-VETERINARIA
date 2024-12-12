import { Veterinaria } from "./veterinaria";
import { Proveedor } from "./proveedor";
import * as readlineSync from "readline-sync";
import { read } from "fs";
import { Cliente } from "./cliente";

export class RedVeterinaria {
  private nombre: string;
  private veterinarias: Veterinaria[];
  private proveedores: Proveedor[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.veterinarias = [];
    this.proveedores = [];
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  public getVeterinarias(): Veterinaria[] {
    return this.veterinarias; 
  }

  public AltaVeterinaria(): void {
    let nombreVeterinaria: string = readlineSync.question( "Ingrese nombre de veterinaria: ");
    let direccionVeterinaria: string = readlineSync.question( "Ingrese direccion de la veterinaria: ");
    let nuevaVeterinaria = new Veterinaria(nombreVeterinaria,direccionVeterinaria );
    this.veterinarias.push(nuevaVeterinaria);
    console.log (`La veterinaria ${nombreVeterinaria} fue agregada`); 
    this.menuVeterinaria(); 
  }

  public BajaVeterinaria(): void {
    let nombreVeterinaria = readlineSync.question ("Ingrese nombre de la veterinaria: "); 
    this.veterinarias = this.veterinarias.filter((veterinaria) => veterinaria.getNombre() !== nombreVeterinaria);
    console.log (`La veterinaria ${nombreVeterinaria} fue eliminada`); 
    this.menuVeterinaria(); 
  }

  public modificarVeterinaria(): void {
    let nombreVeterinaria = readlineSync.question ("Ingrese nombre de la veterinaria: "); 
    let veterinaria = this.veterinarias.find((vet) => vet.getNombre() === nombreVeterinaria);
      if (veterinaria) {
        let nuevoNombre : string = readlineSync.question ("Ingrese nuevo nombre de veterinaria: "); 
        veterinaria.setNombre(nuevoNombre);
        let nuevaDireccion : string = readlineSync.question ("Ingrese nueva direccion : "); 
        veterinaria.setDireccion(nuevaDireccion);
      console.log(`Veterinaria modificada`);
      this.menuVeterinaria();
    } else {
      console.log("Veterinaria no encontrada");
      this.menuVeterinaria();
    }
  }

  public mostrarVeterinarias(): void {
    this.veterinarias.forEach(veterinaria => { console.log (`Veterinaria:  ${veterinaria.getNombre()} - Direccion :  ${veterinaria.getDireccion()} `)})
    this.menuVeterinaria();
   }
 

  public mostrarProveedores(): void {
   this.proveedores.forEach(proveedor => { console.log (`Proveedor :  ${proveedor.getNomProveedor()} - Telefono :  ${proveedor.getTelefono()} `)})
   this.menuProveedor();
  }

  public AltaProveedor(): void {
    let nombreProveedor: string = readlineSync.question( "Ingrese nombre de proveedor: ");
    let telefonoProveedor: number = readlineSync.questionInt("Ingrese numero de telefono del proveedor: ");
    let proveedorNuevo = new Proveedor(nombreProveedor, telefonoProveedor);
    this.proveedores.push(proveedorNuevo);
    console.log (`El proveedor ${nombreProveedor} fue agregado`); 
    this.menuProveedor();
  }

  public BajaProveedor(): void {
    let nombreProveedor: string = readlineSync.question("Ingrese nombre de proveedor para eliminar: "); 
    this.proveedores = this.proveedores.filter((proveedor) => proveedor.getNomProveedor() !== nombreProveedor);
    console.log (`El proveedor ${nombreProveedor} fue eliminado`); 
    this.menuProveedor();
  }

  public ModificarProveedor(): void {
    let nombreProveedor : string = readlineSync.question ("Ingrese nombre de proveedor para modificar: "); 
    let proveedores = this.proveedores.find((prov) => prov.getNomProveedor() === nombreProveedor);
    if (proveedores) {
        let nuevoNombre : string = readlineSync.question ("Ingrese nuevo nombre de proveedor: "); 
        proveedores.setNomProveedor(nuevoNombre);
        let nuevoTelefono : number = readlineSync.questionInt ("Ingrese nuevo telefono : "); 
        proveedores.setTelefono(nuevoTelefono);
      console.log(`Proveedor modificado `);
      this.menuProveedor();
    } else {
      console.log("Proveedor no encontrado");
      this.menuProveedor();
    }
  }

  public menuPrincipal(): void {
    console.log(
      "******************************************************************************************************"
    );
    console.log("");
    console.log("1 Sucursales");
    console.log("2 Proveedores");
    console.log ("3 Clientes"); 
    console.log("0 Salir");

    let opcion: string = readlineSync.question("Ingrese una opcion: ");
    console.log("");

    switch (opcion) {
      case "1":
        this.menuVeterinaria();
        break;
      case "2":
        this.menuProveedor();
        break;
        case "3": 
        this.menuClientes(); 
        break; 
      case "0":
        console.log("Gracias por visitarnos");
        return;
    }
  }

  public menuProveedor(): void {
    console.log("1 Agregar proveedor");
    console.log("2 Eliminar proveedor");
    console.log("3 Modificar proveedor");
    console.log("4 Mostrar proveedores"); 
    console.log("5 Volver ");

    let opcion: string = readlineSync.question("Ingrese una opcion: ");
    console.log("");

    switch (opcion) {
      case "1":
        this.AltaProveedor();
        break;
      case "2":
        this.BajaProveedor();
        break;
      case "3":
        this.ModificarProveedor();
        break;
    case "4": 
    this.mostrarProveedores();
    break
      case "5":
        this.menuPrincipal();
        return;  
    }
  }

  public menuVeterinaria(): void{
    console.log ("1 Agregar veterinaria"); 
    console.log ("2 Eliminar veterinaria");
    console.log ("3 Modificar veterinaria");
    console.log ("4 Mostrar veterinarias"); 
    console.log ("5 Volver ");  

    let opcion : string = readlineSync.question("Ingrese una opcion: "); 
    console.log(""); 

    switch(opcion) {
        case "1": 
        this.AltaVeterinaria(); 
        break; 
        case "2": 
        this.BajaVeterinaria(); 
        break; 
        case "3": 
        this.modificarVeterinaria();
        break; 
        case "4":
            this.mostrarVeterinarias(); 
        break; 
        case "5":
            this.menuPrincipal(); 
            return; 
    }

  }

  public menuClientes(): void {
    console.log ("1 Agregar cliente"); 
    console.log ("2 Modificar cliente"); 
    console.log ("3 Eliminar cliente"); 
    console.log ("4 Consulta de mascota"); 
    console.log ("5 Mostrar clientes y mascotas"); 
    console.log ("6 Volver");  

    let opcion : string = readlineSync.question("Ingrese una opcion: "); 
    console.log(""); 
    let nombreVeterinaria = readlineSync.question ("Ingrese nombre de la veterinaria: "); 
    let veterinaria = this.veterinarias.find((vet) => vet.getNombre() === nombreVeterinaria);
        
    switch (opcion){
        
        case "1": 
          if (veterinaria) {
            console.log(""); 
            let nombreCliente : string = readlineSync.question ("Ingrese nombre de cliente: "); 
            let telefonoCliente : number = readlineSync.questionInt ("Ingrese telefono del cliente: "); 
            let nuevoCliente = new Cliente(nombreCliente,telefonoCliente);
            veterinaria.agregarCliente(nuevoCliente); 
            console.log (`El cliente ${nombreCliente} fue añadido con exito en la veterinaria ${nombreVeterinaria}`); 
            veterinaria.mostrarClientes(); 
            this.menuClientes(); 
          }else{
            console.log ("Veterinaria no encontrada"); 
            this.menuClientes(); 
        }
        case "2": 
        break;

        case "3": 
        if (veterinaria){
          console.log(""); 
          let nombreCliente : string = readlineSync.question ("Ingrese nombre de cliente: "); 
          veterinaria.bajaCliente(nombreCliente);
          console.log (`El cliente ${nombreCliente} fue eliminado con exito de la veterinaria ${nombreVeterinaria}`); 
          this.menuClientes(); 
        }

        case "4": 
        break; 
        case "5": 
        break; 
        case "6": 
         return this.menuPrincipal(); 
    }

    }

}
