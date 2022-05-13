import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucessPageRoutingModule } from './sucess-routing.module';

import { SucessPage } from './sucess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucessPageRoutingModule
  ],
  declarations: [SucessPage]
})
export class SucessPageModule {}
