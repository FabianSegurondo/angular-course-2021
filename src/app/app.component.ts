import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoVacunadosService } from './core/services/no-vacunados.service';
import { VacunadosService } from './core/services/vacunados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addMode = true;
  idEdit: any;

  formValues: any = {
    name: '',
    age: '',
    date: '',
    disease: '',
    vaccineType: '',
    doses: '',
  };

  vacunados: any[] = [];
  noVacunados: any[] = [];

  constructor(
    private noVacunadosService: NoVacunadosService,
    private vacunadosService: VacunadosService
  ) {}

  ngOnInit() {
    this.loadVaccinated();
    this.loadNotVaccinated();
  }

  loadVaccinated() {
    this.vacunados = [];

    this.vacunadosService.getAll().subscribe(
      (res) =>
        (this.vacunados = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
  }

  loadNotVaccinated() {
    this.noVacunados = [];

    this.noVacunadosService.getAll().subscribe(
      (res) =>
        (this.noVacunados = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
  }

  todosEstanVacunados(): boolean {
    const aux = this.noVacunados.filter(
      (t) => (t.disease === false || t.disease === 'false') && t.age >= 12
    );
    return aux.length === 0;
  }

  totalDeVacunas(type: number) {
    if (type === 0) {
      return this.vacunados.length;
    } else {
      return this.noVacunados.length;
    }
  }

  vaccine(persona: any): void {
    const vaccinatedAux = this.noVacunados.find((x) => x.name === persona.name);

    console.log('Before: ', vaccinatedAux.doses);

    vaccinatedAux[persona.doses] = persona.doses++;

    this.noVacunadosService
      .patchNoVacunados(vaccinatedAux.id, vaccinatedAux)
      .subscribe((res) => this.loadNotVaccinated());

    const tipoDeVacuna: string = persona.vaccineType;
    console.log(persona.vaccineType);
    console.log('After ', vaccinatedAux.doses);
    console.log('Id', vaccinatedAux.id);

    if (tipoDeVacuna === 'A') {
      this.createVaccinated(persona);
      this.deletingVaccinated(vaccinatedAux.id);
    }

    if (tipoDeVacuna === 'B' && vaccinatedAux.doses >= 2) {
      this.createVaccinated(persona);
      this.deletingVaccinated(vaccinatedAux.id);
    }

    if (tipoDeVacuna === 'C' && vaccinatedAux.doses >= 3) {
      this.createVaccinated(persona);
      this.deletingVaccinated(vaccinatedAux.id);
    }
  }

  createVaccinated(person: any) {
    this.vacunadosService
      .postVacunados({
        name: person.name,
        age: person.age,
        date: person.date,
        vaccined: 1,
      })
      .subscribe((res) => this.loadVaccinated());
  }

  deletingVaccinated(id: string) {
    this.noVacunadosService
      .deleteNoVacunados(id)
      .subscribe((res) => this.loadNotVaccinated());
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.formValues = product;
  }

  onSave(data): void {
    if (this.addMode) {
      this.noVacunadosService
        .postNoVacunados({
          name: data.name,
          age: data.age,
          date: new Date(),
          disease: data.disease,
          vaccineType: data.vaccineType,
          vaccined: 0,
          doses: 0,
        })
        .subscribe(() => this.loadNotVaccinated());
    } else {
      this.noVacunadosService
        .patchNoVacunados(this.idEdit, data)
        .subscribe(() => this.loadNotVaccinated);
    }
  }
}