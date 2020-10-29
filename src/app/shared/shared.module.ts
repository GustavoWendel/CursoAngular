import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent,
            FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
