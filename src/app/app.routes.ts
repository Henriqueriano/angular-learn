import { Routes } from '@angular/router';
import { PageComponent } from '../page/page/page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'page',
        component: PageComponent
    },
    {
        path: '',
        component: AppComponent
    }];
