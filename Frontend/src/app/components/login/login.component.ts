import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.userService.getCurrentUser != null){      
      this.router.navigate(['/main']);
    }
  }

  clearForm(){
    this.LoginForm.reset();
  }

  login(formData: any){

    this.userService.login(formData).then(
      (res) => {
        localStorage.setItem(
          'currentUser',
          JSON.stringify(res)
        );
        this.router.navigate(['/main']);
      },
      (err) => {
        this.toastrService.error('Insert correct user name and password','Wrong Credentials');
      }
    );

    console.log(this.userService.getCurrentUser());
  }

}
