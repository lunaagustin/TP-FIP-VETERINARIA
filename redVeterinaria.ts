import { Veterinaria } from "./veterinaria";
import { Proveedor } from "./proveedor";
import * as readlineSync from "readline-sync";
import { read } from "fs";
import { Cliente } from "./cliente";
import { Paciente } from "./paciente";

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
    let nombreVeterinaria: string = readlineSync.question("Ingrese nombre de veterinaria: ");
    let direccionVeterinaria: string = readlineSync.question("Ingrese direccion de la veterinaria: ");
    let nuevaVeterinaria = new Veterinaria(nombreVeterinaria, direccionVeterinaria);
    if (!this.veterinarias.some(vet => vet.getNombre() == nombreVeterinaria && vet.getDireccion() == direccionVeterinaria)) {
      this.veterinarias.push(nuevaVeterinaria);
      console.log(`La veterinaria ${nombreVeterinaria} fue agregada`);
    } else {
      console.log("La veterinaria ya existe, debe modificar el nombre / direccion");
    }
    console.log("");
    this.menuVeterinaria();
  }

  public BajaVeterinaria(): void {
    let nombreVeterinaria = readlineSync.question("Ingrese nombre de la veterinaria: ");
    this.veterinarias = this.veterinarias.filter((veterinaria) => veterinaria.getNombre() !== nombreVeterinaria);
    console.log(`La veterinaria ${nombreVeterinaria} fue eliminada`);
    this.menuVeterinaria();
  }

  public modificarVeterinaria(): void {
    let nombreVeterinaria = readlineSync.question("Ingrese nombre de la veterinaria: ");
    let veterinaria = this.veterinarias.find((vet) => vet.getNombre() === nombreVeterinaria);
    if (veterinaria) {
      let nuevoNombre: string = readlineSync.question("Ingrese nuevo nombre de veterinaria: ");
      veterinaria.setNombre(nuevoNombre);
      let nuevaDireccion: string = readlineSync.question("Ingrese nueva direccion : ");
      veterinaria.setDireccion(nuevaDireccion);
      console.log(`Veterinaria modificada`);
      this.menuVeterinaria();
    } else {
      console.log("Veterinaria no encontrada");
      this.menuVeterinaria();
    }
  }

  public mostrarVeterinarias(): void {
    this.veterinarias.forEach(veterinaria => { console.log(`Veterinaria:  ${veterinaria.getNombre()} - Direccion :  ${veterinaria.getDireccion()} `) })
    this.menuVeterinaria();
  }

  public mostrarProveedores(): void {
    this.proveedores.forEach(proveedor => { console.log(`Proveedor :  ${proveedor.getNomProveedor()} - Telefono :  ${proveedor.getTelefono()} `) })
    this.menuProveedor();
  }

  public AltaProveedor(): void {
    let nombreProveedor: string = readlineSync.question("Ingrese nombre de proveedor: ");
    let telefonoProveedor: number = readlineSync.questionInt("Ingrese numero de telefono del proveedor: ");
    let proveedorNuevo = new Proveedor(nombreProveedor, telefonoProveedor);
    if (!this.proveedores.some(prov => prov.getNomProveedor() == nombreProveedor && prov.getTelefono() == telefonoProveedor)) {
      this.proveedores.push(proveedorNuevo);
      console.log(`El proveedor ${nombreProveedor} fue agregado`);
    } else {
      console.log("El proveedor ya existe, debe modificar el nombre / telefono");
    }
    console.log("");
    this.menuProveedor();
  }

  public BajaProveedor(): void {
    let nombreProveedor: string = readlineSync.question("Ingrese nombre de proveedor para eliminar: ");
    this.proveedores = this.proveedores.filter((proveedor) => proveedor.getNomProveedor() !== nombreProveedor);
    console.log(`El proveedor ${nombreProveedor} fue eliminado`);
    this.menuProveedor();
  }

  public ModificarProveedor(): void {
    let nombreProveedor: string = readlineSync.question("Ingrese nombre de proveedor para modificar: ");
    let proveedores = this.proveedores.find((prov) => prov.getNomProveedor() === nombreProveedor);
    if (proveedores) {
      let nuevoNombre: string = readlineSync.question("Ingrese nuevo nombre de proveedor: ");
      proveedores.setNomProveedor(nuevoNombre);
      let nuevoTelefono: number = readlineSync.questionInt("Ingrese nuevo telefono : ");
      proveedores.setTelefono(nuevoTelefono);
      console.log(`Proveedor modificado `);
      this.menuProveedor();
    } else {
      console.log("Proveedor no encontrado");
      this.menuProveedor();
    }
  }

  public menuPrincipal(): void {
    console.clear();
    console.log(
      "******************************************************************************************************"
    );
    console.log("------------------- MENU -------------------");
    console.log("1. Menu Red");
    console.log("2. Salir");

    let opcion: string = readlineSync.question("Ingrese una opcion: ");
    console.log("");

    switch (opcion) {
      case "1":
        this.menuRed();
        break
      case "2":
        console.log("Gracias por visitarnos");
        return;
    }
  }

  public menuRed(): void {
    console.clear();
    console.log("------------------- RED -------------------");
    console.log("1. Menu Veterinarias");
    console.log("2. Menu Proveedores");
    console.log("3. Volver");

    let opcion: string = readlineSync.question("Ingrese una opcion: ");
    console.log("");

    switch (opcion) {
      case "1":
        this.menuVeterinaria();
        break
      case "2":
        this.menuProveedor();
        break
      case "3":
        this.menuPrincipal();
        return;
    }
  }

  public menuVeterinaria(): void {
    console.log("------------------- VETERINARIAS -------------------");
    console.log("1. Agregar veterinaria");
    console.log("2. Eliminar veterinaria");
    console.log("3. Modificar veterinaria");
    console.log("4. Mostrar veterinarias");
    console.log("5. Menu Clientes/Pacientes");
    console.log("6. Volver ");

    let opcion: string = readlineSync.question("Ingrese una opcion: ");
    console.log("");

    switch (opcion) {
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
        this.menuClientesYPacientes();
        break;
      case "6":
        this.menuRed();
        return;
    }

  }

  public menuProveedor(): void {
    console.log("------------------- PROVEEDORES -------------------");
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
        this.menuRed();
        return;
    }
  }

  public menuClientesYPacientes(): void {
    console.log("------------------- CLIENTES Y PACIENTES -------------------");
    console.log("1 Agregar cliente");
    console.log("2 Modificar cliente");
    console.log("3 Eliminar cliente");
    console.log("4 Mostrar clientes");
    console.log("5 Agregar Mascota");
    console.log("6 Modificar Mascota");
    console.log("7 Eliminar Mascota");
    console.log("8 Mostrar Mascotas");
    console.log("9 Asignar Mascota a Cliene/Dueño");
    console.log("10 Filtro de Cliente y sus Mascotas");
    console.log("11 Consulta Veterinaria de Mascota");
    console.log("12 Volver");

    let opcion: number = readlineSync.questionInt("Ingrese una opcion: ");
    console.log("");

    while (opcion <= 11) {
      let nombreVeterinaria = readlineSync.question("Ingrese nombre de la veterinaria: ");
      let veterinaria = this.veterinarias.find((vet) => vet.getNombre() === nombreVeterinaria);
      switch (opcion) {
        case 1:
          if (veterinaria) {
            console.log("");
            veterinaria.agregarCliente();
            console.log(`El cliente fue añadido con exito en la veterinaria ${nombreVeterinaria}`);
            veterinaria.mostrarClientes();
            this.menuClientesYPacientes();
          } else {
            console.log("Veterinaria no encontrada");
            this.menuClientesYPacientes();
          }
          break;
        case 2:
          if (veterinaria) {
            let idCliente = readlineSync.questionInt("Ingrese el ID del cliente: ");
            let cliente = veterinaria.buscarClientePorId(idCliente);
            if (cliente) {
              veterinaria.modificarCliente();
              console.log(("Cliente modificado"));
              this.menuClientesYPacientes();
            } else {
              console.log(("Cliente no encontrado"));
              this.menuClientesYPacientes();
            }
          } else {
            console.log("Error");
            this.menuClientesYPacientes();
          }
          break;
        case 3:
          if (veterinaria) {
            console.log("");
            veterinaria.bajaCliente();
            console.log(`El cliente fue eliminado con exito de la veterinaria ${nombreVeterinaria}`);
            this.menuClientesYPacientes();
          }
          break;
        case 4:
          if (veterinaria) {
            veterinaria.mostrarClientes();
            this.menuClientesYPacientes();
          } else {
            console.log("Error");
            this.menuClientesYPacientes();
          }
          break;
        case 5:
          if (veterinaria) {
            console.log("");
            veterinaria.agregarMascota();
            console.log(`El cliente fue añadido con exito en la veterinaria ${nombreVeterinaria}`);
            veterinaria.muestroMascotas();
            this.menuClientesYPacientes();
          } else {
            console.log("Veterinaria no encontrada");
            this.menuClientesYPacientes();
          }
          break;
        case 6:
          if (veterinaria) {
            veterinaria.modificarMascota();
            this.menuClientesYPacientes();
          }
          break;
        case 7:
          if (veterinaria) {
            console.log("");
            veterinaria.bajaMascota();
            console.log(`La mascota fue eliminada con exito de la veterinaria ${nombreVeterinaria}`);
            this.menuClientesYPacientes();
          }
          break;
        case 8:
          if (veterinaria) {
            veterinaria.muestroMascotas();
            this.menuClientesYPacientes();
          } else {
            console.log("Error");
            this.menuClientesYPacientes();
          }
          break;
        case 9:
          if (veterinaria) {
            veterinaria.asignarPacienteADueño();
            this.menuClientesYPacientes();
          } else {
            console.log("Error");
            this.menuClientesYPacientes();
          }
          break;
        case 10:
          let nombreCliente: string = readlineSync.question("Ingrese nombre del cliente a consultar: ");
          veterinaria?.clienteYmascotas(nombreCliente);
          this.menuClientesYPacientes();
          break;
        case 11:
          let nombreClient1: string = readlineSync.question("Ingrese nombre del cliente: ");
          veterinaria?.consultaVeterinaria(nombreClient1);
          this.menuClientesYPacientes();
          break;
      }
    }
    this.menuVeterinaria();
  }
}
