//navigation

const goToAboutMe = document.querySelector('.toAboutMe');
const goToProjects = document.querySelector('.toProjects');
const goToContacts = document.querySelector('.toContacts');
const mainSection = document.querySelector('.about_me');
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".mobile_contact");

goToAboutMe.addEventListener('click', function() {
    mainSection.classList.add("show_aboutMe");
    projectsSection.classList.remove("show_projects");
    contactSection.classList.remove("show_mobileContact");
})

goToProjects.addEventListener('click', function() {
    mainSection.classList.remove("show_aboutMe");
    projectsSection.classList.add("show_projects");
    contactSection.classList.remove("show_mobileContact");
})

goToContacts.addEventListener('click', function() {
    mainSection.classList.remove("show_aboutMe");
    projectsSection.classList.remove("show_projects");
    contactSection.classList.add("show_mobileContact");
})

