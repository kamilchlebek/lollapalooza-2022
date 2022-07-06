import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LazyComponent } from './lazy.component'
import { RouterModule } from '@angular/router'
import { LazyService } from './lazy.service'

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LazyComponent,
      },
    ]),
  ],
  providers: [LazyService],
})
export class LazyModule {}
