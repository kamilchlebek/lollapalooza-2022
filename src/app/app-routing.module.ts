import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lazy',
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-route/lazy.module').then((m) => m.LazyModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
