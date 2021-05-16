import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  isLoading = true;
  users: User[] = [];
  displayedColumns: string[] = ['id', 'userName', 'email'];
  dataSource = this.users;
  constructor(
    private userService: UserService,  
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (res) => {
        this.isLoading = false;
        this.users = res;
        console.log(this.users);
        this.dataSource = this.users;
      }
    )
  }
  
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(RegisterUserComponent, dialogConfig);
  }

}
