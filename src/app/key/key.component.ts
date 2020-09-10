import { Component, OnInit } from '@angular/core';
import { LtaasService } from '../ltaas.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit{
  displayedColumns: string[] = ['login', 'password', 'key', 'email', 'mailing', 'projet'];
  dataSource;

  constructor(private ltaasServ: LtaasService) { }

  ngOnInit(): void {
    this.dataSource = this.ltaasServ.getAccounts()
  }


}
