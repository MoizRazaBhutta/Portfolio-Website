export interface PersonalInfo{
    name:string,
    age:number,
    email:string,
    phone:string,
    address:string,
    description: string
}

export interface SocialLink{
    linkedin:string,
    github:string,
    facebook:string,
    instagram:string
}

export interface Skill{
    name:string,
    level:number
}

export interface Experience{
    title:string,
    company:string,
    duration:string
}

export interface Education{
    degree:string,
    school:string,
    year:string
}

export interface ViewData{
    personalInfo:PersonalInfo,
    socialLinks:SocialLink,
    skills:Skill[],
    experience:Experience[],
    education:Education[]
}