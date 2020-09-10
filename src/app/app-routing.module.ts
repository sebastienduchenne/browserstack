import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsResultComponent } from './testsResult/testsResult.component';
import { KeyComponent }         from './key/key.component';
import { AskComponent }         from './ask/ask.component';
import { RemoveTestsComponent }      from './removeTests/removeTests.component';

const routes: Routes = [
  { path: '', redirectTo: '/testsResult', pathMatch: 'full' },
  { path: 'testsResult', component: TestsResultComponent },
  { path: 'key', component:KeyComponent},
  { path: 'ask', component:AskComponent},
  { path: 'removeTests', component:RemoveTestsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
