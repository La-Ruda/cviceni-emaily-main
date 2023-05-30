console.log("Spirit of this Machine, heed my will!")


const mailStructure = (mail) => {

  const mailStatus = mail.unread ? "closed" : "opened";

  return `<div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--${mailStatus}"></button>
      <div class="email__info">
        <div class="email__sender">${mail.sender.name}</div>
        <div class="email__subject">${mail.subject}</div>
      </div>
      <div class="email__time">${mail.time}</div>
      </div>
      <div class="email__body"></div>
    </div>`
};


fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread").then(
   (response) => {
        return response.json();
   })
   .then((mail) => {
        inboxUnopened.innerHTML = `<h2>Nepřečtené zprávy</h2>` + mail.emails.map(mail => mailStructure(mail)).join(``);
});

   
fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read").then(
  (response) => {
     return response.json();
  })
  .then((mail) => {
       inboxOpened.innerHTML = `<h2>Přečtené zprávy</h2>` + mail.emails.map(mail => mailStructure(mail)).join(``);
});

const inboxUnopened = document.querySelector("#inbox__unopened");

const inboxOpened = document.querySelector("#inbox__opened");
