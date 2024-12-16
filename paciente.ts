export class Paciente {
  protected nombre: string;
  protected especie: string;
  protected edad: number;
  protected esExotica: boolean = false;
  protected idPaciente: number = 0;
  constructor(nombre: string, especie: string, edad: number) {
    this.nombre = nombre;
    this.especie = especie;
    this.setEspecie(especie);
    this.edad = edad;
  }
  public getExotica(): boolean {
    return this.esExotica;
  }
  public getIdPaciente():number{
    return this.idPaciente;
  }
  public getNombreMascota(): string {
    return this.nombre;
  }
  public getEspecie(): string {
    return this.especie;
  }
  public setIdPaciente(id:number){
    this.idPaciente = id;
  }
  public getEdad(): number {
    return this.edad;
  }
  public setNombreMascota(nombre: string) {
    this.nombre = nombre;
  }
  public setEspecie(especie: string) {
    this.especie = especie;
    if (especie != "perro" && especie != "gato") {
      this.esExotica = true;
    } else {
      this.esExotica = false;
    }
  }
  public setEdad(edad: number) {
    this.edad = edad;
  }
}