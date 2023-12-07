interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly location: string;
    yearsOfExperience?: number;
    [key: string]: any; // Allows adding any additional attribute
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    let ret: string = '';
    ret += firstName[0] + ". " + lastName;
    return ret;
}

interface Student {
    firstName: string;
    lastName: string;

    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements Student {
    constructor(public firstName: string, public lastName: string) {
	this.firstName = firstName;
	this.lastName = lastName;
    }
    workOnHomework() {
	return "Currently working";
    }
    displayName() {
	return this.firstName;
    }
}
