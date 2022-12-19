const flagIcon = document.querySelectorAll('.flag-icon');
const englishBtn = document.querySelector('#englishBtn');
const spanishBtn = document.querySelector('#spanishBtn');

(function() {
    englishBtn.style.display = 'none';
})();

const links = document.querySelectorAll('.menu a');

const profileTitle = document.querySelector('.greeting');
const profileDetails = document.querySelector('.profile-details');
const profileBtn = document.querySelector('.profile-btn');

const experiencesTitle = document.querySelector('.experiences-title');
const skills = document.querySelector('.skills-title');
const contactTitle = document.querySelector('.contact-title');
const addressLabel = document.querySelector('#address');
const emailLabel = document.querySelector('#email');
const phoneLabel = document.querySelector('#phone');
const messageText = document.querySelector('#message-text');
const nameLabel = document.querySelector('#name');
const formEmail = document.querySelector('#form-email');
const messageLabel = document.querySelector('#message-label');
const contactFormSubmit = document.querySelector('.contact-form-submit');

function setNavbarText(navbarLink, attr) {
    switch(navbarLink.innerHTML) {
        case 'Profile':
        case 'Perfil':
            navbarLink.innerHTML = data[attr].menu[0];
            break;
        case 'Experience':
        case 'Experiencia':
            navbarLink.innerHTML = data[attr].menu[1];
            break;
        case 'Skills':
        case 'Habilidades':
            navbarLink.innerHTML = data[attr].menu[2];
            break;
        default:
            navbarLink.innerHTML = data[attr].menu[3];
            break;
    }
}

flagIcon.forEach(flag => {
    
    flag.addEventListener('click', () => {
        const attr = flag.getAttribute('language');

        if(attr === 'english') {
            spanishBtn.style.display = 'block';
            englishBtn.style.display = 'none';
        } else {
            spanishBtn.style.display = 'none';
            englishBtn.style.display = 'block';
        }

        links.forEach(link => {
            setNavbarText(link, attr);
        })

         profileTitle.textContent = data[attr].profileTitle;
         profileDetails.textContent = data[attr].profileDetails;
         profileBtn.textContent = data[attr].download;
         experiencesTitle.textContent = data[attr].experienceTitle;
         skills.textContent = data[attr].skills;
         contactTitle.textContent = data[attr].contact;
         addressLabel.textContent = data[attr].address;
         emailLabel.textContent = data[attr].email;
         formEmail.textContent = data[attr].email;
         phoneLabel.textContent = data[attr].phone;
         messageText.textContent = data[attr].messageContact;
         nameLabel.textContent = data[attr].name;
         messageLabel.textContent = data[attr].messageLabel;
         contactFormSubmit.textContent = data[attr].contactFormSubmit;
    });
});

let data = {
    "english": {
        "profileTitle": "Hi, I'm",
        "profileDetails": "Systems engineering professional with seven years of experience in web development with various languages and technologies.",
        "menu": ['Profile', 'Experience', 'Skills', 'Contact'],
        "download": "Download CV",
        "experienceTitle": "Experience",
        "skills": "Skills",
        "contact": "Contact",
        "address": "Address",
        "email": "Email",
        "phone": "Phone",
        "messageContact": "Leave your message and I will gladly answer you as soon as possible",
        "name": "Name",
        "messageLabel": "Message",
        "contactFormSubmit": "Send"
    }, 
    "spanish": {
        "profileTitle": "Hola, Yo soy",
        "profileDetails": "Profesional de la ingeniería de sistemas con siete años de experiencia en desarrollo web con diversos lenguajes y tecnologías.",
        "menu": ['Perfil', 'Experiencia', 'Habilidades', 'Contacto'],
        "download": "Descargar HV",
        "experienceTitle": "Experiencia",
        "skills": "Habilidades",
        "contact": "Contacto",
        "address": "Dirección",
        "email": "Correo",
        "phone": "Teléfono",
        "messageContact": "Deje su mensaje y con gusto responderé tan pronto como sea posible",
        "name": "Nombre",
        "messageLabel": "Mensaje",
        "contactFormSubmit": "Enviar"
    }
}