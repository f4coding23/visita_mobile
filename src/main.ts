import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr({
      // Configuración básica
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,

      // Configuración avanzada para diseño moderno
      progressBar: true,
      progressAnimation: 'increasing',
      newestOnTop: true,
      enableHtml: true,
      closeButton: true,
      tapToDismiss: true,
      maxOpened: 3,
      extendedTimeOut: 2000,

      // Clases CSS personalizadas
      toastClass: 'ngx-toastr modern-toast',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
    })
  ]
}).catch(err => console.error(err));
