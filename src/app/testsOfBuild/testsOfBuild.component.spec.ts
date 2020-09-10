import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsofbuildComponent } from './testsofbuild.component';

describe('TestsofbuildComponent', () => {
  let component: TestsofbuildComponent;
  let fixture: ComponentFixture<TestsofbuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsofbuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsofbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
