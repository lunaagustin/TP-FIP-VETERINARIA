export class Paciente {
  private nombre: string;
  private especie: string;
  private edad: number;
  protected esExotica: boolean=false;
  constructor(nombre: string, especie: string, edad: number) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;

  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }
  public getEspecie(): string {
    return this.especie;
  }
  public setEspecie(especie: string) {
    this.especie = especie;
    if (especie != "perro" && especie != "gato") {
      this.esExotica = true;
    } else {
      this.esExotica = false;
    }
  }
  public getEdad(): number {
    return this.edad;
  }
  public setEdad(edad: number) {
    this.edad = edad;
  }
}
