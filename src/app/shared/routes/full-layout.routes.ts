import { Routes } from '@angular/router';
import { AccountComponent } from 'src/app/account/account.component';
import { BillsComponent } from 'src/app/bills/bills.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SupportComponent } from 'src/app/support/support.component';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'support',
        component: SupportComponent

    },
    {
        path: 'bills',
        component:  BillsComponent
    },

    {
        path: 'account',
        component:  AccountComponent

    },
    // {
    //     path: 'login',
    //     component:  LoginComponent

    // },
    // {
    //     path: 'form',
    //     loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    // },
    // {
    //     path: 'calendar',
    //     loadChildren: () => import('../../fullcalendar/fullcalendar.module').then(m => m.FullcalendarModule)

    // },
    // {
    //     path: 'table',
    //     loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)

    // },
    // {
    //     path: 'datatable',
    //     loadChildren: () => import('../../datatable/datatable.module').then(m => m.DatatableModule)

    // },
    // {
    //     path: 'ui-icons',
    //     loadChildren: () => import('../../ui-icons/ui-icons.module').then(m => m.UiIconsModule)

    // },
    // {
    //     path: 'maps',
    //     loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)

    // },
    // {
    //     path: 'pages',
    //     loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)

    // }
];
