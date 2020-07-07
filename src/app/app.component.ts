import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebEmp';
  
  constructor(private router: Router, private service: CrudService) { }
  
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/LoginPath']);
  }
}
