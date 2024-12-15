import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Generador } from "./generadorId";
import * as readlineSync from "readline-sync";
export class Veterinaria {
  private id: number;
  protected nombre: string;
  protected direccion: string;
  protected clientes: Cliente[];
  protected pacientes: Paciente[];
  constructor(nombre: string, direccion: string) {
    this.id = this.generarId(); //USO METODO GENERAR ID PARA GENERAR UN NUMERO RANDOM
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
    this.pacientes = [];
  }
  //METODO PARA GENERAR ID ALEATORIA
  public generarId(): number {
    let idGenerado = new Generador();
    let id = idGenerado.generadorIdUnico();
    return id;
  }
  public getId(): number {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
  public getDireccion(): string {
    return this.direccion;
  }
  public setDireccion(nuevaDireccion: string) {
    this.direccion = nuevaDireccion;
  }
  public agregarCliente(): void {
    let nombreCliente: string = readlineSync.question("Ingrese el nombre del cliente: ");
    let telefonoCliente: number = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    let nuevoCliente = new Cliente(nombreCliente, telefonoCliente);
    this.clientes.push(nuevoCliente);
    console.log(`El cliente fue agregado`);
  }
  public mostrarClientes(): void {
    this.clientes.forEach(cliente => { console.log(`Cliente :  ${cliente.getNombre()} - Telefono :  ${cliente.getTelefono()} - ID: ${cliente.getID()} - VIP: ${cliente.getVIP()}`) });
  }
  //METODO PARA BUSCAR CLIENTE POR ID
  public buscarClientePorId(id: number) {
    return this.clientes.find((clientes) => clientes.getID() === id);
  }
  public bajaCliente(): void {
    let nombreCliente: string = readlineSync.question("Ingrese el nombre del cliente: ");
    this.clientes = this.clientes.filter((cliente) => cliente.getNombre() !== nombreCliente);
    console.log(`El cliente ${nombreCliente} fue eliminado`);
  }
  public modificarCliente(): void {
    let nombreCliente: string = readlineSync.question("Ingrese el nombre del cliente: ");
    let cliente = this.clientes.find((cliente) => cliente.getNombre() === nombreCliente);
    if (cliente) {
      let nuevoNombre: string = readlineSync.question("Ingrese el nuevo nombre: ");
      cliente.setNombre(nuevoNombre);
      let nuevoTelefono: number = readlineSync.questionInt("Ingrese el nuevo telefono: ");
      cliente.setTelefono(nuevoTelefono);
      console.log("Cliente modificado");
    } else {
      console.log("Cliente no encontrado");
    }
  }
  public agregarMascota(): void {
    let nombreMascota: string = readlineSync.question("Ingrese el nombre de la mascota: ");
    let edadMascota: number = readlineSync.questionInt("Ingrese la edad de la mascota: ");
    let especieMascota: string = readlineSync.question("Ingrese la especie de la mascota: ");
    let nuevaMascota = new Paciente(nombreMascota, especieMascota, edadMascota);
    this.pacientes.push(nuevaMascota);
    console.log(`La mascota fue agregada`);
  }
  public asignarPacienteADueño(): void {
    let idDuenio = readlineSync.questionInt("Ingrese el ID del cliene/duenio: ");
    let duenio = this.clientes.find(clientes => clientes.getID() === idDuenio);
    if (duenio) {
      let nombreMascota = readlineSync.question("Ingrese el nombre de la mascota: ");
      let mascota = this.pacientes.find(mascota => mascota.getNombreMascota() === nombreMascota);
      if (mascota) {
        duenio.adoptarPaciente(mascota);
        mascota.setIdPaciente(idDuenio);
      } else {
        console.log("Mascota no encontrada");
      }
    } else {
      console.log("Duenio no encontrado");
    }
  }
  public clienteYmascotas(nombre: string): void {
    let cliente = this.clientes.find((clientes) => clientes.getNombre() == nombre);
    if (cliente) {
      console.log("----------- CLIENTE Y SUS MASCOTAS -----------");
      console.log(` - Cliente : ${cliente.getNombre()} - ID: ${cliente.getID()} - VIP: ${cliente.getVIP()}`);
      cliente.muestroMascotasAsignadas();
      console.log("");
    } else {
      console.log("Cliente no encontrado");
      console.log("");
    }
  }
  public muestroMascotas(): void {
    console.log("--------------- MASCOTAS ---------------");
    this.pacientes.forEach((pacientes) => {
      console.log(
        `* Nombre:  ${pacientes.getNombreMascota()} - Especie :  ${pacientes.getEspecie()} - ID : ${pacientes.getIdPaciente()} - Edad : ${pacientes.getEdad()} - Exotica: ${pacientes.getExotica()}`
      );
    });
    console.log("");
  }
  public bajaMascota(): void {
    let nombreMascota: string = readlineSync.question("Ingrese el nombre de la mascota: ");
    this.pacientes = this.pacientes.filter((paciente) => paciente.getNombreMascota() !== nombreMascota);
    console.log(`La mascota ${nombreMascota} fue eliminada`);
  }
  public modificarMascota(): void {
    let nombreMascota: string = readlineSync.question("Ingrese el nombre de la mascota para modificar: ");
    let mascota = this.pacientes.find((paciente) => paciente.getNombreMascota() === nombreMascota);
    if (mascota) {
      let nuevoNombre: string = readlineSync.question("Ingrese el nuevo nombre de la mascota: ");
      mascota.setNombreMascota(nuevoNombre);
      let nuevaEdad: number = readlineSync.questionInt("Ingrese la nueva edad: ");
      mascota.setEdad(nuevaEdad);
      let nuevaEspecie: string = readlineSync.question("Ingrese la nueva especie de la mascota: ");
      mascota.setEspecie(nuevaEspecie);
      console.log(`Mascota modificada `);
    } else {
      console.log("Mascota no encontrada");
    }
  }
  //CONSULTA VETERINARIA
  public consultaVeterinaria(nombre: string): void {
    let cliente = this.clientes.find((clientes) => clientes.getNombre() == nombre);
    if (cliente) {
      cliente.setAcumulVisitas();
      cliente.setVIP();
      console.log("Se agrego una consulta veterinaria al contador");
      console.log(`El cliente ${cliente.getNombre()} tiene ${cliente.getAcumulVisitas()} visitas`);
      console.log("");
    } else {
      console.log("Cliente no encontrado");
      console.log("");
    }
  }
}