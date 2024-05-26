import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ConverterComponent]
})
export class ConverterModule { }
