import { UserService } from './app/services/user.service';
import { User } from './app/models/user.model';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
    currentUser: User;

    constructor(private authService: UserService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        this.currentUser = this.authService.getCurrentUser();
        console.log('Route guard started');
        console.log(this.currentUser);
        if (this.currentUser === null) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }

}