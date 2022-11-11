import { Component, OnInit } from '@angular/core';
// import { L } from '@angular/core/src/render3';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { username: '', password: '', remember: false};

  // MatDialogRef<LoginComponent> provide reference to existing Login Form to enable performing of actions
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('User:', this.user);
    this.dialogRef.close();
  }

}
