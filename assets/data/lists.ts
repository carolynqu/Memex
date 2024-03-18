import { Lists } from "../../src/types";
import posts from "./posts";

const lists: Lists[] = [
  {
    id: 10,
    name: "New Zealand",
    total: 2,
    image:
      "https://a.storyblok.com/f/95452/4256x2832/83fe0c7da6/new-zealand-fiordland-national-park-lake-marian.jpg",
    posts: [posts[0], posts[1]],
  },
  {
    id: 11,
    name: "Europe",
    total: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png",

    posts: [posts[2], posts[3]],
  },
  {
    id: 12,
    name: "Stays",
    total: 2,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",

    posts: [posts[3], posts[0], posts[1]],
  },
];

export default lists;
