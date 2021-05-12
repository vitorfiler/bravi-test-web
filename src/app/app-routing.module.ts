import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeViewComponent } from './time-view/time-view.component';


const routes: Routes = [
  {path: '', component: TimeViewComponent},
  {path: '**', component: TimeViewComponent},
  {path: 'Time', component: TimeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
