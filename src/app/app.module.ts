import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDefaultComponent } from './child-default/child-default.component';
import { GrandchildDefaultComponent } from './grandchild-default/grandchild-default.component';
import { ParentOnpushComponent } from './parent-onpush/parent-onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOnpushComponent,
    ChildDefaultComponent,
    GrandchildDefaultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
