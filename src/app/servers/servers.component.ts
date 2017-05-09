import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Seletor pelo nome
  //selector: `[app-servers]`, //Seletor por atributo
  //selector: `.app-servers`, //Seletor por classe
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
