const form = document.querySelector("form");
console.log(form);
const input = document.querySelector("input");
const local = document.querySelector(".local span");
const utc = document.querySelector(".utc span");
const iso = document.querySelector(".iso span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const timeStamp = Number(input.value); //input value gives string form need to convert into number
  const mydate = new Date(timeStamp);
  console.log(mydate);

  // this date now covert into local and show in the dom
  const localformatDate = mydate.toLocaleString("en-GB", { dateStyle: "full" });
  local.innerHTML = localformatDate;
  // this date now covert into UTCdate and show in the dom
  const UTCformatDate = mydate.toUTCString();
  utc.innerHTML = UTCformatDate;
  //this date now covert into UTCdate and show in the dom
  const ISOformatDate = mydate.toISOString();
  iso.innerHTML = ISOformatDate;
});


