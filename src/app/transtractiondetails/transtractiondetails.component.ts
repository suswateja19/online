import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Transtraction } from '../transtraction';
import { TranstractionService } from '../transtraction.service';


@Component({
  selector: 'app-transtractiondetails',
  templateUrl: './transtractiondetails.component.html',
  styleUrls: ['./transtractiondetails.component.css']
})
export class TranstractiondetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
