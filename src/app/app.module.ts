import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANTE

import { AppComponent } from './app.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    CourseListComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
