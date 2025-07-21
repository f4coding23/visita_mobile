// src/app/material.ts

import { importProvidersFrom } from '@angular/core';

// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

export const MATERIAL_PROVIDERS = [
  importProvidersFrom(MatToolbarModule),
  importProvidersFrom(MatButtonModule),
  importProvidersFrom(MatIconModule),
  importProvidersFrom(MatSidenavModule),
  importProvidersFrom(MatListModule),
  importProvidersFrom(MatCardModule),
  importProvidersFrom(MatInputModule),
  importProvidersFrom(MatFormFieldModule),
  importProvidersFrom(MatTableModule),
  importProvidersFrom(MatPaginatorModule),
  importProvidersFrom(MatSortModule),
  importProvidersFrom(MatDialogModule),
  importProvidersFrom(MatSelectModule),
  importProvidersFrom(MatCheckboxModule),
  importProvidersFrom(MatSnackBarModule),
  importProvidersFrom(MatDatepickerModule),
  importProvidersFrom(MatNativeDateModule),
  importProvidersFrom(MatRadioModule),
  importProvidersFrom(MatMenuModule),
  importProvidersFrom(MatProgressSpinnerModule),
  importProvidersFrom(MatSlideToggleModule),
  importProvidersFrom(MatTooltipModule),
  importProvidersFrom(MatGridListModule),
  importProvidersFrom(MatStepperModule),
  importProvidersFrom(MatTabsModule),
  importProvidersFrom(MatExpansionModule),
];
