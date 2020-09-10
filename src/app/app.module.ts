import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { MatTableModule }       from '@angular/material/table';
import { MatTabsModule }        from '@angular/material/tabs';
import { MatListModule }        from '@angular/material/list';
import { MatSelectModule }      from '@angular/material/select';
import { MatFormFieldModule }   from '@angular/material/form-field';
import {ScrollingModule}        from '@angular/cdk/scrolling';

import { AppRoutingModule }     from './app-routing.module';
import { BrowserStackService }  from './browserstack.service';

import { AppComponent }         from './app.component';
import { TestsResultComponent }       from './testsResult/testsResult.component';
import { KeyComponent }         from './key/key.component';
import { AskComponent }         from './ask/ask.component';
import { RemoveTestsComponent }      from './removeTests/removeTests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule }         from 'ng2-charts';
import { FormsModule }          from '@angular/forms';
import { TestsOfBuildComponent } from './testsOfBuild/testsOfBuild.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    ChartsModule,
    FormsModule,
    ScrollingModule
  ],
  declarations: [
    AppComponent,
    TestsResultComponent,
    AskComponent,
    RemoveTestsComponent,
    KeyComponent,
    TestsOfBuildComponent
  ],
  providers: [ BrowserStackService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
