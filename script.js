/**
 * ALPHA TRADERS - SIMPLE LANDING PAGE
 * Basic tracking and smooth interactions
 */

(function () {
  'use strict';

  // Track button clicks for Meta Pixel
  document.addEventListener('DOMContentLoaded', () => {
    // Duplicate marquee content for seamless infinite scroll
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
      const originalContent = marqueeContent.innerHTML;
      marqueeContent.innerHTML = originalContent + originalContent + originalContent;
    }

    // Track Telegram clicks
    const telegramLinks = document.querySelectorAll('a[href*="t.me"]');
    telegramLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (typeof fbq !== 'undefined') {
          fbq('track', 'Lead', { content_name: 'Telegram Join' });
        }
      });
    });

    // Track WhatsApp clicks
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp.com"]');
    whatsappLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (typeof fbq !== 'undefined') {
          fbq('track', 'Lead', { content_name: 'WhatsApp Join' });
        }
      });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

})();
