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

  public agregarCliente(clientes: Cliente): void {
    this.clientes.push(clientes);
  }

  public mostrarClientes(): void {
    this.clientes.forEach(cliente => { console.log (`Cliente :  ${cliente.getNombre()} - Telefono :  ${cliente.getTelefono()} `)})
   }


  //METODO PARA BUSCAR CLIENTE POR ID
  public buscarClientePorId(id: number) {
   return this.clientes.find((clientes) => clientes.getID() === id);
  }


  //METODO PARA ELIMINAR CLIENTE
  public bajaCliente(nombre:string): void {
    this.clientes = this.clientes.filter((clientes) => clientes.getNombre() !== nombre);
  }

  //METODO PARA MODIFICAR CLIENTE
  public modificarCliente(
    id: number,
    nuevoNombre?: string,
    nuevoTelefono?: number
  ): void {
    const cliente = this.clientes.find(
      (cliente) => cliente.getID() === id
    );
    if (cliente) {
      if (nuevoNombre) cliente.setNombre(nuevoNombre) ;
      if (nuevoTelefono) cliente.setTelefono(nuevoTelefono);
      console.log(`Cliente con id '${id}' modificado`);
    } else {
      console.log(`Cliente con id '${id}' no encontrado`);
    }
  }


  //METODO PARA AGREGAR MASCOTA
  public agregarMascota(mascotas: Paciente): void {
    this.pacientes.push(mascotas);
  }

  //ASIGNAR PACIENTE A DUEÑO
  public asignarPacienteADueño(paciente: Paciente, idDueño: number) {
    let duenio = this.clientes.find(clientes => clientes.getID() === idDueño);
    if (duenio) {
      duenio.adoptarPaciente(paciente);
      paciente.setIdPaciente(idDueño);
    } else {
      console.log('Dueño no encontrado');
    }
  }

  //MOSTRAR CLIENTE Y SUS MASCOTAS
  public clienteYmascotas( cliente: Cliente) {
    console.log ("Cliente : ", cliente.getNombre());
    console.log ("Mascotas: ", cliente.muestroMascotasAsignadas()); 
  }

  //AGREGO METODO PARA MOSTRAR MASCOTAS ....
  public muestroMascotas(): void{
    console.log("Las mascotas son: ", this.pacientes); 
  }


  //METODO PARA ELIMINAR MASCOTA
  public bajaMascota(nomPaciente:string): void{
    this.pacientes = this.pacientes.filter(mascotas => mascotas.getNombreMascota() !== nomPaciente); 
  }

  //METODO PARA MODIFICAR MASCOTA
    public modificarMascota(nombre:string, nuevaEdad?: number, nuevaEspecie?:string):void{
      let mascota = this.pacientes.find(
        (pacientes) => pacientes.getNombreMascota() === nombre);
      if (mascota) {
        if (nuevaEdad) mascota.setEdad (nuevaEdad) ;
        if (nuevaEspecie) mascota.setEspecie(nuevaEspecie);
        console.log(`Paciente con nombre '${nombre}' modificado`);
      } else {
        console.log(`Paciente con nombre '${nombre}}' no encontrado`);
      }
    }


}