import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [ProfileComponent],
    imports: [SharedModule, AngularFirestoreModule, AngularFireAuthModule],
    exports: []
})

export class ProfileModule { }
