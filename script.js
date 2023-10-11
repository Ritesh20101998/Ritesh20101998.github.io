// Check if the screen width is less than 481px
// if (window.innerWidth < 481) {
//   // JavaScript function to toggle the navigation menu
//   function toggleMenu() {
//     var navMenu = document.getElementById('nav-menu'); // Get the navigation menu element

//     // Toggle the visibility of the navigation menu
//     if (navMenu.style.display === 'block') {
//       navMenu.style.display = 'none';
//     } else {
//       navMenu.style.display = 'block';
//     }
//   }

//   // JavaScript function to scroll to the top of the page
//   function scrollToTop() {
//     var body = document.body; // Get the body element
//     body.scrollTop = 0; // Scroll to the top of the page
//   }

//   // Add a click event listener to the menu icon
//   var menuIcon = document.getElementById('menu-icon');
//   menuIcon.addEventListener('click', toggleMenu);

//   // Add click event listeners to navigation links
//   var navLinks = document.querySelectorAll('#nav-menu a');
//   navLinks.forEach(function(link) {
//     link.addEventListener('click', function() {
//       toggleMenu(); // Close the navigation menu
//       scrollToTop(); // Scroll to the top of the page
//     });
//   });
// };


GitHubCalendar(".calendar", "Ritesh20101998");
GitHubCalendar(".calendar", "Ritesh20101998", { responsive: true });

function resume(){
    window.open("https://drive.google.com/file/d/1aB0sJXQom6RrLbDu7iAs1ljX-JkDS5iQ/view?usp=sharing")
}

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

function windowOpen() {
  console.log("open")
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("nav-menu").style.display = "block";
  document.getElementById("nav-menu").style.backgroundColor = "black";
  document.getElementById("nav-menu").style.color = "white";
}

function windowClose() {
  console.log("Close")
  document.getElementById("nav-menu").style.display = "none";
}