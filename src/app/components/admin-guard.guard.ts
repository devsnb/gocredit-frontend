import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard
  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad
{
  data: any;
  result!: boolean;

  constructor(private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.authService.getLoggedInUser().subscribe((user) => {
      console.log(user?.role);
      console.log(Role.USER);

      if (!user) {
        this.result = false;
        return;
      }
      this.result = user?.role == Role.ADMIN ? true : false;
    });
    console.log(this.result);
    return this.result;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
