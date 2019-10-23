import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from '../../../../node_modules/rxjs';

import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { AngularFirestore } from '../../../../node_modules/@angular/fire/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  email: string;
  UID: string;
  isLoading = false;
  private loadingSubs: Subscription;

  profileForm: FormGroup;
  FirstName = '';
  LastName = '';
  BusinessName = '';
  Role = '';
  DOB: Date = null;



  constructor(private authService: AuthService, private fb: FormBuilder, public db: AngularFirestore) {
    this.profileForm = fb.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      BusinessName: [null, Validators.required],
      Role: [null, Validators.required],
      DOB: [null, Validators.required],
      UID: [null, Validators.required]
    });

  }

  ngOnInit() {
    console.log('email from auth service', this.authService.email);
    console.log('UID from auth service', this.authService.UID);

    this.email = this.authService.email;
    this.UID = this.authService.UID;

  }

  onFormSubmit(form: NgForm) {
    this.profileForm.patchValue({
      UID: this.UID
    });
    console.log(form);
    console.log(this.profileForm.value);

  }

}
