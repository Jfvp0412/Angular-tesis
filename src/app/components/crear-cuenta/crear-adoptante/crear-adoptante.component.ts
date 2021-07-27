import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-adoptante',
  templateUrl: './crear-adoptante.component.html',
  styleUrls: ['./crear-adoptante.component.css']
})
export class CrearAdoptanteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  selectedValue: string | undefined;
  selectedCar: string | undefined;

  genero: any[] = ['Masculino','Femenino'];
  localidad: any[] = ['1.Usaquén','2.Chapinero','3.Santa Fé','4.San Cristobal',
  '5.Usme', '6. Tunjuelito', '7.Bosa', '8.Kennedy','9.Fontibón','10.Engativá','11.Suba','12.Barrios Unidos',
  '13.Teusaquillo','14.Los Mártires', '15.Antonio Nariño', '16.Puente Aranda', '17.Candelaria',
  '18.Rafael Uribe Uribe','19.Ciudad Bolivar','20.Sumapaz'];
}
