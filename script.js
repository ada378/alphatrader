/**
 * AI SCALER & PROP TRADING SYSTEMS - INTERACTIVE SCRIPT
 * High Conversion Logic, Profit Calculator, Live Tickers & Direct WhatsApp Bridge
 * Founder: Manoj Mandal | Contact: +91 8541952354
 */

(function () {
  'use strict';

  // Founder & Official Contact
  const WHATSAPP_PHONE = '918541952354';
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;
  const CALL_URL = `tel:+918541952354`;
  const TELEGRAM_URL = 'https://t.me/+RhO9n8NV1Ck0ZjY1';

  document.addEventListener('DOMContentLoaded', () => {
    initCalculator();
    initUrgencyTimer();
    initTickerLiveUpdates();
    initMemberCounter();
    initFaqAccordion();
    initSocialProof();
    initConsultationForm();
    initButtonRipples();
    initTelegramLinks();
  });

  /* ==========================================================================
     TELEGRAM DYNAMIC MEMBER COUNTER & LINKS
     ========================================================================== */
  function initMemberCounter() {
    const counterEl = document.getElementById('liveMemberCount');
    if (!counterEl) return;

    let baseCount = 54820;
    setInterval(() => {
      baseCount += Math.floor(Math.random() * 2) + 1;
      counterEl.textContent = `${baseCount.toLocaleString()}+`;
    }, 7000);
  }

  function initTelegramLinks() {
    const tgButtons = document.querySelectorAll('.js-telegram-link');
    tgButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // ensure valid href
        if (!btn.getAttribute('href') || btn.getAttribute('href') === '#') {
          e.preventDefault();
          window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }

  /* ==========================================================================
     1. INTERACTIVE PROP FIRM PROFIT CALCULATOR
     ========================================================================== */
  function initCalculator() {
    let currentAccountSize = 100000;
    let currentReturnPercent = 10;
    let currentSplit = 0.80; // 80%

    const sizeButtons = document.querySelectorAll('.size-btn');
    const returnSlider = document.getElementById('returnSlider');
    const returnValDisplay = document.getElementById('returnValDisplay');
    const splitButtons = document.querySelectorAll('.split-btn');

    const payoutUsdDisplay = document.getElementById('calcPayoutUsd');
    const payoutInrDisplay = document.getElementById('calcPayoutInr');
    const grossProfitDisplay = document.getElementById('calcGrossProfit');
    const propSplitDisplay = document.getElementById('calcPropSplit');
    const feeRefundDisplay = document.getElementById('calcFeeRefund');
    const calcCtaBtn = document.getElementById('calcCtaBtn');

    function updateCalculations() {
      const grossProfit = currentAccountSize * (currentReturnPercent / 100);
      const traderPayout = grossProfit * currentSplit;
      const inrEquivalent = Math.round(traderPayout * 85.5);

      if (payoutUsdDisplay) {
        payoutUsdDisplay.textContent = `+$${Math.round(traderPayout).toLocaleString('en-US')}`;
      }
      if (payoutInrDisplay) {
        payoutInrDisplay.textContent = `≈ ₹${inrEquivalent.toLocaleString('en-IN')} / Month`;
      }
      if (grossProfitDisplay) {
        grossProfitDisplay.textContent = `+$${Math.round(grossProfit).toLocaleString('en-US')}`;
      }
      if (propSplitDisplay) {
        propSplitDisplay.textContent = `${Math.round(currentSplit * 100)}% / ${Math.round((1 - currentSplit) * 100)}%`;
      }
      if (feeRefundDisplay) {
        let estFee = 499;
        if (currentAccountSize === 10000) estFee = 155;
        else if (currentAccountSize === 25000) estFee = 250;
        else if (currentAccountSize === 50000) estFee = 345;
        else if (currentAccountSize === 100000) estFee = 540;
        else if (currentAccountSize === 200000) estFee = 1080;
        feeRefundDisplay.textContent = `+$${estFee} (100% Refunded)`;
      }

      // Update CTA WhatsApp message with dynamic plan parameters
      if (calcCtaBtn) {
        const msg = encodeURIComponent(
          `Hi Manoj, I calculated a $${currentAccountSize.toLocaleString()} Funded Account plan with projected $${Math.round(traderPayout).toLocaleString()} monthly payout on AI Scaler. I want to pass this challenge with your AI bot!`
        );
        calcCtaBtn.href = `${WHATSAPP_BASE_URL}?text=${msg}`;
      }
    }

    // Account size click listeners
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentAccountSize = parseInt(btn.dataset.size, 10) || 100000;
        updateCalculations();
      });
    });

    // Return slider listener
    if (returnSlider) {
      returnSlider.addEventListener('input', (e) => {
        currentReturnPercent = parseInt(e.target.value, 10) || 10;
        if (returnValDisplay) {
          returnValDisplay.textContent = `${currentReturnPercent}%`;
        }
        updateCalculations();
      });
    }

    // Split buttons listener
    splitButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        splitButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSplit = parseFloat(btn.dataset.split) || 0.80;
        updateCalculations();
      });
    });

    // Initial run
    updateCalculations();
  }

  /* ==========================================================================
     2. URGENCY COUNTDOWN TIMER (ROLLING 15 MINUTES)
     ========================================================================== */
  function initUrgencyTimer() {
    const timerEl = document.getElementById('countdownTimer');
    if (!timerEl) return;

    let timeLeft = 14 * 60 + 45; // 14 mins 45 secs

    setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (--timeLeft < 0) {
        timeLeft = 15 * 60; // reset
      }
    }, 1000);
  }

  /* ==========================================================================
     3. LIVE TICKER TICK SIMULATOR
     ========================================================================== */
  function initTickerLiveUpdates() {
    const liveItems = [
      { id: 'tick-xau', base: 2748.20, precision: 2, spread: 0.8 },
      { id: 'tick-eur', base: 1.0852, precision: 4, spread: 0.0003 },
      { id: 'tick-us30', base: 42380.0, precision: 1, spread: 4.0 },
      { id: 'tick-nas', base: 20410.5, precision: 1, spread: 3.5 }
    ];

    setInterval(() => {
      const randomItem = liveItems[Math.floor(Math.random() * liveItems.length)];
      const el = document.getElementById(randomItem.id);
      if (!el) return;

      const delta = (Math.random() - 0.48) * randomItem.spread;
      const newPrice = (parseFloat(el.dataset.price || randomItem.base) + delta).toFixed(randomItem.precision);
      el.dataset.price = newPrice;
      el.textContent = `$${parseFloat(newPrice).toLocaleString()}`;
    }, 2800);
  }

  /* ==========================================================================
     4. FAQ ACCORDION
     ========================================================================== */
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

  /* ==========================================================================
     5. SOCIAL PROOF NOTIFICATION TOAST
     ========================================================================== */
  function initSocialProof() {
    const toast = document.getElementById('socialProofToast');
    const toastName = document.getElementById('toastName');
    const toastAction = document.getElementById('toastAction');
    const toastTime = document.getElementById('toastTime');

    if (!toast || !toastName) return;

    const notifications = [
      { name: 'Arjun M. from Bangalore', action: 'passed FTMO $100,000 Phase 1!', time: '1 min ago' },
      { name: 'Rohan K. from Delhi NCR', action: 'secured $50,000 FundedNext Account!', time: 'Just now' },
      { name: 'Pooja V. from Mumbai', action: 'received $3,840 Prop Payout today!', time: '4 mins ago' },
      { name: 'Vikram S. from Hyderabad', action: 'connected XScalper Bot to MetaTrader 5', time: 'Just now' },
      { name: 'Sameer P. from Pune', action: 'cleared $200,000 Challenge in 8 days!', time: '2 mins ago' },
      { name: 'Kunal D. from Ahmedabad', action: 'booked 1-on-1 Strategy Call with Manoj', time: 'Just now' }
    ];

    let currentIndex = 0;

    function showToast() {
      const item = notifications[currentIndex];
      toastName.textContent = item.name;
      toastAction.textContent = item.action;
      toastTime.textContent = item.time;

      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);

      currentIndex = (currentIndex + 1) % notifications.length;
    }

    // Initial popup after 4 seconds
    setTimeout(showToast, 4000);
    // Recurring every 16 seconds
    setInterval(showToast, 16000);
  }

  /* ==========================================================================
     6. CONSULTATION FORM WITH DIRECT WHATSAPP BRIDGE
     ========================================================================== */
  function initConsultationForm() {
    const form = document.getElementById('consultForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || 'Trader';
      const phone = document.getElementById('formPhone')?.value.trim() || '';
      const accountSize = document.getElementById('formAccount')?.value || '$50,000';
      const propFirm = document.getElementById('formPropFirm')?.value || 'FTMO';
      const experience = document.getElementById('formExp')?.value || 'Beginner';

      if (!phone) {
        alert('Please enter your mobile or WhatsApp number.');
        return;
      }

      // Format WhatsApp lead message
      const text = encodeURIComponent(
        `*New Prop Challenge Request via AI Scaler:*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📱 *Phone:* ${phone}\n` +
        `💼 *Target Account:* ${accountSize}\n` +
        `🎯 *Target Prop Firm:* ${propFirm}\n` +
        `📈 *Experience:* ${experience}\n\n` +
        `Hello Manoj! I want to consult with you and start passing my challenge.`
      );

      // Open WhatsApp directly
      window.open(`${WHATSAPP_BASE_URL}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  }

  /* ==========================================================================
     7. TACTILE BUTTON RIPPLE EFFECT
     ========================================================================== */
  function initButtonRipples() {
    const buttons = document.querySelectorAll(
      '.btn-hero-primary, .btn-hero-telegram, .btn-calc-cta, .btn-submit-form, .btn-founder-whatsapp, .btn-nav-whatsapp, .btn-nav-telegram, .btn-tg-large, .sticky-tg-btn'
    );

    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const circle = document.createElement('span');
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${(e.clientX || rect.left + radius) - rect.left - radius}px`;
        circle.style.top = `${(e.clientY || rect.top + radius) - rect.top - radius}px`;
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.background = 'rgba(255, 255, 255, 0.4)';
        circle.style.transform = 'scale(0)';
        circle.style.animation = 'ripple 0.6s linear';
        circle.style.pointerEvents = 'none';

        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
      });
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

})();
