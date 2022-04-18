import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/content",
    pathMatch:"full",
  },
  {
      path: "content",
      component: ContentListComponent,
  },
  { 
        path: "content/:id", 
          component: ContentDetailsComponent 
  },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
     
  { 
    path: "**", component: PageNotFoundComponent
   }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule { }
