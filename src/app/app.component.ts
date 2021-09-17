
import { Component } from '@angular/core';
import { VacunadosService} from './servicios/vacunados.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vacunados=[];
  unVacunados=[];
  numVacunados=0;
  numUnvacunados=0;
  
  constructor(private serv:VacunadosService){
  this.vacunados=[]
  this.unVacunados=[]
  this.serv.getAllVac().subscribe(data => this.VacunadosDB(data))
  this.serv.getAllUnvac().subscribe(data => this.UnvacunadosDB(data))
  }

  VacunadosDB(data:any){
    this.vacunados=Object.entries(data);
    this.checkState()
    this.checkAllVac()
  }

  UnvacunadosDB(data:any){
    this.unVacunados=Object.entries(data);
    this.checkState()
    this.checkAllVac()
  }

  checkState(){
    this.numVacunados=0
    this.numUnvacunados=0
    this.numVacunados=this.vacunados.length
    this.numUnvacunados=this.unVacunados.length
  }

  vacunar(id:any){
    var personToBeVaccinated = this.unVacunados.find(person => person[0] === id)
    console.log(personToBeVaccinated)
    console.log(personToBeVaccinated[1]['doses'])
    var currentDoses = personToBeVaccinated[1]['doses']+1
    this.serv.updateVac(id,currentDoses).subscribe(res => console.log(res))

    if(personToBeVaccinated[1]['vaccineType'] === "A" && currentDoses ===1){
      this.serv.createPerson({"name":personToBeVaccinated[1]['name'],"age":personToBeVaccinated[1]['age'],"date":personToBeVaccinated[1]['date'],"disease":personToBeVaccinated[1]['disease'], "vaccineType":personToBeVaccinated[1]['vaccineType'],"vaccined":1,"doses":currentDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }else if(personToBeVaccinated[1]['vaccineType'] === "B"&& currentDoses ===2){
      this.serv.createPerson({"name":personToBeVaccinated[1]['name'],"age":personToBeVaccinated[1]['age'],"date":personToBeVaccinated[1]['date'],"disease":personToBeVaccinated[1]['disease'], "vaccineType":personToBeVaccinated[1]['vaccineType'],"vaccined":1,"doses":currentDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }else if(personToBeVaccinated[1]['vaccineType'] === "C"&& currentDoses ===3){
      this.serv.createPerson({"name":personToBeVaccinated[1]['name'],"age":personToBeVaccinated[1]['age'],"date":personToBeVaccinated[1]['date'],"disease":personToBeVaccinated[1]['disease'], "vaccineType":personToBeVaccinated[1]['vaccineType'],"vaccined":1,"doses":currentDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }
    
    this.vacunados=[]
    this.unVacunados=[]

    this.serv.getAllVac().subscribe(data => this.VacunadosDB(data))
    this.serv.getAllUnvac().subscribe(data => this.UnvacunadosDB(data))
    this.checkAllVac()
    


    window.location.reload();
  }

  checkAllVac():boolean{
    return this.unVacunados.find(person => person[1]['disease'] === false && person[1]['age'] >=18 ) !==undefined
  }


}