// console.log("hello main.js")
domBuilder.appendInputForm();

let legoBtn = document.querySelector(".lego__save");

legoBtn.addEventListener("click", eventListeners.handleFormSubmission);