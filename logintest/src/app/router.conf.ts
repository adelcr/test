import {UIRouter} from "@uirouter/angular";
import {Injector, Injectable} from "@angular/core";
import {homeState, postState, loginState, registerState} from "./states.js";


/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  
  // If no URL matches, go to the `home` state by default
  router.urlService.rules.otherwise({ state: 'home' });
  

}