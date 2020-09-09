export interface BaseDto<T> {
  success: boolean,
  data?: T,
  message?: string
}

export interface Person {
  skills?: string[];
  age: number;
  name: string;
}

export interface Employee extends Person {
  title: string;
  hourlyRate: number
}

export interface Animal {
  family?: string;
  age: number;
  deathCount: number
}

export interface CreditData {
  company: string;
  activity: string[];
}

export interface UserData {
  firstName: string;
  lastName: string;
}
