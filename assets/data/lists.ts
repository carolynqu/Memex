import { Lists } from "../../src/types";
import posts from "./posts";

const lists: Lists[] = [
  {
    id: 10,
    name: "New Zealand",
    total: 2,
    posts: [posts[0], posts[1]],
  },
  {
    id: 11,
    name: "Europe",
    total: 2,
    posts: [posts[2], posts[3]],
  },
];

export default lists;
