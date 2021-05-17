import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<RegisterUserComponent>
    ) { }

    RegistrationForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    

  ngOnInit(): void {
  }

  clearForm(){
    this.RegistrationForm.reset();
  }

  registerUser(formData: User){
    console.log(formData)
    this.userService.register(formData).then(
      (res) => {
        location.reload();
      },
    )
  }
}
