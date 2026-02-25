export type CourseLevel = 'Básico' | 'Intermedio' | 'Avanzado';

export interface Course {
  id: number;
  name: string;
  hours: number;
  level: CourseLevel;
  active: boolean;
}