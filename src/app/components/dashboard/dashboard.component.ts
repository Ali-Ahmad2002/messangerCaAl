import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddChannelComponent } from 'src/app/add-channel/add-channel.component';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public dialog: MatDialog
    ) {}
  ngOnInit(): void {}


  
  openDialog() {
    this.dialog.open(AddChannelComponent);
  }
}