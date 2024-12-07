const translations = {
    en: {
        
        home: "Home",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
       
        greeting: "Hi, it's Akram",
        text_animation: "I'm a",
        description: "Welcome to my digital playground! I'm a second-year software engineering student fueled by a passion for coding and problem-solving. With every line of code, I strive to create meaningful solutions that make the world a little brighter. From innovative ideas to functional designs, this is where my journey in turning creativity into impactful software takes shape.",
        hire: "Hire",
        contact_button: "Contact",
        
        education_heading: "Education",
        education_2021: "Integrated Preparatory Cycle",
        education_2021_desc: "Finished 2 years of pre-engineering preparatory cycle",
        education_2023: "Common Pre-Engineering Class",
        education_2023_desc: "Finished a foundational year where students prepare for specialization in fields like computer science or telecommunications sciences and technology",
        education_2024: "Software Engineering Major",
        education_2024_desc: "Currently in my 2nd year out of 3 as a software engineering major",
        
        skills_heading: "Skills",
        frontend: "Front-End Development",
        frontend_desc: "Html5, CSS, JavaScript, React, Bootstrap",
        backend: "Back-End Development",
        backend_desc: "Python, Java, C#, SQL, Springboot",
        mobile: "Mobile-App Development",
        mobile_desc: "Kotlin, Android, Flutter",
       
        contact_heading: "Contact Me",
        fullname: "Full Name",
        email: "Email",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message",
        send_message: "Send Message",
        
        footer_faq: "FAQ",
        footer_skills: "Skills",
        footer_about: "About Me",
        footer_contact: "Contact",
        footer_copyright: "© Akram Jallab | All Rights Reserved",
    },
    fr: {
        
        home: "Accueil",
        education: "Éducation",
        skills: "Compétences",
        contact: "Contact",
        
        greeting: "Salut, c'est Akram",
        text_animation: "Je suis un",
        description: "Bienvenue sur mon terrain de jeu numérique ! Je suis étudiant en deuxième année de génie logiciel, passionné par la programmation et la résolution de problèmes. À chaque ligne de code, je m'efforce de créer des solutions significatives qui rendent le monde un peu meilleur. Des idées innovantes aux conceptions fonctionnelles, voici où mon voyage pour transformer la créativité en logiciels impactants prend forme.",
        hire: "Embaucher",
        contact_button: "Contact",
        
        education_heading: "Éducation",
        education_2021: "Cycle Préparatoire Intégré",
        education_2021_desc: "Terminé 2 ans de cycle préparatoire pré-ingénierie",
        education_2023: "Classe Préparatoire Commune",
        education_2023_desc: "Terminé une année fondamentale où les étudiants se préparent à se spécialiser dans des domaines tels que l'informatique ou les sciences et technologies des télécommunications",
        education_2024: "Majeure en Génie Logiciel",
        education_2024_desc: "Actuellement en 2ème année sur 3 dans ma majeure en génie logiciel",
       
        skills_heading: "Compétences",
        frontend: "Développement Front-End",
        frontend_desc: "Html5, CSS, JavaScript, React, Bootstrap",
        backend: "Développement Back-End",
        backend_desc: "Python, Java, C#, SQL, Springboot",
        mobile: "Développement d'Applications Mobiles",
        mobile_desc: "Kotlin, Android, Flutter",
        
        contact_heading: "Contactez-moi",
        fullname: "Nom Complet",
        email: "E-mail",
        phone: "Numéro de Téléphone",
        subject: "Sujet",
        message: "Votre Message",
        send_message: "Envoyer un Message",
       
        footer_faq: "FAQ",
        footer_skills: "Compétences",
        footer_about: "À Propos de Moi",
        footer_contact: "Contact",
        footer_copyright: "© Akram Jallab | Tous droits réservés",
    },
};

document.getElementById('english-btn').addEventListener('click', () => {
    applyTranslations('en');
});

document.getElementById('french-btn').addEventListener('click', () => {
    applyTranslations('fr');
});

function applyTranslations(language) {
    
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[language][key];
        if (translation) {
            element.innerText = translation;
        }
    });
}
