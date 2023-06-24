import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputExamensPageRoutingModule } from './input-examens-routing.module';

import { InputExamensPage } from './input-examens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputExamensPageRoutingModule
  ],
  declarations: [InputExamensPage]
})
export class InputExamensPageModule {}
