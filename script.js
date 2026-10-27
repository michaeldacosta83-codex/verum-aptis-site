const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
    navigation.classList.toggle('is-open', !expanded);
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('is-open');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  const hookUrl = 'https://hooks.zapier.com/hooks/catch/28161196/494ewj9/';
  const status = document.querySelector('#form-status');
  const submitButton = enquiryForm.querySelector('button[type="submit"]');

  enquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const formData = new FormData(enquiryForm);
    formData.set('source', 'Verum Aptis website');
    formData.set('submitted_at', new Date().toISOString());
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }
    if (status) status.textContent = 'Sending your enquiry…';

    try {
      await fetch(hookUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData)
      });
      enquiryForm.reset();
      if (status) status.textContent = 'Thanks—your enquiry is on its way. We’ll be in touch personally.';
    } catch (error) {
      if (status) status.textContent = 'We couldn’t send your enquiry just now. Please try again in a moment.';
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send enquiry <span>↗</span>';
      }
    }
  });
}

