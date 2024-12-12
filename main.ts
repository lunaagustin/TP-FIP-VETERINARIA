import { RedVeterinaria } from "./redVeterinaria";

let redVeterinaria = new RedVeterinaria ("Red 1");
redVeterinaria.menuPrincipal();


//CREO UNA RED VETERINARIAs
//let redVeterinaria = new RedVeterinaria ("Red Veterinaria 1");
//redVeterinaria.getNombre();
//console.log(redVeterinaria);

//CREO VETERINARIAS
//vete1 = new Veterinaria ("Veterinaria Pelicano", "Pringles 3502");
//vete2 = new Veterinaria ("Vete plus", "talcahuano 218"); 

//CREO PROVEEDORES
/// let proveedor1 = new Proveedor ("Hierros gonzalez", 22845754); 
// let proveedor2 = new Proveedor ("Ciuffo", 2254522); 

//CREO CLIENTES
 //let cliente1 = new Cliente ("Agustin", 228456452);
// let cliente2 = new Cliente ("Juana",54545);

//CREO MASCOTAS 
// let mascota1 = new Paciente ("Firulais", "perro", 4); 
//let mascota2 = new Paciente ("Negro", "iguana",22); 
 //let mascota3 = new Paciente ("gina","perro",3);
// let mascota4 = new Paciente ("omar", "loro", 4); 

//DOY DE ALTA DOS VETERINARIAS EN LA RED
 //redVeterinaria.AltaVeterinaria(vete1); 
// redVeterinaria.AltaVeterinaria(vete2); 

//DOY DE ALTA DOS PROVEEDORES EN LA RED
 //redVeterinaria.AltaProveedor(proveedor1);
 //redVeterinaria.AltaProveedor(proveedor2); 

//*********************************************************************************************************************** */

//MUESTRO LAS VETERINARIAS ok
 //redVeterinaria.getVeterinarias(); 

//MUESTRO LOS PROVEEDORES ok
//redVeterinaria.mostrarProveedores(); 

//ELIMINO UNA VETERINARIA ok
//redVeterinaria.BajaVeterinaria("Vete plus"); 
//redVeterinaria.getVeterinarias(); 

//ELIMINO UN PROVEEDOR ok
//redVeterinaria.BajaProveedor("Ciuffo"); 
//redVeterinaria.mostrarProveedores();

//MODIFICO UN PROVEEDOR ok
//redVeterinaria.ModificarProveedor(proveedor1.getId(),"la casa de los hierros");
//redVeterinaria.mostrarProveedores(); 

//MODIFICO UNA VETERINARIA ok
//redVeterinaria.modificarVeterinaria(vete1.getId(),"La iguana"); 
//redVeterinaria.getVeterinarias(); 

//****************************************************************************************************************** */

//AGREGO CLIENTES A VETERINARIA
//vete1.agregarCliente(cliente1);
//vete1.agregarCliente(cliente2);

//AGREGO MASCOTAS A VETERINARIA
//vete1.agregarMascota(mascota1);
//vete1.agregarMascota(mascota2); 
//vete1.agregarMascota(mascota3);
//vete1.agregarMascota(mascota4);

//ASIGNO MASCOTAS A CLIENTE 1
//vete1.asignarPacienteADueño(mascota1,cliente1.getID()); 
//vete1.asignarPacienteADueño(mascota2,cliente1.getID()); 

//ASIGNO MASCOTAS A CLIENTE 2
//vete1.asignarPacienteADueño(mascota3,cliente2.getID());
//vete1.asignarPacienteADueño(mascota4,cliente2.getID());

//MUESTRO MASCOTAS DE CLIENTE 1 Y 2 POR CLIENTE
//console.log(cliente1.muestroMascotasAsignadas()); 
//console.log ("..................."); 
//console.log(cliente2.muestroMascotasAsignadas()); 

//MUESTRO CLIENTES DE VETERINARIA ok
//vete1.muestroClientes(); 

//MUESTRO MASCOTAS DE VETERINARIA ok
//vete1.muestroMascotas(); 

//UTILIZO EL ACUMULADOR DE VISITAS Y LUEGO MUESTRO LAS CANTIDADES DE VISITAS DEL CLIENTE Y LUEGO MUESTRO SI ES VIP
//cliente1.setAcumulVisitas(1); 
//cliente1.verCantVisitas();
//cliente1.setVIP(); //<--MUESTRO SI ES VIP

//MUESTRO TODOS LOS CLIENTES Y SUS MASCOTAS:
//vete1.clienteYmascotas(cliente1); 
//vete1.clienteYmascotas(cliente2); 

//ELIMINO CLIENTE 1
//vete1.muestroClientes(); 
//console.log ("ELIMINO CLIENTE 1 Y MUESTRO"); 
//vete1.bajaCliente(cliente1.getID());
//vete1.muestroClientes();

//MODIFICO CLIENTE 1
//vete1.muestroClientes();
//console.log ("MODIFICO CLIENTE 1 Y MUESTRO");
//vete1.modificarCliente(cliente1.getID(),"Enzo",2236361319); 
//vete1.muestroClientes(); 

//ELIMINO PACIENTE gina
//vete1.muestroMascotas(); 
//console.log ("ELIMINO MASCOTA gina Y MUESTRO"); 
//vete1.bajaMascota("gina"); 
//vete1.muestroMascotas(); 

//MODIFICO PACIENTE omar
//vete1.muestroMascotas();
//console.log("MODIFICO PACIENTE OMAR Y MUESTRO");
//vete1.modificarMascota("omar",6,"gato"); 
//vete1.muestroMascotas(); 


//MUESTRO LOS ID GENERADOS DE FORMA ALEATORIA Y UNICA
//console.log("El id de la veterinaria 1 es: ",vete1.getId()); 
//console.log ("El id de la veterinaria 2 es: ", vete2.getId()); 
