import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estado = false;
  estadoMenuTop = false;
  estadoList = false;

  constructor() { }

  showMenu(): void {
    this.estadoList = !this.estadoList;
    console.log("clic");
  }

  showMenuTop(): void {
    this.estadoMenuTop = !this.estadoMenuTop;
  }

  showSubmenu(): void {
    this.estado = !this.estado;
  }

  ngOnInit(): void {
  }

}
