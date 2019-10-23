import { AuthData } from './auth-data';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UIService } from '../shared/ui.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


@Injectable()

export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthentiacated = false;
    email: string;
    UID: string;

    constructor(private router: Router, private afauth: AngularFireAuth, private uiService: UIService) { }


    initAuthListener() {
        this.afauth.authState.subscribe(user => {
            if (user) {
                this.isAuthentiacated = true;
                this.authChange.next(true);
                this.router.navigate(['/calendar']);
            } else {
                this.authChange.next(false);
                this.router.navigate(['/welcome']);
                this.isAuthentiacated = false;
            }
        });
    }

    registerUser(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);

        this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.authSuccessfully();
                this.uiService.loadingStateChanged.next(false);
            })
            .catch(error => {
                this.uiService.loadingStateChanged.next(false);

                this.uiService.showSnackbar(error.message, null, 3000);
            });
    }

    private authSuccessfully() {
        this.isAuthentiacated = true;
        this.authChange.next(true);
        this.router.navigate(['/profile']);
    }


    signinUser(authData: AuthData) {
        this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(response => {
                this.router.navigate(['/profile']);

                this.email = firebase.auth().currentUser.email;
                this.UID = firebase.auth().currentUser.uid;
                this.authSuccessfully();

                this.uiService.loadingStateChanged.next(false);

            })
            .catch(error => {
                this.uiService.loadingStateChanged.next(false);

                this.uiService.showSnackbar(error.message, null, 3000);
            });
    }

    logout() {
        this.afauth.auth.signOut();
        this.router.navigate(['']);
        this.isAuthentiacated = false;
    }


    isAuth() {
        return this.isAuthentiacated;
    }
}
