import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  transactions: Observable<Transaction[]> | any;

  id:number = 0;
  
  transaction:Transaction | any;
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private transactionService:TransactionService
  ) { }

  ngOnInit(): void {

   this.reLoadData();
  }
    
 

  list(){

    this.router.navigate(['transactions']);

  }

  reLoadData(){
    this.transaction =new Transaction();
    this.id=this.route.snapshot.params['id'];

    this.transactionService.getTransaction(this.id)
    .subscribe(data=>{
      console.log(data)
      this.transaction=data;

    },error=>console.log(error));

  
  }



  
  TransactionDetails(id:number){
    this.router.navigate(['details',id]);
  }


}
