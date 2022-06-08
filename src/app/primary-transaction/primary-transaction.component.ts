import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {

  username:string | any;
	primaryTransactionList: Object[] | any;

	constructor(private route: ActivatedRoute, private userService: UserService) {
		this.route.params.forEach((params: Params) => {
     		this.username = params['username'];
		});
		this.getPrimaryTransactionList();
	}

	ngOnInit() {
   
  }

  
	getPrimaryTransactionList() {
		this.userService.getPrimaryTransactionList(this.username)
    .subscribe((res: any) => {
				console.log(JSON.parse(JSON.stringify(res))._body)
        		this.primaryTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body)
      		},(error: any) => console.log(error)
		)
	}
  

}