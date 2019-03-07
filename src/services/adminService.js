const headerInfos = [
  {
    _id: "events",
    title: "Line Up",
    description: "SG MUSIC FESTIVAL",
    imageURL: "images/headers/pink.png"
  },
  {
    _id: "tickets",
    title: "Ticketing",
    description: "SG MUSIC FESTIVAL",
    imageURL: "images/headers/blue.png"
  },
  {
    _id: "home",
    title: "FESTIV",
    description: "SG MUSIC FESTIVAL",
    dates: "15 June - 17 June 2019",
    imageURL: "images/headers/home.png"
  }
];

export function getHeaderInfos() {
  return headerInfos;
}

export function getHeaderInfo(id) {
  return headerInfos.find(header => header._id === id);
}

export function isAdmin(admin) {
  if (admin) {
    return admin;
  } else {
    return "home";
  }
}
