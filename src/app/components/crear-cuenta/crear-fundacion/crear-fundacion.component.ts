import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-fundacion',
  templateUrl: './crear-fundacion.component.html',
  styleUrls: ['./crear-fundacion.component.css']
})
export class CrearFundacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  localidad: any[] = ['1.Usaquén','2.Chapinero','3.Santa Fé','4.San Cristobal',
  '5.Usme', '6. Tunjuelito', '7.Bosa', '8.Kennedy','9.Fontibón','10.Engativá','11.Suba','12.Barrios Unidos',
  '13.Teusaquillo','14.Los Mártires', '15.Antonio Nariño', '16.Puente Aranda', '17.Candelaria',
  '18.Rafael Uribe Uribe','19.Ciudad Bolivar','20.Sumapaz'];
}
