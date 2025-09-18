document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toogle");
  let currentLanguage = localStorage.getItem("language") || "es"; // Idioma por defecto o guardado

  // Textos traducibles
  const translations = {
    en: {
      // Navbar
      "nav-home": "Home",
      "nav-services": "Services",
      "nav-about": "About Us",
      "nav-plans": "Plans",
      "nav-contact": "Contact",

      // Hero Section
      "hero-title": "Continuous, Connected, and Reliable Care",
      "hero-description":
        "MediTrack offers innovative solutions for the care of older adults, combining advanced technology with a human approach to ensure their safety and peace of mind.",
      "hero-discover-button": "Discover Meditrack",
      "hero-plans-button": "View plans",

      // Services Section
      "services-title": "The Challenge of Geriatric Care",
      "services-description":
        "Traditional healthcare systems are not designed for the continuous monitoring that older adults require. MediTrack changes this.",
      "services-problems-title": "Current Problems",
      "services-problems-description":
        "Geriatric care faces critical challenges that put the health and safety of older adults at risk.",
      "services-problem-1-title": "Undetected Emergencies",
      "services-problem-1-description":
        "Older adults can suffer medical emergencies without anyone knowing in time.",
      "services-problem-2-title": "Irregular Monitoring",
      "services-problem-2-description":
        "Sporadic medical visits do not provide continuous health tracking.",
      "services-problem-3-title": "Lack of Connection",
      "services-problem-3-description":
        "Family and doctors are often unaware of the patient's daily status.",
      "services-solution-title": "Our Solution",
      "services-solution-description":
        "MediTrack addresses each of these challenges with innovative technology and a user-centered approach.",
      "services-solution-1-title": "Immediate Detection",
      "services-solution-1-description":
        "Automatic alerts for any anomaly in vital signs, 24/7.",
      "services-solution-2-title": "Continuous Monitoring",
      "services-solution-2-description":
        "Constant tracking of vital signs with predictive analysis.",
      "services-solution-3-title": "Total Connection",
      "services-solution-3-description":
        "Real-time information shared with family and doctors.",

      // Impact Section
      "impact-title": "Impact",
      "impact-1-text": "Reduction in undetected emergencies",
      "impact-2-text": "Family satisfaction",
      "impact-3-text": "Reduction in hospitalizations",
      "impact-4-text": "Continuous monitoring",

      // Services Section Part 2
      "services-part2-tag": "Advanced Medical Technology",
      "services-part2-title": "MediTrack - More than Monitoring",
      "services-part2-description":
        "A comprehensive solution that combines latest-generation IoT devices with artificial intelligence to transform geriatric care.",
      "services-part2-feature-title": "Technologies that save lives",
      "services-part2-feature-description":
        "Our smart patches use hospital-grade medical sensors to provide continuous monitoring without disrupting the patient's daily life.",
      "services-part2-feature-1-title": "Connectivity",
      "services-part2-feature-1-description": "WiFi, Bluetooth, 4G",
      "services-part2-feature-2-title": "Battery Life",
      "services-part2-feature-2-description": "72-hour battery life",
      "services-part2-feature-3-title": "Data Security",
      "services-part2-feature-3-description": "Encrypted and secure",
      "services-part2-feature-4-title": "Vital Signs",
      "services-part2-feature-4-description": "ECG, SpO2, Temp.",
      "services-part2-feature-5-title": "Predictive Alerts",
      "services-part2-feature-5-description": "AI-powered",
      "services-part2-feature-6-title": "Custom Reports",
      "services-part2-feature-6-description": "Downloadable",

      // Mission Vision Section
      "mission-vision-tag": "Our Philosophy",
      "mission-vision-title": "Mission and Vision",
      "mission-vision-description":
        "We believe in a future where technology significantly improves the quality of life for our older adults.",
      "mission-title": "Our Mission",
      "mission-description":
        "To develop accessible and effective digital tools that allow patients, families, and health institutions to monitor and manage the health of older adults in real time, providing security, trust, and efficiency in geriatric care.",
      "vision-title": "Our Vision",
      "vision-description":
        "To be leaders in the digital transformation of geriatric care, creating a connected and proactive ecosystem that anticipates health needs and promotes active and healthy aging.",

      // Plans Section
      "plans-title": "Service Plans",
      "plan-1-title": "Freemium",
      "plan-1-price": "$0/month",
      "plan-1-feature-1": "Basic vital signs monitoring",
      "plan-1-feature-2": "Real-time alerts",
      "plan-1-feature-3": "Access to the web platform",
      "plan-1-button": "Select Plan",
      "plan-2-title": "Premium",
      "plan-2-recommended": "Recommended",
      "plan-2-price": "$20/month",
      "plan-2-feature-1": "Advanced vital signs monitoring",
      "plan-2-feature-2": "Predictive alerts",
      "plan-2-feature-3": "Access to the web platform",
      "plan-2-feature-4": "Downloadable Reports",
      "plan-2-feature-5": "Priority Support",
      "plan-2-button": "Select Plan",
      "plan-3-title": "Enterprise",
      "plan-3-feature-1": "Advanced vital signs monitoring",
      "plan-3-feature-2": "Predictive alerts",
      "plan-3-feature-3": "Access to the web platform",
      "plan-3-feature-4": "Downloadable Reports",
      "plan-3-feature-5": "Priority Support",
      "plan-3-button": "Contact Us",

      // Contact Section
      "contact-title": "Contact us to learn more about Meditrack",
      "contact-description":
        "We believe in a future where technology significantly improves the quality of life for our older adults.",
      "contact-name-placeholder": "Name",
      "contact-email-placeholder": "email@mycompany.com",
      "contact-phone-placeholder": "+1 555 555 5555",
      "contact-interest-placeholder": "Interest",
      "contact-send-button": "Send",

      // Footer
      "footer-brand-name": "AlpacaFlow",
      "footer-brand-platform": "Meditrack Platform",
      "footer-description":
        "Transforming geriatric care through innovative technology that connects patients, families, and healthcare professionals.",
      "footer-email": "contact@alpacaflow.com",
      "footer-phone": "+1 (555) 123-4567",
      "footer-location": "Lima, Peru",
      "footer-company-title": "Company",
      "footer-about-us": "About Us",
      "footer-contact": "Contact",
      "footer-product-title": "Product",
      "footer-meditrack": "Meditrack",
      "footer-features": "Features",
      "footer-pricing": "Pricing",
      "footer-legal-title": "Legal",
      "footer-privacy": "Privacy",
      "footer-terms": "Terms of Service",
      "footer-cookies": "Cookies",
      "footer-security": "Security",
      "footer-copyright-part-1":
        "© 2025 AlpacaFlow. All rights reserved. Made with",
      "footer-copyright-part-2": "to improve lives.",
    },
    es: {
      // Navbar
      "nav-home": "Inicio",
      "nav-services": "Servicios",
      "nav-about": "Nosotros",
      "nav-plans": "Planes",
      "nav-contact": "Contacto",

      // Hero Section
      "hero-title": "Cuidado Continuo, Conectado y Confiable",
      "hero-description":
        "MediTrack ofrece soluciones innovadoras para el cuidado de adultos mayores, combinando tecnología avanzada con un enfoque humano para garantizar su seguridad y tranquilidad.",
      "hero-discover-button": "Descubre Meditrack",
      "hero-plans-button": "Ver planes",

      // Services Section
      "services-title": "El Desafío del Cuidado Geriátrico",
      "services-description":
        "Los sistemas tradicionales de atención médica no están diseñados para el monitoreo continuo que requieren los adultos mayores. MediTrack cambia esto.",
      "services-problems-title": "Los Problemas Actuales",
      "services-problems-description":
        "El cuidado geriátrico enfrenta desafíos críticos que ponen en riesgo la salud y seguridad de los adultos mayores.",
      "services-problem-1-title": "Emergencias No Detectadas",
      "services-problem-1-description":
        "Los adultos mayores pueden sufrir emergencias médicas sin que nadie se entere a tiempo.",
      "services-problem-2-title": "Monitoreo Irregular",
      "services-problem-2-description":
        "Las visitas médicas esporádicas no proporcionan un seguimiento continuo de la salud.",
      "services-problem-3-title": "Emergencias No Detectadas",
      "services-problem-3-description":
        "Los adultos mayores pueden sufrir emergencias médicas sin que nadie se entere a tiempo.",
      "services-solution-title": "Nuestra Solución",
      "services-solution-description":
        "MediTrack aborda cada uno de estos desafíos con tecnología innovadora y un enfoque centrado en el usuario.",
      "services-solution-1-title": "Detección Inmediata",
      "services-solution-1-description":
        "Alertas automáticas ante cualquier anomalía en los signos vitales, 24/7.",
      "services-solution-2-title": "Monitoreo Continuo",
      "services-solution-2-description":
        "Seguimiento constante de signos vitales con análisis predictivo.",
      "services-solution-3-title": "Conexión Total",
      "services-solution-3-description":
        "Información en tiempo real compartida con familiares y médicos.",

      // Impact Section
      "impact-title": "Impacto",
      "impact-1-text": "Reducción en emergencias no detectadas",
      "impact-2-text": "Satisfacción familiar",
      "impact-3-text": "Reducción en hospitalizaciones",
      "impact-4-text": "Monitoreo continuo",

      // Services Section Part 2
      "services-part2-tag": "Tecnología Médica Avanzada",
      "services-part2-title": "MediTrack - Más que Monitoreo",
      "services-part2-description":
        "Una solución integral que combina dispositivos IoT de última generación con inteligencia artificial para transformar el cuidado geriátrico.",
      "services-part2-feature-title": "Tecnologias que salvan vidas",
      "services-part2-feature-description":
        "Nuestros parches inteligentes utilizan sensores médicos de grado hospitalario para proporcionar monitoreo continuo sin interrumpir la vida diaria del paciente.",
      "services-part2-feature-1-title": "Detección Inmediata",
      "services-part2-feature-1-description": "WiFi, Bluetooth, 4G",
      "services-part2-feature-2-title": "Detección Inmediata",
      "services-part2-feature-2-description": "WiFi, Bluetooth, 4G",
      "services-part2-feature-3-title": "Detección Inmediata",
      "services-part2-feature-3-description": "WiFi, Bluetooth, 4G",
      "services-part2-feature-4-title": "Detección Inmediata",
      "services-part2-feature-4-description": "WiFi, Bluetooth, 4G",
      "services-part2-feature-5-title": "Detección Inmediata",
      "services-part2-feature-5-description": "WiFi, Bluetooth, 4G",
      "services-part2-feature-6-title": "Detección Inmediata",
      "services-part2-feature-6-description": "WiFi, Bluetooth, 4G",

      // Mission Vision Section
      "mission-vision-tag": "Nuestra Filosofía",
      "mission-vision-title": "Misión y Visión",
      "mission-vision-description":
        "Creemos en un futuro donde la tecnología mejore significativamente la calidad de vida de nuestros adultos mayores.",
      "mission-title": "Nuestra Misión",
      "mission-description":
        "Desarrollar herramientas digitales accesibles y efectivas que permitan a pacientes, familias e instituciones de salud monitorear y gestionar la salud de los adultos mayores en tiempo real, proporcionando seguridad, confianza y eficiencia en el cuidado geriátrico.",
      "vision-title": "Nuestra Visión",
      "vision-description":
        "Desarrollar herramientas digitales accesibles y efectivas que permitan a pacientes, familias e instituciones de salud monitorear y gestionar la salud de los adultos mayores en tiempo real, proporcionando seguridad, confianza y eficiencia en el cuidado geriátrico.",

      // Plans Section
      "plans-title": "Planes de Servicio",
      "plan-1-title": "Freemium",
      "plan-1-price": "0$/mes",
      "plan-1-feature-1": "Monitoreo básico de signos vitales",
      "plan-1-feature-2": "Alertas en tiempo real",
      "plan-1-feature-3": "Acceso a la plataforma web",
      "plan-1-button": "Seleccionar Plan",
      "plan-2-title": "Premium",
      "plan-2-recommended": "Recomendado",
      "plan-2-price": "20$/mes",
      "plan-2-feature-1": "Monitoreo de signos vitales",
      "plan-2-feature-2": "Alertas en tiempo real",
      "plan-2-feature-3": "Acceso a la plataforma web",
      "plan-2-feature-4": "Reportes Descargables",
      "plan-2-feature-5": "Soporte prioritario",
      "plan-2-button": "Seleccionar Plan",
      "plan-3-title": "Enterprice",
      "plan-3-feature-1": "Monitoreo de signos vitales",
      "plan-3-feature-2": "Alertas en tiempo real",
      "plan-3-feature-3": "Acceso a la plataforma web",
      "plan-3-feature-4": "Reportes Descargables",
      "plan-3-feature-5": "Soporte prioritario",
      "plan-3-button": "Contáctanos",

      // Contact Section
      "contact-title": "Contáctanos para saber mas sobre Meditrack",
      "contact-description":
        "Creemos en un futuro donde la tecnología mejore significativamente la calidad de vida de nuestros adultos mayores.",
      "contact-name-placeholder": "Nombre",
      "contact-email-placeholder": "email@mycompany.com",
      "contact-phone-placeholder": "+51 999 999 999",
      "contact-interest-placeholder": "Interés",
      "contact-send-button": "Enviar",

      // Footer
      "footer-brand-name": "AlapacaFlow",
      "footer-brand-platform": "Meditrack plataforma",
      "footer-description":
        "Transformando el cuidado geriátrico a través de tecnología innovadora que conecta pacientes, familias y profesionales de la salud.",
      "footer-email": "contacto@alpacaflow.com",
      "footer-phone": "+1 (555) 123-4567",
      "footer-location": "Lima, Perú",
      "footer-company-title": "Empresa",
      "footer-about-us": "Sobre nosotros",
      "footer-contact": "Contacto",
      "footer-product-title": "Producto",
      "footer-meditrack": "Meditrack",
      "footer-features": "Características",
      "footer-pricing": "Precios",
      "footer-legal-title": "Legal",
      "footer-privacy": "Privacidad",
      "footer-terms": "Términos de Servicio",
      "footer-cookies": "Cookies",
      "footer-security": "Seguridad",
      "footer-copyright-part-1":
        "© 2025 AlpacaFlow. Todos los derechos reservados. Hecho con",
      "footer-copyright-part-2": "para mejorar vidas.",
    },
  };

  // Función para cambiar el idioma
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    localStorage.setItem("language", currentLanguage);
    updateTexts();
    languageToggle.textContent = currentLanguage === "en" ? "ES" : "EN";
  }

  // Función para actualizar los textos
  function updateTexts() {
    Object.keys(translations[currentLanguage]).forEach((key) => {
      const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
      if (elements.length > 0) {
        elements.forEach((el) => {
          if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = translations[currentLanguage][key];
          } else {
            el.innerHTML = translations[currentLanguage][key];
          }
        });
      }
    });
  }

  // Inicializar
  updateTexts();
  languageToggle.textContent = currentLanguage === "en" ? "ES" : "EN";

  // Event listener para el botón
  languageToggle.addEventListener("click", toggleLanguage);
});
