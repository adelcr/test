import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PostComponent } from './post/index';
import { AuthGuard } from './_guards/index';
import {Transition} from "@uirouter/angular";

export const homeState = { name: 'home', url: '/',  component: HomeComponent }; 

export const postState = { name: 'post', url: '/post',  component: PostComponent };

export const loginState = { name: 'login', url: '/login',  component: LoginComponent }; 

export const registerState = { name: 'register', url: '/register',  component: RegisterComponent };
