import { COMPANIES, NAMES, POSITION, SURNAMES } from "./constants/data";

// i use this function to generate members for my companies
function Generate() {
 const resultArray: any = [];
 COMPANIES.forEach((company) => {
  const memberCount = Math.floor(Math.random() * 220);
  const membersArray = [];
  for (let i = 0; i < memberCount; i++) {
   membersArray.push({
    id: i + 1,
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    surname: SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
    position: POSITION[Math.floor(Math.random() * POSITION.length)],
    isActive: false,
   });
  }
  resultArray.push({ ...company, members: membersArray });
 });
 return resultArray;
}
