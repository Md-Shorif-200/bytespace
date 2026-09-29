export type FeaturedCourseTabsType = string[]

// featured course types
export interface FeaturedCourseType {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  studentsCount: string;
  thumbnail: string;
  studentAvatars: string[];
}