import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule],
  })
  export class MaterialModule { }