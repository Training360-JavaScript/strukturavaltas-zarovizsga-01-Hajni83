import { Component, OnInit } from '@angular/core';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'drugstore';

  constructor(
    private drugService:DrugService
  ){}

  ngOnInit(){
   this.drugService.getAll().subscribe((drugs)=>{ console.log(drugs)});
  }
}
