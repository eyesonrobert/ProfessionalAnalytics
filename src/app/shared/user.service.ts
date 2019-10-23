import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private dbPath = '/users';

    usersRef: AngularFireList<User> = null;

    constructor(private db: AngularFireDatabase) {
        this.usersRef = db.list(this.dbPath);
    }

    createUser(customer: User): void {
        this.usersRef.push(customer);
    }

    updateUser(key: string, value: any): Promise<void> {
        return this.usersRef.update(key, value);
    }

    deleteUser(key: string): Promise<void> {
        return this.usersRef.remove(key);
    }

    getUsersList(): AngularFireList<User> {
        return this.usersRef;
    }

    deleteAll(): Promise<void> {
        return this.usersRef.remove();
    }
}
