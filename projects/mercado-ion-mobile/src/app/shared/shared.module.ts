import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './components/components.module';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { StickySegmentDirective } from './directives/sticky-segment.directive';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    HideHeaderDirective,
    StickySegmentDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    ComponentsModule,
    MaterialModule
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SahredModule { }
