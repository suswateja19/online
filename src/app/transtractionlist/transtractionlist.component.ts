import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Transtraction } from '../transtraction';
import { TranstractionService } from '../transtraction.service';
@Component({
  selector: 'app-transtractionlist',
  templateUrl: './transtractionlist.component.html',
  styleUrls: ['./transtractionlist.component.css']
})
export class TranstractionlistComponent implements OnInit {


  transtractions: Observable<Transtraction[]> | any;
  constructor(private transtractionService: TranstractionService, 
    private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.transtractions = this.transtractionService.getTranstractionList();
  }

  transtractionDetails(transtractionId:number){
    this.router.navigate(['details',transtractionId])
  }

}
