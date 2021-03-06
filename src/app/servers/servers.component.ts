import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Seletor pelo nome
  //selector: `[app-servers]`, //Seletor por atributo
  //selector: `.app-servers`, //Seletor por classe
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    //Fazendo um cast explicito para o HTMLInputElement
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
