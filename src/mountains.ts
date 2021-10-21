import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Killimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameofTallestMountain = (mtnArray: Mountain[]) => {
  if (mtnArray.length > 0) {
    let tallest: Mountain = mtnArray[0];
    mtnArray.forEach((mtn: Mountain) => {
      if (mtn.height > tallest.height) {
        tallest = mtn;
      }
    });
    return tallest;
  } else {
    return "";
  }
};

console.log(findNameofTallestMountain(mountains));
