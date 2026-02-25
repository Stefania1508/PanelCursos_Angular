import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';
import type { Course, CourseLevel } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private coursesService: CoursesService) {}

  get courses(): Course[] {
    return this.coursesService.getAll();
  }

  onCreateCourse(payload: { name: string; hours: number; level: CourseLevel; active: boolean }) {
    this.coursesService.add(payload);
  }

  onToggleCourse(id: number) {
    this.coursesService.toggleStatus(id);
  }

  onDeleteCourse(id: number) {
    this.coursesService.remove(id);
  }
}