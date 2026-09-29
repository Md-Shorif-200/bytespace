import { LearningPathType } from "./types";

const learning_path_icon_1 = "/image/learning-paths/icon_1.svg";
const learning_path_icon_2 = "/image/learning-paths/icon_2.svg";
const learning_path_icon_3 = "/image/learning-paths/icon_3.svg";
const learning_path_icon_4 = "/image/learning-paths/icon_4.svg";
const learning_path_icon_5 = "/image/learning-paths/icon_5.svg";
const learning_path_icon_6 = "/image/learning-paths/icon_6.svg";


// Data for all cards
export const learningPaths:LearningPathType[] = [
  { id: 1, title: "Design", icon: learning_path_icon_1 },
  { id: 2, title: "Development", icon: learning_path_icon_2 },
  { id: 3, title: "IT & Software", icon: learning_path_icon_3 },
  { id: 4, title: "Business", icon: learning_path_icon_4 },
  { id: 5, title: "Marketing", icon: learning_path_icon_5 },
  { id: 6, title: "Photography", icon: learning_path_icon_6 },
];