// State needed: what the user has typed and which fields have errors (two objects).

import { useState } from 'react';

const emptyFormData = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(emptyFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    if (name === 'name' && !trimmedValue) {
      return 'Name is required';
    }

    if (name === 'email') {
      if (!trimmedValue) {
        return 'Email is required';
      }
      if (!trimmedValue.includes('@')) {
        return 'Please enter a valid email address';
      }
    }

    if (name === 'message') {
      if (!trimmedValue) {
        return 'Message is required';
      }
      if (trimmedValue.length < 10) {
        return 'Message must be at least 10 characters';
      }
    }

    return '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
    setIsSubmitted(false);

    if (errors[name]) {
      setErrors((previousErrors) => {
        const nextErrors = { ...previousErrors };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);

    setErrors((previousErrors) => {
      const nextErrors = { ...previousErrors };
      if (error) {
        nextErrors[name] = error;
      } else {
        delete nextErrors[name];
      }
      return nextErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = Object.entries(formData).reduce(
      (validationErrors, [name, value]) => {
        const error = validateField(name, value);
        if (error) {
          validationErrors[name] = error;
        }
        return validationErrors;
      },
      {},
    );

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
      setFormData(emptyFormData);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always interested in hearing about new opportunities and
            projects. Feel free to reach out!
          </p>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <div className="form-group form-group-full">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>

            {isSubmitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;