
let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
let m=document.querySelector(".main-body")
let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    
    m.style.marginTop="200px";
    count++;
    if(count%2==0){
        m.style.marginTop="0px";

    }

    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});


GitHubCalendar(".calendar", "Ritesh20101998");
GitHubCalendar(".calendar", "Ritesh20101998", { responsive: true });


function resume(){
    window.open("https://drive.google.com/file/d/1-OuJtg1UY7gNKb9LxGBAmiV-2Gnzfg0-/view?usp=sharing")
}

// let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
// let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)

// function NewTab() {
//     window.open(
//         "https://drive.google.com/file/d/1-OuJtg1UY7gNKb9LxGBAmiV-2Gnzfg0-/view?usp=sharing",
//         "_blank"
//     );
// }

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kothawaderitesh2010@gmail.com",
        Password : "Ritesh$2010",
        To : 'kothawaderp@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form Enquiry",
        Body : "Name : " + document.getElementById('name').value
        + "<br> Email : " + document.getElementById('email').value
        + "<br> Phone Number : " + document.getElementById('phone').value
        + "<br> Message : " + document.getElementById('message').value
    }).then(
      message => alert('Message Sent successfully')
    );
}