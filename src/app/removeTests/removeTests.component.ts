import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-removeTests',
  templateUrl: './removeTests.component.html',
  styleUrls: ['./removeTests.component.css']
})
export class RemoveTestsComponent implements OnInit{

  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }
}
