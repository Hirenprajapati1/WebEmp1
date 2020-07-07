// import { login } from './../../employee';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userName:string;
  password:string;
  formModel = {
    userName: '',
    password: ''
  }

  
  // log1: login =new login();
  // message: any;

  constructor(private toastr:ToastrService,private route: ActivatedRoute,private router: Router,
    private service:CrudService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
    this.router.navigate(["/HomepagePath"]);    
    // this.gotoList();
  }
 
  onSubmit(form: NgForm) {
    this.service.AdminLogin(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success("login Successfully");
        this.router.navigate(["/HomepagePath"]);    
        // this.gotoList();
        // this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          this.toastr.error('error');
          console.log(err);
      }
    );
  }

//   public LoginNow(){
//     let resp=this.service.AdminLogin(this.log1)
//      resp.subscribe((data)=>{(this.message=data)
      
// if(this.message == null)
// {
//   this.toastr.error("Username or Password is incorrect");
// }
// else{
//   this.toastr.success("login Successfully");
//   this.gotoList();
// }
// });
// }

gotoList() {
 this.router.navigate(["/HomepagePath"]);    
}

}
