import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

import { AuthenticationService } from '../authentication.service';
import { CustomerAddress } from '../customer-address';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  City: any = ['Bangalore','Chennai','Delhi','Kolkatta','Mumbai','Tirupathi','Hyderabad',]
  customer: CustomerAddress = new CustomerAddress();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router:Router,
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      dob: ['',[Validators.required]],
      phoneNo: ['',[Validators.required]],
      accountNo: ['',[Validators.required]],
      street: ['',[Validators.required]],
      city: ['',[Validators.required]],
      pincode: ['',[Validators.required]],
    
    });
  }
get f() { return this.registerForm.controls; }


changeCity(e: | any){
  this.registerForm.get('city').setValue(e.target.value,{
    onlySelf:true
  })
}
  CustomerAddress(): void{
    this.submitted=false;
    this.customer=new CustomerAddress();

  }
  onSubmit(){
    this.submitted=true;
    this.customer=this.registerForm.value;

    if(this.registerForm.invalid) {
      return;
    }
    this.save();
  }
  save(){
    this.authenticationService.saveCustomer(this.customer)
    .subscribe(data => console.log(data), error => console.log(error));
    this.customer=new CustomerAddress();

    this.gotoList();

  
  }
  gotoList(){
    this.router.navigate(['login']);
  }

}
