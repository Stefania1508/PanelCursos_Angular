import { Injectable } from '@angular/core';
import type { Course, CourseLevel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private nextId = 1;

  private courses: Course[] = [];
  
  getAll(): Course[] {
    return this.courses;
  }

  add(payload: { name: string; hours: number; level: CourseLevel; active: boolean }) {
    const course: Course = {
      id: this.nextId++,
      name: payload.name.trim(),
      hours: payload.hours,
      level: payload.level,
      active: payload.active
    };
    this.courses = [course, ...this.courses];
  }

  toggleStatus(id: number) {
    this.courses = this.courses.map(c => c.id === id ? { ...c, active: !c.active } : c);
  }

  remove(id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
  }
}