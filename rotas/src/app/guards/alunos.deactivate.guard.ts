import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable()
  export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(component: IFormCanDeactivate, 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) : Observable<boolean> | boolean{

          return component.podeDesativar();
    }
  
    
}