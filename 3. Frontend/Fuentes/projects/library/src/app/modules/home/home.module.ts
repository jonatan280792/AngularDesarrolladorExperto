import { NgModule } from '@angular/core';
import { PageHomeComponent } from './home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
// import { ChartsModule, ThemeService } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home.routing';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';
import { LibraryService } from '@app/library/services/library-services';
import { ServiceUtils } from '@services/services-utils';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  exports: [PageHomeComponent],
  imports: [
    CommonModule,
    HomeRouting,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatNativeDateModule,
    // ChartsModule,
    RouterModule,
  ],
  providers: [
    LibraryService,
    ServiceUtils,
    SnackBarService
  ],
})
export class HomeModule {}
