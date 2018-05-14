import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventResolverService } from './event-resolver.service';

const routes: Routes = [
  { path: '', resolve: EventResolverService, component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule { }

// export const routedComponents = [EventComponent];