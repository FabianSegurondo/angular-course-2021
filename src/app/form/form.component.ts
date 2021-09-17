import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="unvaccinatedForm" style="display: flex; flex-direction: column; padding: 20px; background-color: gray">
      <p>Create/Edit Unvaccinated</p>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" type="text"></mat-form-field>
      <mat-form-field>
        <mat-label>Age</mat-label>
        <input matInput formControlName="age" type="text"></mat-form-field>
      <mat-form-field>
        <mat-label>Disease</mat-label>
        <input matInput formControlName="disease" type="boolean"></mat-form-field>
      <mat-form-field>
        <mat-label>Vaccine Type</mat-label>
        <input matInput formControlName="vaccineType" type="text"></mat-form-field>
      
    </form>
    <button (click)="onSave()">Save</button>
  `,
})
export class FormComponent implements OnInit, OnChanges {
  unvaccinatedForm: FormGroup;
  @Input() values: any = {
    name: '        ',
    age: '        ',
    date: '             ',
    disease: '               ',
    vaccineType: '            ',
    doses: '              ',
  };

  @Output() sentForm = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.unvaccinatedForm = this.formBuilder.group({
      name: this.values.name,
      age: this.values.age,
      date: this.values.date,
      disease: this.values.disease,
      vaccineType: this.values.vaccineType,
      doses: this.values.doses,
    });
  }

  onSave(): void {
    this.sentForm.emit(this.unvaccinatedForm.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.values && this.unvaccinatedForm) {
      this.unvaccinatedForm.patchValue(this.values);
    }
  }
}