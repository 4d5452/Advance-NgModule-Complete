/** Modules: imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisRoutingModule } from './crisis-routing.module';
/** Components: declarations */
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';
/** Services: providers */
import { CrisisService } from './crisis.service';

@NgModule({
  imports: [
    CommonModule,
    CrisisRoutingModule
  ],
  exports: [],
  declarations: [
    CrisisDetailComponent,
    CrisisListComponent
  ],
  providers: [ CrisisService ]
})
export class CrisisModule {}