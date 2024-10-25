import { NgModule } from '@angular/core';
import {CardComponent} from "./card/card.component";

@NgModule({
  declarations: [CardComponent],
  // Only exported components will be available to use in an outside
  exports: [CardComponent]
})

export class SharedModule {}
