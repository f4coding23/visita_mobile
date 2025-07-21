import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Servicios
import { ToastrService } from 'ngx-toastr';

// Interfaces
interface LoginCredentials {
  username: string;
  password: string;
  recaptcha: boolean;
}

interface ValidCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  hidePassword = true;

  private validCredentials = {
    username: 'admin',
    password: '123456'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      recaptcha: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.loginForm.valid) {
      this.toastr.warning('Por favor completa todos los campos requeridos', 'Campos Requeridos');
      return;
    }

    const { username, password, recaptcha } = this.loginForm.value;

    if (!recaptcha) {
      this.toastr.warning('Por favor marca la casilla "No soy un robot"', 'Verificación Requerida');
      return;
    }

    if (username !== this.validCredentials.username || password !== this.validCredentials.password) {
      this.toastr.error('Usuario o contraseña incorrectos. Intenta nuevamente.', 'Error de Acceso');
      return;
    }

    // this.toastr.success('¡Bienvenido! Iniciando sesión correctamente...', '¡Éxito!');

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1500);
  }

  ngOnDestroy(): void {}
}
