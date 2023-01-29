export interface DropdownData {
  title: string;
  isDropdown: boolean;
  linkTo?: string;
  items?: Array<{
    courseName: string,
    linkTo: string;
  }>,
}


export interface CourseQuarter {
  quarterName: string;
  quarterNumber: number;
  duration: string;
  title: string;
  description?: string;
  syllabus: Array<
    {
      title: string;
    }
  >
}

export interface CarouselData {
  title: string,
  linkTo: string,
  description: string,
  imageURL: string
}

export interface ProgramDetailType {
  id: number,
  title: string,
  description: string,
  quarters: CourseQuarter []
}

