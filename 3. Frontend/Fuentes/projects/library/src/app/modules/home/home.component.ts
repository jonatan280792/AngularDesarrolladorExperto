import {
  Component,
  OnInit
} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '@app/library/services/library-services';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  encapsulation: ViewEncapsulation.None,
})
export class PageHomeComponent implements OnInit {
  public formSearch: FormGroup;
  myControl = new FormControl();
  options: string[] = ['Bogota D.C.', 'Calí', 'Medellin'];
  filteredOptions: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private libraryService: LibraryService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.formSearch = this.fb.group({
      ubicacion: [null, Validators.required],
      llegada: [null, Validators.required],
      salida: [null, Validators.required],
      pasajeros: [null, Validators.required]
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    const dataRegister = this.formSearch.getRawValue();

    const data = {
      ubicacion: dataRegister.ubicacion,
      llegada: dataRegister.llegada,
      salida: dataRegister.salida,
      pasajeros: dataRegister.pasajeros
    }

    this.libraryService.setReservas(data).subscribe(responseReserva => {
      if (responseReserva.status === 'Ok') {
        this.formSearch.reset();
      }
      this.snackBarService.showSnackBar(responseReserva.message, 'Cerrar', responseReserva.status === 'Ok' ? 3000 : 5000);
    });
  }
}
