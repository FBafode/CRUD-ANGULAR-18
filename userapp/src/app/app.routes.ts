import { Routes } from '@angular/router';
import { UserListComponent } from './components/userList/user-list/user-list.component';
import { UserFormComponent } from './components/userForm/user-form/user-form.component';


export const routes: Routes = [

    { path: 'users', component: UserListComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
   
];
