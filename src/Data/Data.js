// Sidebar imports
import {
  UilThLarge,
  UilUser ,
  UilUserSquare,
  UilChart,
  UilPlusSquare,
  UilHospitalSquareSign ,

} from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilHospitalSquareSign ,
    heading: "Home",
    path:"/",
  },
  {
    icon: UilThLarge,
    heading: "All Reservations",
    path:"/all",
  },
  {
    icon: UilPlusSquare,
    heading: "Add Reservations",
    path:"/add",
  },
  {
    icon: UilChart,
    heading: "Off Hour Reservations",
    path:"/offhour",
  },
  {
    icon: UilUserSquare,
    heading: 'My Reservations',
    path:"/my",
  },
  {
    icon: UilUser ,
    heading: 'Profile',
    path:"/profile",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "New CC",
    color: {
      backGround: "linear-gradient(180deg,  #d7b140 10%, #FC929D 90%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
  },
  {
    title: "Old CC",
    color: {
      backGround: "linear-gradient(180deg,  #d7b140 10%, #FC929D 90%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },

  },
  {
    title: "Seminar Room",
    color: {
      backGround:
        "linear-gradient(180deg,  #d7b140 10%, #FC929D 90%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
  },
];


