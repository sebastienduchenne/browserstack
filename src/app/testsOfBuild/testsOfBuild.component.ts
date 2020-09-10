import { Component, OnInit, Input } from '@angular/core';
import { BrowserStackService } from '../browserstack.service';

@Component({
  selector: 'app-testsOfBuild',
  templateUrl: './testsOfBuild.component.html',
  styleUrls: ['./testsOfBuild.component.css']
})
export class TestsOfBuildComponent implements OnInit {
  displayedColumns: string[] = ['name', 'statut', 'os', 'browser', 'date', 'video', 'details'];
  @Input() dataSource;
  buildId;
  tests;
  numberOfTestsByStatus;

  selectedOS = "tous";
  selectedBrowser = "tous";
  selectedStatus = "tous";

  os = [
    {value: 'tous', viewValue: 'Tous'},
    {value: 'windows', viewValue: 'Windows'},
    {value: 'mac', viewValue: 'Mac OS'},
  ];

  browsers = [
    {value: 'tous', viewValue: 'Tous'},
    {value: 'chrome', viewValue: 'Chrome'},
    {value: 'firefox', viewValue: 'Firefox'},
    {value: 'edge', viewValue: 'Edge'}
  ];

  status = [
    {value: 'tous', viewValue: 'Tous'},
    {value: 'passed', viewValue: 'Réussi'},
    {value: 'fail', viewValue: 'Erreur'},
    {value: 'timeout', viewValue: 'Timeout'},
    {value: 'undefined', viewValue: 'Non défini'}
  ];

  color = {
    passed : "rgba(116, 211, 123, 1)",
    timeout : "rgba(255, 215, 106, 1)",
    failed : "rgba(253, 115, 91, 1)",
    undefined : "rgba(200, 200, 200, 1)"
  }


  pieChart = {
    labels:  ['OK', 'Erreur', 'Timeout', 'Non défini'],
    data: [120, 150, 180, 90],
    type: 'pie',
    color: [
      { 
        backgroundColor: [
          this.color.passed,
          this.color.timeout,
          this.color.failed,
          this.color.undefined
        ]
      },
    ]
  }

  lineChart = {
    labels:  ['OK', 'Erreur', 'Timeout', 'Non défini'],
    data: [
      [10, 15, 18, 10],
      [20, 30, 28, 30],
      [100, 75, 48, 40],
      [120, 150, 180, 90]
    ],
    type: 'line',
    color: [
      { backgroundColor: this.color.passed},
      { backgroundColor: this.color.timeout},
      { backgroundColor: this.color.failed},
      { backgroundColor: this.color.undefined},
    ]
  }

  constructor(private bsServ: BrowserStackService) { }

  ngOnInit(): void {
    this.tests = this.bsServ.getTests(this.buildId);
    //this.numberOfTestsByStatus = th


  }

  OSFilter(){
    console.log("OSFilter"+this.selectedOS);

  }

  BrowsersFilter(){
    console.log("BrowsersFilter"+this.selectedBrowser);

  }

  StatusFilter(){
    console.log("StatusFilter"+this.selectedStatus);

  }
}
