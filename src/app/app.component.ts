import { Component } from '@angular/core';
import { MatDialog, MatDialogContent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
  constructor (public dialog: MatDialog) {}

    openDialog() {
      const dialogRef = this.dialog.open(AppComponent, {
        height: '350px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Resultado: ${result}');
      });
    }
  }
