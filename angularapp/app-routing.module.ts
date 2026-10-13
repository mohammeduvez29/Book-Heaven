import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthguardComponent } from './components/authguard/authguard.component';

import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminbookComponent } from './components/adminbook/adminbook.component';
import { AdminviewbookComponent } from './components/adminviewbook/adminviewbook.component';
import { AdminviewappliedrequestComponent } from './components/adminviewappliedrequest/adminviewappliedrequest.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';

import { UsernavComponent } from './components/usernav/usernav.component';
import { UseraddrequestComponent } from './components/useraddrequest/useraddrequest.component';
import { UserviewappliedrequestComponent } from './components/userviewappliedrequest/userviewappliedrequest.component';
import { UserviewbooksComponent } from './components/userviewbooks/userviewbooks.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { BrowsebooksComponent } from './components/browsebooks/browsebooks.component';



const routes: Routes = [

  /* ================================
     PUBLIC ROUTES
  ================================ */

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomePageComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'error',
    component: ErrorComponent
  },

  {
    path: 'browsebooks',
    component: BrowsebooksComponent
  },


  /* ================================
     ADMIN ROUTES
  ================================ */

  {
    path: 'adminnav',
    component: AdminnavComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },


  {
    path: 'admin/home',
    component: AdminhomepageComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'admin/edit-book/:id',
    component: AdminbookComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },
  

  {
    path: 'admin/add-book',
    component: AdminbookComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },

  {
    path: 'admin/view-books',
    component: AdminviewbookComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },

  {
    path: 'admin/rental-requests',
    component: AdminviewappliedrequestComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },

  {
    path: 'admin/feedbacks',
    component: AdminviewfeedbackComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'ADMIN'
    }
  },


  /* ================================
     USER ROUTES
  ================================ */

  {
    path: 'usernav',
    component: UsernavComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },

  {
    path: 'user/home',
    component: UserhomepageComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },
  // {
  //   path: 'user/home',
  //   component: UsernavComponent,
  //   canActivate: [AuthguardComponent],
  //   data: {
  //     role: 'USER'
  //   }
  // },

  {
    path: 'user/books',
    component: UserviewbooksComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },

  {
    path: 'user/my-rentals',
    component: UserviewappliedrequestComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },

  {
    path: 'user/add-request',
    component: UseraddrequestComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },

  {
    path: 'user/add-feedback',
    component: UseraddfeedbackComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },

  {
    path: 'user/my-feedback',
    component: UserviewfeedbackComponent,
    canActivate: [AuthguardComponent],
    data: {
      role: 'USER'
    }
  },


  /* ================================
     UNKNOWN ROUTE
  ================================ */

  {
    path: '**',
    redirectTo: 'error'
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}