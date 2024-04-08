import { Lists } from "../../src/types";
import posts from "./posts";

const lists: Lists[] = [
  {
    id: 10,
    name: "New Zealand",
    total: 2,
    image:
      "https://media.istockphoto.com/id/1343234215/photo/young-asian-couple-celebrating-success-at-roys-peak-lake-wanaka-new-zealand.jpg?s=612x612&w=0&k=20&c=gZ8CuxuvDps2N4p6DZkIUeaZT4VBiNjFwH8EuYc7SHA=",
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
