import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [{
      path: 'forYou',
      loadChildren: () => import('../screens/home/home.module').then( m => m.HomePageModule)
    },
   {
      path: 'category',
      loadChildren: () => import('../screens/category/category.module').then( m => m.CategoryPageModule)
    },
   {
      path: 'library',
      loadChildren: () => import('../screens/home/home.module').then( m => m.HomePageModule)
    },

  ]
  },
  {
    path: '',
    redirectTo: '/tabs/forYou',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
