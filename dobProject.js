const user1DOB = document.querySelector(".dob .user1");
console.log(user1DOB.value);
const user2DOB = document.querySelector(".dob .user2");
const button = document.querySelector(".dob button");

const user1dataDOB = user1DOB.value;
const user1date = new Date(user1dataDOB);
const user1timestamp = user1date.getTime();

const user2dataDOB = user1DOB.value;
const user2date = new Date(user1dataDOB);
const user2timestamp = user1date.getTime();
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (user1timestamp > user2timestamp) {
    console.log("user2 is older than user1");
  } else {
    console.log("user1 is older than user2");
  }
});
