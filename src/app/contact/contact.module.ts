/** Modules: imports */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
/** Components: declaration */
import { ContactComponent } from './contact.component';
/** Services: providers */
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ ContactComponent ],
  exports: [ ContactComponent ],
  providers: [ ContactService ]
})
export class ContactModule {}