/** Modules: imports */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/** Components: declaration */
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'contact', component: ContactComponent }
  ])],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}