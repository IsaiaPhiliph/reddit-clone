import { PostType, User } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const samplePostData: PostType[] = [
  {
    title: "Hola lo que he hecho!",
    content:
      "Pues soy el mejor y he hecho este programita en reactjs que lo vais a flipar nene",
    author: "IsaiaPhiliph",
    karma: 9846,
    tags: [
      {
        name: "OC",
      },
      {
        name: "NSFW",
      },
    ],
  },
  {
    title: "Hey este es mi segundo post",
    content: "Hola que tal estoy escribiendo este mi segundo post with vim",
    author: "IsaiaPhiliph",
    karma: 4560,
    tags: [
      {
        name: "overpowered",
      },
      {
        name: "Holi",
      },
    ],
  },
];
