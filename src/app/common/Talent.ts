export class Talent {
    id: number;
    firstName: string;
    lastName: string;
    location: Location;
    speciality: Speciality;
    technologies: Technology[];
}


export class Speciality {
    name: String;
}

export class Technology {
    name: string;
}

export class Location {
    name: string;
}
