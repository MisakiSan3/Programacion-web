import { Person } from "./person";

export interface Student extends Person {
     registrationNumber: number;
     carrer: string;
     carrerLevel: number;

    
};