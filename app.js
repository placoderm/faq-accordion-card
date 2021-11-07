const faqTitleBars = document.querySelectorAll(".faq-heading");
//allButtonToggles = document.querySelectorAll(".toggle-button");

console.log(faqTitleBars);

faqTitleBars.forEach(faqTitleItem => {
    faqTitleItem.addEventListener("click", event => {
        console.log("faqTitleItem clicked!");
        // to each individual .faq-heading
        //let buttonToggle = faqTitleItem.querySelector(".toggle-button");
        if (faqTitleItem.classList.contains("toggle-open")) {
            faqTitleItem.classList.remove("toggle-open");
        } else {
            removeAllToggled();
            faqTitleItem.classList.add("toggle-open");
        }

        //changing open
        let panel = faqTitleItem.nextElementSibling; // the .answer after the .faq-heading
        console.log(panel);
        if (panel.classList.contains("open")) {
            panel.classList.remove("open");
        } else {
            // console.log("add open");
            removeAllOpen();
            panel.classList.add("open");
            // console.log(panel.classList);
        }
    });
});

// remove all open class
function removeAllOpen() {
    faqTitleBars.forEach(faqTitleItem => {
        faqTitleItem.nextElementSibling.classList.remove("open");
    });
}

function removeAllToggled() {
    faqTitleBars.forEach(faqTitleItem => {
        faqTitleItem.classList.remove("toggle-open");
    });
}