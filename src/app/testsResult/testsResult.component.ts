import { Component, OnInit } from '@angular/core';
import { BrowserStackService } from '../browserstack.service';

/*
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA2: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

<cdk-virtual-scroll-viewport itemSize="50">
  ...
</cdk-virtual-scroll-viewport>

*/

@Component({
  selector: 'app-testsResult',
  templateUrl: './testsResult.component.html',
  styleUrls: ['./testsResult.component.css']
})
export class TestsResultComponent implements OnInit {
  plan;
  projects;
  tests;
  typesOfShoes: string[] = ['feature-3012-abtest-header-juillet - 2020-07-07_1425', 'Clogs', 'Loafers'];
  selectedOptions = [];
  buildSelected;

  passed = "rgba(116, 211, 123, 1)"
  timeout = "rgba(255, 215, 106, 1)"
  failed = "rgba(253, 115, 91, 1)"
  undefined = "rgba(200, 200, 200, 1)"
  running = "rgba(238, 130, 238, 1)"

  constructor(private bsServ: BrowserStackService) { }

  ngOnInit() {
    let p = this.bsServ.getPlan();

    this.projects = this.bsServ.getProjects();
    this.plan = "Contrat souscrit : " + p.automate_plan 
      + " - Test parallel : " + p.parallel_sessions_running 
      + "/" + p.parallel_sessions_max_allowed
      + " - Test queued : " + p.queued_sessions 
      + "/" + p.queued_sessions_max_allowed;


      /*this.bsServ.getData().subscribe((data) => {
        let persondata = Array.from(Object.keys(data), k=>data[k]);
        console.log(persondata);
     });*/

  }

  getTests(build_id){
    this.tests = this.bsServ.getTests(build_id);
    this.buildSelected = {
      testsList : this.bsServ.getTests(build_id),
      testsStatus : 2
    }

  }

  onNgModelChange(event){
    console.log(event)
    this.getTests(event)
  }

}
