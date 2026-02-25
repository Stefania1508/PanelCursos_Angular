import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course!: Course;

  @Output() toggleRequested = new EventEmitter<number>();
  @Output() deleteRequested = new EventEmitter<number>();

  toggle() {
    this.toggleRequested.emit(this.course.id);
  }

  remove() {
    this.deleteRequested.emit(this.course.id);
  }
}