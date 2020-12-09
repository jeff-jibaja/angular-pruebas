import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   estado = false;

  constructor() { }



  showSubmenu(){
    this.estado = !this.estado;
  }
  ngOnInit(): void {
  }
}

