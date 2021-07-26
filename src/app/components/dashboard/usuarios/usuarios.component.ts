import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { noop } from 'rxjs';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from '../../interfaces/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  animales: Animal[] = [];
  displayedColumns: string[] = ['nombreAnimal', 'edad', 'tipo', 'raza','tamano','accion'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private animalService: AnimalService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarAnimales();
  }
  cargarAnimales()
  {
    this.animales = this.animalService.getAnimales();
    this.dataSource = new MatTableDataSource(this.animales);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarAnimal(index: number)
  {
    this.animalService.eliminarAnimal(index);
    this.cargarAnimales();
    this.snackbar.open('Animal eliminado de manera correcta','',
    {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition : 'bottom'
    } )
  }
}
