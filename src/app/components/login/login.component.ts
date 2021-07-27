import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  cuentaNueva = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router)
  {
    this.form = this.fb.group ({
      usuario: ['',Validators.required],
      contrasena: ['',Validators.required] //inicia vacio y el espacio es requerido
    })
  }

  ngOnInit(): void {
  }
  ingresar()
  {
    const usuario = this.form.value.usuario;
    const password = this.form.value.contrasena;
    if(usuario == 'FelipeVan' && password == '12345' )
    {
      this.exito(usuario);
    }
    else 
    {
      this.error();
    }
  }
  error()
  {
    this._snackBar.open('Usuario o contraseña inválidos','',
    {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition : 'bottom'
    } )
    this.form.reset();
  }
  exito(usuario: string)
  {
    this._snackBar.open('Bienvenido ' + usuario,'',
    {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition : 'bottom'
    } )
    this.loading = true;
    setTimeout(() => 
    {
      this.router.navigate(['dashboard']);
    },1500)
  }
  crearCuenta()
  {
    this.cuentaNueva = true
    this.router.navigate(['crear-cuenta']);
  }
}
