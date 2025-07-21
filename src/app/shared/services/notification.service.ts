/**
 * Servicio de Notificaciones
 * Maneja todas las notificaciones de la aplicación usando NgToastify
 *
 * @description Servicio centralizado para mostrar notificaciones en toda la aplicación
 * @author ACVISITA Team
 * @version 1.0.0
 * @since Angular 19
 */

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface NotificationOptions {
  title?: string;
  message: string;
  timeOut?: number;
  closeButton?: boolean;
  progressBar?: boolean;
  positionClass?: 'toast-top-right' | 'toast-top-left' | 'toast-bottom-right' | 'toast-bottom-left' | 'toast-top-center' | 'toast-bottom-center';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

  // ===== MÉTODOS PRINCIPALES =====

  /**
   * Muestra una notificación de éxito
   * @param options Configuración de la notificación
   */
  success(options: NotificationOptions): void {
    this.toastr.success(
      options.message,
      options.title || 'Éxito',
      this.getToastrConfig(options)
    );
  }

  /**
   * Muestra una notificación de error
   * @param options Configuración de la notificación
   */
  error(options: NotificationOptions): void {
    this.toastr.error(
      options.message,
      options.title || 'Error',
      this.getToastrConfig(options)
    );
  }

  /**
   * Muestra una notificación de advertencia
   * @param options Configuración de la notificación
   */
  warning(options: NotificationOptions): void {
    this.toastr.warning(
      options.message,
      options.title || 'Atención',
      this.getToastrConfig(options)
    );
  }

  /**
   * Muestra una notificación de información
   * @param options Configuración de la notificación
   */
  info(options: NotificationOptions): void {
    this.toastr.info(
      options.message,
      options.title || 'Información',
      this.getToastrConfig(options)
    );
  }

  /**
   * Limpia todas las notificaciones activas
   */
  clear(): void {
    this.toastr.clear();
  }

  // ===== MÉTODOS DE CONVENIENCIA =====

  /**
   * Notificación rápida de éxito
   * @param message Mensaje a mostrar
   */
  quickSuccess(message: string): void {
    this.success({ message });
  }

  /**
   * Notificación rápida de error
   * @param message Mensaje a mostrar
   */
  quickError(message: string): void {
    this.error({ message });
  }

  /**
   * Notificación rápida de advertencia
   * @param message Mensaje a mostrar
   */
  quickWarning(message: string): void {
    this.warning({ message });
  }

  /**
   * Notificación rápida de información
   * @param message Mensaje a mostrar
   */
  quickInfo(message: string): void {
    this.info({ message });
  }

  // ===== MÉTODOS ESPECÍFICOS PARA AUTENTICACIÓN =====

  /**
   * Notificación de login exitoso
   * @param username Nombre del usuario (opcional)
   */
  loginSuccess(username: string = ''): void {
    this.success({
      title: '¡Bienvenido a ACVISITA!',
      message: username ?
        `Hola ${username}, has iniciado sesión correctamente` :
        'Has iniciado sesión correctamente. Redirigiendo...',
      timeOut: 3000
    });
  }

  /**
   * Notificación de error en credenciales
   */
  loginError(): void {
    this.error({
      title: 'Error de Acceso',
      message: 'Usuario o contraseña incorrectos. Verifica tus datos e intenta nuevamente.',
      timeOut: 6000
    });
  }

  /**
   * Notificación de campos requeridos
   */
  requiredFields(): void {
    this.warning({
      title: 'Campos Requeridos',
      message: 'Por favor completa todos los campos obligatorios para continuar',
      timeOut: 4000
    });
  }

  /**
   * Notificación de reCAPTCHA requerido
   */
  recaptchaRequired(): void {
    this.warning({
      title: 'Verificación Requerida',
      message: 'Por favor marca la casilla "No soy un robot" para continuar',
      timeOut: 4000
    });
  }

  /**
   * Notificación de sesión expirada
   */
  sessionExpired(): void {
    this.warning({
      title: 'Sesión Expirada',
      message: 'Tu sesión ha expirado. Por favor inicia sesión nuevamente.',
      timeOut: 5000
    });
  }

  /**
   * Notificación de logout exitoso
   */
  logoutSuccess(): void {
    this.info({
      title: 'Sesión Cerrada',
      message: 'Has cerrado sesión correctamente. ¡Hasta pronto!',
      timeOut: 3000
    });
  }

  // ===== MÉTODOS PARA OPERACIONES CRUD =====

  /**
   * Notificación de guardado exitoso
   * @param entity Nombre de la entidad guardada
   */
  saveSuccess(entity: string = 'registro'): void {
    this.success({
      title: 'Guardado Exitoso',
      message: `El ${entity} se ha guardado correctamente`,
      timeOut: 3000
    });
  }

  /**
   * Notificación de eliminación exitosa
   * @param entity Nombre de la entidad eliminada
   */
  deleteSuccess(entity: string = 'registro'): void {
    this.success({
      title: 'Eliminado Exitoso',
      message: `El ${entity} se ha eliminado correctamente`,
      timeOut: 3000
    });
  }

  /**
   * Notificación de error de conexión
   */
  connectionError(): void {
    this.error({
      title: 'Error de Conexión',
      message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
      timeOut: 7000
    });
  }

  // ===== CONFIGURACIÓN PRIVADA =====

  /**
   * Configuración personalizada para cada toast
   * @param options Opciones de la notificación
   * @returns Configuración de Toastr
   */
  private getToastrConfig(options: NotificationOptions) {
    return {
      timeOut: options.timeOut || 5000,
      closeButton: options.closeButton !== undefined ? options.closeButton : true,
      progressBar: options.progressBar !== undefined ? options.progressBar : true,
      positionClass: options.positionClass || 'toast-top-right',
      toastClass: 'ngx-toastr custom-toast',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      enableHtml: true,
      tapToDismiss: true,
      disableTimeOut: false,
      extendedTimeOut: 2000,
    };
  }
}
