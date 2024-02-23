import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Frontend Developer",
    projects: 15,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Developer",
    projects: 8,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Backend Developer",
    projects: 10,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I help in building responsive and effecient websites, web applications and mobile applications.",
  "I am a javaScript engineer and i have experience using libaries like React, React-Native, Redux, NodeJs, Express. I have experience managing database such as NoSQL like MongoDB and SQL ",
];

export const comments = [
  {
    name: "Agu Obedience",
    post: "Phographer",
    comment:
      "Wow! You really did an amazing job on my photography website, i really do love the website. Looking forward to working with you more in the future thanks.",
    img: "./defaultPicture.png",
  },
  {
    name: "Anu",
    post: "Owner of Looks salon",
    comment:
      "This website is really top notch, i love it, Thank you very much .",
    img: "./defaultPicture.png",
  },
  {
    name: "Felix Agbata",
    post: "Head of operation Socneting",
    comment: "Amazing website with beautiful designs. Thanks",
    img: "./defaultPicture.png",
  },
  {
    name: "Micheal Arowolo",
    post: "Graphic Designer",
    comment: "Big ups man. You're giving the best vibes to my website",
    img: "./defaultPicture.png",
  },
  {
    name: "Funsho Wealth",
    post: "Videographer",
    comment: "I love it, good job sir",
    img: "./defaultPicture.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
