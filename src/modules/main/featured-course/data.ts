import { FeaturedCourseType, FeaturedCourseTabsType } from "./types";

// course card images
const featured_course_img_1 = "/image/featured-course/featured_course_1.webp";
const featured_course_img_2 = "/image/featured-course/featured_course_2.webp";
const featured_course_img_3 = "/image/featured-course/featured_course_3.webp";
const featured_course_img_4 = "/image/featured-course/featured_course_4.webp";
const featured_course_img_5 = "/image/featured-course/featured_course_5.webp";
const featured_course_img_6 = "/image/featured-course/featured_course_6.webp";

// students
const student_1 =  "/image/banner/Ellipse.png";
const student_2 =  "/image/featured-course/student_2.png";
const student_3 = "/image/featured-course/student_3.png";
const student_4 = "/image/featured-course/student_4.png";

const studentAvatarsData = [
    student_1,student_2,student_3,student_4
]


// tabs
export const tabs: FeaturedCourseTabsType = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

// featured courses
// Array of 8 Course Objects
export const coursesData: FeaturedCourseType[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentsCount: "26+",
    thumbnail: `${featured_course_img_1}`,
    studentAvatars: studentAvatarsData
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "designpro studio",
    rating: 4.5,
    price: 25,
    lessons: "24 Lessons",
    duration: "3 hours 45 mins",
    comments: "82 Comments",
    level: "Beginner",
    studentsCount: "26+",
    thumbnail: `${featured_course_img_2}`,
    studentAvatars: studentAvatarsData
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "devspace academy",
    rating: 4.5,
    price: 25,
    lessons: "35 Lessons",
    duration: "6 hours 10 mins",
    comments: "120 Comments",
    level: "Beginner",
    studentsCount: "260+",
    thumbnail: `${featured_course_img_3}`,
    studentAvatars: studentAvatarsData
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    author: "artify studio",
    rating: 4.5,
    price: 25,
    lessons: "12 Lessons",
    duration: "1 hour 50 mins",
    comments: "34 Comments",
    level: "Beginner",
    studentsCount: "26+",
    thumbnail: `${featured_course_img_4}`,
    studentAvatars: studentAvatarsData
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "marketwise",
    rating: 4.5,
    price: 25,
    lessons: "15 Lessons",
    duration: "2 hours 05 mins",
    comments: "41 Comments",
    level: "Beginner",
    studentsCount: "26+",
    thumbnail: `${featured_course_img_5}`,
    studentAvatars: studentAvatarsData
  },
  {
    id: 6,
    title: "Mastering Money Management",
    author: "motionlab",
    rating: 4.5,
    price: 25,
    lessons: "20 Lessons",
    duration: "4 hours 30 mins",
    comments: "65 Comments",
    level: "Beginner",
    studentsCount: "26+",
    thumbnail: `${featured_course_img_6}`,
    studentAvatars: studentAvatarsData
  },
];
