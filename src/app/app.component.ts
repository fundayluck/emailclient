import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  signedIn$!: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.signedIn$ = this.authService.signedIn$;
    console.log(this.signedIn$.getValue());
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe((value) => {
      if (value?.authenticated) {
        this.router.navigateByUrl('/inbox');
        return;
      }
    });
  }
}
