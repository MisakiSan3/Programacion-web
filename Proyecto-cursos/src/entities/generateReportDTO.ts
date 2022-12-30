import { Activitie } from "./activities";
import { Course } from "./course";
import { GradeBookSetup } from "./gradeBookSetup";
import { Student } from "./student";
import { GradesSummary } from "./gradesSummary";

export interface ReportGradeDTO extends Student,Course,Activitie,GradeBookSetup,GradesSummary {
    course: string;
    maximunGrade: number;
    teacher: string;

}