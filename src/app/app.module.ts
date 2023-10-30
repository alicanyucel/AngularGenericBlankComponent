import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlankComponent } from './common/blank/blank.component';
import { SectionComponent } from './common/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LayoutsComponent,
    CommonComponent,
    BlankComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LayoutsComponent,
        children: [
          {
            path: "",
            component: HomeComponent
          },
          {
            path: "about",
            component: AboutComponent
          }
        ]
      }
    ]),
    AppRoutingModule,
    FormsModule
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
