import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

   title = 'áreas en las que nos especializamos';
   subtitle = 'Nuestros servicios';

  constructor() { }

  ngOnInit(): void {
  }

}
