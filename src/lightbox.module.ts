import { Lightbox } from './lightbox.service';
import { LightboxComponent } from './lightbox.component';
import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, LightboxWindowRef } from './lightbox-event.service';
import { LightboxOverlayComponent } from './lightbox-overlay.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ LightboxOverlayComponent, LightboxComponent ],
  imports: [ CommonModule ],
  providers: [
    Lightbox,
    LightboxConfig,
    LightboxEvent,
    LightboxWindowRef
  ],
  entryComponents: [ LightboxOverlayComponent, LightboxComponent ]
})
export class LightboxModule { }
