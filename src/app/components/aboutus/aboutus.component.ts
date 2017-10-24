import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  private my_name: string;

  constructor() { }

  ngOnInit() {
    this.my_name ="Wassana  Jaroensilavat";
  }

}
