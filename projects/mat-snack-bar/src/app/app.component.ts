import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar) {
    this.snackBar.open('Testing', 'close');
  }
}