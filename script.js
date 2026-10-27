/**
 * ALPHA TRADERS - High Conversion Telegram Landing Script
 * Optimized for Mobile Ads & Instant Engagement
 */

(function () {
  'use strict';

  // The Official Telegram Link specified by user
  const TELEGRAM_URL = 'https://t.me/+RhO9n8NV1Ck0ZjY1';

  // 1. Direct Telegram Redirect Helper
  function openTelegram(event) {
    if (event) {
      // create click ripple
      createRipple(event);
    }
    
    // Trigger Telegram URL
    window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer');
  }

  // Bind click handlers to all Telegram CTA elements
  document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.js-telegram-link, .banner-media-container');
    
    ctaButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        // Prevent default if it's an anchor with #
        if (this.tagName === 'A' && (!this.getAttribute('href') || this.getAttribute('href') === '#')) {
          e.preventDefault();
        }
        openTelegram(e);
      });
    });

    // 2. Urgent Countdown Timer (5 Minutes)
    startCountdown(5 * 60);

    // 3. Dynamic Live Member Counter
    initMemberCounter();

    // 4. Social Proof Toasts (Recent Joiners)
    initSocialProof();

    // 5. FAQ Accordion Toggle
    initFaqAccordion();
  });

  // Ripple effect function
  function createRipple(event) {
    const button = event.currentTarget;
    if (!button) return;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${(event.clientX || rect.left + radius) - rect.left - radius}px`;
    circle.style.top = `${(event.clientY || rect.top + radius) - rect.top - radius}px`;
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.background = 'rgba(255, 255, 255, 0.4)';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'rippleAnim 0.6s linear';
    circle.style.pointerEvents = 'none';

    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }

  // Countdown timer implementation
  function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    const timerElement = document.getElementById('countdownTimer');
    if (!timerElement) return;

    const interval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      timerElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (--timer < 0) {
        // Reset to 3 minutes for perpetual urgency
        timer = 3 * 60;
      }
    }, 1000);
  }

  // Dynamic Live Member Counter
  function initMemberCounter() {
    const counterEl = document.getElementById('liveMemberCount');
    if (!counterEl) return;

    let baseCount = 54820;
    
    setInterval(() => {
      // Randomly increment by 1 or 2
      const inc = Math.floor(Math.random() * 2) + 1;
      baseCount += inc;
      counterEl.textContent = baseCount.toLocaleString();
    }, 8000);
  }

  // Social Proof Toast Notification
  function initSocialProof() {
    const names = [
      'Rahul S. from Mumbai',
      'Amit V. from Delhi',
      'Karan P. from Ahmedabad',
      'Pooja M. from Bangalore',
      'Rohit K. from Jaipur',
      'Vikram S. from Pune',
      'Deepak N. from Hyderabad',
      'Sameer G. from Kolkata'
    ];

    const actions = [
      'just joined the VIP Telegram channel!',
      'claimed their free signals pass!',
      'accessed free trading course!',
      'joined Alpha Traders community!'
    ];

    const toastEl = document.getElementById('socialProofToast');
    const toastNameEl = document.getElementById('toastName');
    const toastActionEl = document.getElementById('toastAction');
    const toastTimeEl = document.getElementById('toastTime');

    if (!toastEl || !toastNameEl) return;

    function showRandomNotification() {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      toastNameEl.textContent = randomName;
      if (toastActionEl) toastActionEl.textContent = randomAction;
      if (toastTimeEl) toastTimeEl.textContent = 'Just now';

      toastEl.classList.add('show');

      setTimeout(() => {
        toastEl.classList.remove('show');
      }, 4500);
    }

    // First trigger after 3.5 seconds
    setTimeout(showRandomNotification, 3500);

    // Repeat every 14 seconds
    setInterval(showRandomNotification, 14000);
  }

  // FAQ Accordion
  function initFaqAccordion() {
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
      card.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        faqCards.forEach(c => c.classList.remove('open'));
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    });
  }

  // Ripple keyframe injection
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleAnim {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

})();
