interface SanityBody {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: string;
  }
}

export interface Social extends SanityBody {
  _type: string;
  title: string;
  url: string;
}

export interface Technology extends SanityBody {
  _type: string;
  image: Image;
  title: string;
  progress: number;
}

export interface Skill extends SanityBody {
  _type: string;
  image: Image;
  title: string;
  progress: number;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  startDate: date;
  endDate: date;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
  isCurrentlyWorkingHere: boolean;
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}
