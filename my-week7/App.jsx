// Week 7: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 6 vanilla JavaScript portfolio to React

import './App.css'
import { useEffect } from 'react'
import Navbar from './src/components/Navbar'
import Projects from './src/components/Projects'

function App() {
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 6 event handler functions here
  // In Week 6, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)
  //
  // HINT: These will be regular JavaScript functions defined inside App component
  // Example from Week 6:
  //   const filterProjects = (category) => {
  //     // Your filtering logic here
  //   }
  
  // TODO: Add smooth scroll handler
  // Replace: navLinks.forEach(link => link.addEventListener('click', ...))
  // With: const handleNavClick = (e) => { ... }
  // State: Boolean to decide if mobile menu is open or not 

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // TODO: Add form validation functions
  // You'll need: isValidEmail, showError, clearError, showSuccess
  // These can stay mostly the same!
  // State: Needs user input /form values and validation errors for which fields are incorrect

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const clearError = (input) => {
    input.parentElement.querySelector('.error-message')?.remove();
    input.classList.remove('error');
  };

  const showError = (input, message) => {
    clearError(input);
    input.classList.add('error');
    input.classList.remove('success');

    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    input.parentElement.appendChild(errorElement);
  };

  const showSuccess = (input) => {
    clearError(input);
    input.classList.add('success');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const contactForm = e.currentTarget;
    const nameInput = contactForm.elements.name;
    const emailInput = contactForm.elements.email;
    const messageInput = contactForm.elements.message;
    const formData = {};

    // Your validation logic here
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let isValid = true;

    if (nameValue.length < 2) {
      showError(nameInput, 'Name must be at least 2 characters');
      isValid = false;
    } else {
      formData.name = nameValue;
    }
     if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
     }else {
        formData.email = emailValue;
      }

    // Validate message
    if (messageValue.length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        isValid = false;
    } else {
        formData.message = messageValue;
    }

    // etc - all your Week 6 validation logic

    if (isValid) {
      console.log('Form submitted!');
      // Show success message
      // Remove any existing success messages
            const existingSuccess = contactForm.querySelector('.success-message');
            if (existingSuccess) {
                existingSuccess.remove();
            }

            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';

            // Append success message to form
            contactForm.appendChild(successMessage);

            // Log form data (in real app, this would be sent to server)
            console.log('Form submitted with data:', formData);

            // Clear form and remove success classes after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                successMessage.remove();

                // Remove success classes from inputs
                document.querySelectorAll('.form-group input.success, .form-group textarea.success').forEach(input => {
                    input.classList.remove('success');
                });
            }, 3000);
    }
  };


  // TODO: Add form submit handler
  // Replace: contactForm.addEventListener('submit', ...)
  // With: const handleFormSubmit = (e) => { ... }


  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link =>
          link.classList.remove('active')
        );
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };

  // Copy this block as is: attach the listener once on load, remove it on unload
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 6 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 8 will teach you how to break this into smaller pieces

  return (
    <div className="portfolio">
      <Navbar />
      
      
      {/* TODO: Add your hero section here */}

      {/* <!-- Hero Section --> */}
      <section id="home" className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Alex Johnson</h1>
            <p className="hero-subtitle">Frontend Developer & UI Designer</p>
            <p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary" onClick={handleNavClick}>View Projects</a>
                <a href="#contact" className="btn btn-secondary" onClick={handleNavClick}>Get In Touch</a>
            </div>
        </div>
      </section>

      
      {/* TODO: Add your about section here */}

       {/* <!-- About Section --> */}
      <section id="about" className="section">
        <div className="container">
            <h2>About Me</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>I'm a passionate frontend developer with 3 years of experience creating engaging digital experiences. I specialize in React, modern CSS, and responsive design patterns that work beautifully across all devices.</p>
                    <div className="about-details">
                        <div className="detail-item">
                            <span className="detail-icon">📍</span>
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-icon">✉️</span>
                            <a href="mailto:alex@example.com">alex@example.com</a>
                        </div>
                        <div className="detail-item">
                            <span className="detail-icon">📱</span>
                            <span>(555) 123-4567</span>
                        </div>
                    </div>
                </div>
                <div className="about-availability">
                    <h3>Currently Available For:</h3>
                    <div className="availability-tags">
                        <span className="tag tag-available">Freelance</span>
                        <span className="tag tag-available">Full-Time</span>
                        <span className="tag tag-available">Remote</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      
      {/* TODO: Add your skills section here */}
      {/* <!-- Skills Section --> */}
      <section id="skills" className="section section-alt">
        <div className="container">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skill-header">
                        <span className="skill-icon">⚛️</span>
                        <h3 className="skill-name">React</h3>
                    </div>
                    <div className="skill-category">Frontend Framework</div>
                    <div className="skill-level">
                        <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                </div>

                <div className="skill-card">
                    <div className="skill-header">
                        <span className="skill-icon">🎨</span>
                        <h3 className="skill-name">CSS3</h3>
                    </div>
                    <div className="skill-category">Styling</div>
                    <div className="skill-level">
                        <div className="skill-progress" style={{ '--skill-level': '95%' }}></div>
                    </div>
                    <span className="skill-percentage">95%</span>
                </div>

                <div className="skill-card">
                    <div className="skill-header">
                        <span className="skill-icon">📱</span>
                        <h3 className="skill-name">Responsive Design</h3>
                    </div>
                    <div className="skill-category">Design</div>
                    <div className="skill-level">
                        <div className="skill-progress" style={{ '--skill-level': '88%' }}></div>
                    </div>
                    <span className="skill-percentage">88%</span>
                </div>

                <div className="skill-card">
                    <div className="skill-header">
                        <span className="skill-icon">🚀</span>
                        <h3 className="skill-name">JavaScript</h3>
                    </div>
                    <div className="skill-category">Programming</div>
                    <div className="skill-level">
                        <div className="skill-progress" style={{ '--skill-level': '85%' }}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                </div>

                <div className="skill-card">
                    <div className="skill-header">
                        <span className="skill-icon">🎯</span>
                        <h3 className="skill-name">Figma</h3>
                    </div>
                    <div className="skill-category">Design Tools</div>
                    <div className="skill-level">
                        <div className="skill-progress" style={{ '--skill-level': '80%' }}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                </div>

                <div className="skill-card">
                    <div className="skill-header">
                        <span className="skill-icon">🌐</span>
                        <h3 className="skill-name">Node.js</h3>
                    </div>
                    <div className="skill-category">Backend</div>
                    <div className="skill-level">
                        <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
                    </div>
                    <span className="skill-percentage">75%</span>
                </div>
            </div>
        </div>
      </section>

      
      <Projects />



      {/* TODO: Add your contact form here */}
      {/* HINT: Form will use onSubmit={handleFormSubmit} */}
      {/* HINT: Inputs will use onChange for real-time validation */}
      {/* <!-- Contact Section --> */}
      <section id="contact" className="section section-alt">
        <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
                <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>

                {/* <!-- TODO: Add JavaScript to validate this form in real-time --> */}
                <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" name="name" required/>
                            {/* <!-- TODO: Add error message element here --> */}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" required/>
                            {/* <!-- TODO: Add error message element here --> */}
                        </div>

                        <div className="form-group form-group-full">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject"/>
                        </div>

                        <div className="form-group form-group-full">
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                            {/* <!-- TODO: Add error message element here --> */}
                        </div>

                        <div className="form-group form-group-full">
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                    {/* <!-- TODO: Add success message element here -->*/}
                </form> 
            </div>
        </div>
      </section>



      {/* TODO: Add your footer here */}

      {/* <!-- Footer --> */}
      <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="social-link">GitHub</a>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Dribbble</a>
                </div>
            </div>
        </div>
      </footer>

    </div>
  )
}

export default App
