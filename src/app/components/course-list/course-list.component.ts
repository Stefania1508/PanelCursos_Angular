import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];

  @Output() toggleRequested = new EventEmitter<number>();
  @Output() deleteRequested = new EventEmitter<number>();

  toggle(id: number) {
    this.toggleRequested.emit(id);
  }

  remove(id: number) {
    this.deleteRequested.emit(id);
  }
}