import { Person } from "./person";

export interface Teacher extends Person {
  title: string;
  gradeLevel: string;
  class: string;
}