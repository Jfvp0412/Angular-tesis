import { Injectable } from '@angular/core';
import { Animal } from '../components/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animales: Animal[] = [
    {nombreAnimal: 'Paca', edad: 11, tipo: 'Gato', raza: 'Carey', tamano: 'Pequeño'},
    {nombreAnimal: 'Milú', edad: 6, tipo: 'Perro', raza: 'Schnauzer', tamano: 'Mediano'},
    {nombreAnimal: 'Aslan', edad: 3, tipo: 'Perro', raza: 'American-Pitubull', tamano: 'Grande'},
    {nombreAnimal: 'Pelusa', edad: 11, tipo: 'Gato', raza: 'Maine-Coon', tamano: 'Pequeño'},
    {nombreAnimal: 'Levy', edad: 4, tipo: 'Gato', raza: 'Criollo', tamano: 'Grande'},
  ];
  constructor() { }
  getAnimales(): Animal[]
  {
    return this.animales;
  }
  getNombre(index: number): string
  {
    return this.animales[index].nombreAnimal;
  }
  eliminarAnimal(index: number)
  {
    this.animales.splice(index,1);
  }
}
