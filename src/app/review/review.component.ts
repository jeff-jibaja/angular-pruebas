import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  title = 'Nuestros clientes opinan';
   subtitle = 'Lo que nuestros clientes opinan';

  constructor() { }

  ngOnInit(): void {
  }

}
