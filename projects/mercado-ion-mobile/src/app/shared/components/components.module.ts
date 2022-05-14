import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [
    ImagePickerComponent,
    ListComponent,
    FormComponent
  ],
  exports: [
    ImagePickerComponent,
    ListComponent,
    FormComponent
  ]
})
export class ComponentsModule { }
