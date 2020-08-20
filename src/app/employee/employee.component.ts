import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title = ' Employees Details';
  searchText;
  result
  
  filtre: string;
  name = 'Angular 6';
  countTask = 0;




  
  candidate_data = [ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": 8/10/2016
},
{"id": 12,"name": "John","department": "HR","joining_date": 18/1/2011},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": 28/11/2019},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": 7/7/2017},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": 19/8/2014},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": 5/10/2014}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": 6/4/2014},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": 8/12/2010}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": 7/5/2011},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": 20/10/2010}];


  
trackElement(index: number, element: any) {
  return element ? element.id : null;
}


 //sorting
 key: string = 'name'; //set default
 reverse: boolean = false;
 sort(key){
   this.key = key;
   this.reverse = !this.reverse;
 }

 //deleting
 remove(index) {
  this.candidate_data.splice(index,1);
  this.countTask = this.candidate_data.length;
 
}
 

  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
