import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentOnpushComponent } from './parent-onpush/parent-onpush.component';
import { ChildDefaultComponent } from './child-default/child-default.component';
import { GrandchildDefaultComponent } from './grandchild-default/grandchild-default.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOnpushComponent,
    ChildDefaultComponent,
    GrandchildDefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
