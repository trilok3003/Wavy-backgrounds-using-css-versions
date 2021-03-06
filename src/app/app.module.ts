import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CurveComponent } from './curve/curve.component';
import { BubbleComponent } from './bubble/bubble.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CurveComponent, BubbleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
