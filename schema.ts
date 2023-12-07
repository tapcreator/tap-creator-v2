interface DateRange {
    start: string;
    end: string;
}

interface Experience {
    title: string;
    company: string;
    date: DateRange;
    detail: string[];
}

interface Skill {
    category: string;
    list: string[];
}

interface Education {
    faculty: string;
    degree: string;
    institute: string;
    year: DateRange;
}

interface Project {
    name: string;
    detail: string[];
    technologies: string[];
    url: string;
    date: DateRange;
}

interface Interest {
    title: string;
    icon: string;
}

interface Course {
    name: string;
    institute: string;
    url: string;
}

interface Language {
    name: string;
    level: string;
}

interface Profile {
  fullname: string;
  nickname: string;
  birthday: string;
  headtag: string;
  summary: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  experience: Experience[],
  skills: Skill[],
  education: Education[];
  projects: Project[];
  courses: Course[];
  language: Language[];
  interest: Interest[];
}

export default Profile;
