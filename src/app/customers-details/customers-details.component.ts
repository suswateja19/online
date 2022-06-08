import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Customer } from '../customer';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {

  customers: Observable<Customer[]> | any;

  email:String | any;

  customer:Customer | any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private authenticationService:AuthenticationService,
  ) { }


  ngOnInit(): void {
this.customer=new Customer();

this.email=this.route.snapshot.params['email'];

alert(this.email);
    this.authenticationService.getCustomer(this.email)
    .subscribe(data=>{
      console.log(data)
      this.customer=data;
    },error=>console.log(error));
  }

  list(){
    this.router.navigate(['customers']);
  }

  
  CustomerDetails(email:string){
    this.router.navigate(['cdetails/:email']);
  }

}
