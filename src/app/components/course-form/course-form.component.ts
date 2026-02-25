import { Component, EventEmitter, Output } from '@angular/core';
import type { CourseLevel } from '../../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  @Output() courseCreated = new EventEmitter<{
    name: string;
    hours: number;
    level: CourseLevel;
    active: boolean;
  }>();

  name = '';
  hours: number | null = null;
  level: CourseLevel | '' = '';
  active = true;

  touched = false;

  levels: CourseLevel[] = ['Básico', 'Intermedio', 'Avanzado'];

  get nameInvalid() {
    return this.touched && this.name.trim().length === 0;
  }

  get hoursInvalid() {
    return this.touched && (this.hours === null || this.hours <= 0);
  }

  get levelInvalid() {
    return this.touched && this.level === '';
  }

  submit() {
    this.touched = true;

    if (this.name.trim() === '') return;
    if (this.hours === null || this.hours <= 0) return;
    if (this.level === '') return;

    this.courseCreated.emit({
      name: this.name.trim(),
      hours: this.hours,
      level: this.level,
      active: this.active,
    });

    this.name = '';
    this.hours = null;
    this.level = '';
    this.active = true;
    this.touched = false;
  }
}