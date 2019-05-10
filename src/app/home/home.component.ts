import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { SformComponent } from '../sform/sform.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { StudentComponent } from '../student/student.component';

export const childRoutes: Routes = [
  { path: '', redirectTo: 'stable', pathMatch: 'full' },
  { path: 'select', component: SformComponent },
  { path: 'stable', component: StudentComponent },
  { path: 'exit', component: LoginFormComponent }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuindex = 2;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  menu(index) {
    this.menuindex = index;
    if (this.menuindex == 1) {
      this.router.navigate(['/home/select']);
    }
    if (this.menuindex == 2) {
      this.router.navigate(['/home/stable']);
    }
    if (this.menuindex == 3) {
      this.router.navigate(['/Login']);
    }
  }

}
