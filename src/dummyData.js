export const Users = [
  {
    id: 1,
    profilePicture: "../images/chima.jpeg",
    username: "Chima",
  },
  {
    id: 2,
    profilePicture: "../images/ben-parker.jpg",
    username: "Ben Parker",
  },
  {
    id: 3,
    profilePicture: "../images/jurica-koletic.jpg",
    username: "Jurica Koletic",
  },
  {
    id: 4,
    profilePicture: "../images/may-gauthier.jpg",
    username: "May Gauthier",
  },
  {
    id: 5,
    profilePicture: "../images/may-gauthier.jpg",
    username: "May Gauthier",
  },
  {
    id: 6,
    profilePicture: "../images/may-gauthier.jpg",
    username: "May Gauthier",
  },
  {
    id: 7,
    profilePicture: "../images/joseph-gonzalez.jpg",
    username: "Joseph Gonzalez",
  },
  {
    id: 8,
    profilePicture: "../images/michael-dam.jpg",
    username: "Michael Dam",
  },
  {
    id: 9,
    profilePicture: "../images/Toa-heftiba.jpg",
    username: "Toa Heftiba",
  },
  {
    id: 10,
    profilePicture: "../images/jurica-koletic.jpg",
    username: "Juric Koletic",
  },
];
// ! like should be an array of userIds (like: [9, 5, 4])

// ! comment should be a separate variable (collection) containing more informations (i.e text, date, userId)

// ! date should be an actual date (Fri Jun 03 2022 10:58:42 GMT+0200)
// ! and then you can calculate 5 mins ago by changing the date in ms (i.e 1519211809934 ms since January 1, 1970 00:00:00 UTC) and subtracting it to Date.now()
export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "../images/Berlin.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: "../images/Indonesia.jpg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning-Italy.",
    photo: "../images/Italy.jpg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    desc: "Enjoying the nature in-Maldive.",
    photo: "../images/Maldive.jpg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    desc: "Experience the beauty of nature-Mauritius.",
    photo: "../images/Mauritius.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    desc: "The blissful nature of-Singapore.",
    photo: "../images/Singapore.jpg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile-Spain.",
    photo: "../images/Spain.jpg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    desc: "The heart of Aisa-Taiwan.",
    photo: "../images/Taiwan.jpg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by enjoying yourself-Berlin.",
    photo: "../images/Berlin.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    desc: "The city of love-Berlin.",
    photo: "../images/Berlin.jpg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
