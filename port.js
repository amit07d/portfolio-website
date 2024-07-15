function opentab(tabname) {
    const tablinks = document.getElementsByClassName("tab_links");
    const tabcontents = document.getElementsByClassName("tab_contents");

    for (const tablink of tablinks) {
        tablink.classList.remove("active_link");
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tabname).classList.add("active_tab");
}

function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

// Function to close the side menu
function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}
const scriptURL = '<https://script.google.com/macros/s/AKfycbw4hN4jWDD71iQFYtQkj_AlJvk-ht7bIkFVU0W-N-Y_BI1xeL_T9Or1bDELKwZUct64Qw/exec>'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
