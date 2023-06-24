import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputExamensPage } from './input-examens.page';

const routes: Routes = [
  {
    path: '',
    component: InputExamensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputExamensPageRoutingModule {}
