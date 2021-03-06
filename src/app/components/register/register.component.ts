import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from  "@angular/router";
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faLock = faLock;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
    .then(res => {
      this.flashMessage.show('You are now registered and logged in', {
        cssClass: 'alert-success mt-3', timeout: 4000
      });
      this.router.navigate(['/'])
    })
    .catch(err => {
      this.flashMessage.show(err.message,{
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }

}
