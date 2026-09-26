/**
 * Al Sadiq Milk & Fresh Drinks - AI Agent & Intelligence Engine
 * Dual-Mode Assistant: Customer Virtual Guide & Staff Real-Time AI Accountant
 * Powered by Groq Cloud High-Speed Inference (LLaMA & Qwen)
 * Location: GT Road, Dina, Pakistan
 */

(function () {
  "use strict";

  const DEFAULT_GROQ_API_KEY = "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";
  const DEFAULT_MODEL = "qwen/qwen3.8-27b";
  const FALLBACK_MODELS = ["qwen/qwen3.8-27b", "openai/gpt-oss-20b", "openai/gpt-oss-120b"];
  const STORAGE_KEY_AI = "alsadiq_ai_settings_v1";

  class AlSadiqAIAgent {
    constructor() {
      this.isStaff = !!document.getElementById("staffView") || window.location.pathname.includes("staff.html");
      this.mode = this.isStaff ? "staff" : "customer";
      this.isOpen = false;
      this.isGenerating = false;
      this.isListening = false;
      this.recognition = null;
      this.messages = [];
      this.config = this.loadConfig();

      this.init();
    }

    loadConfig() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_AI);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            apiKey: parsed.apiKey || DEFAULT_GROQ_API_KEY,
            model: parsed.model || DEFAULT_MODEL,
            sound: parsed.sound !== false
          };
        }
      } catch (e) {}
      return {
        apiKey: DEFAULT_GROQ_API_KEY,
        model: DEFAULT_MODEL,
        sound: true
      };
    }

    saveConfig(newCfg) {
      this.config = { ...this.config, ...newCfg };
      try {
        localStorage.setItem(STORAGE_KEY_AI, JSON.stringify(this.config));
      } catch (e) {}
    }

    init() {
      this.injectStyles();
      this.createWidgetDOM();
      this.attachEvents();
      this.initSpeechRecognition();
      this.renderInitialWelcome();
    }

    injectStyles() {
      if (document.getElementById("alsadiq-ai-styles")) return;
      const styleEl = document.createElement("style");
      styleEl.id = "alsadiq-ai-styles";
      styleEl.textContent = `
        /* --- Al Sadiq AI Agent Widget Styles --- */
        .ai-fab-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
        }

        /* Adjust on mobile so it doesn't overlap bottom navigation or sticky checkout */
        @media (max-width: 768px) {
          .ai-fab-container {
            bottom: 84px;
            right: 16px;
          }
        }

        .ai-fab-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #059669 0%, #064e3b 50%, #d97706 100%);
          border: 2px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          box-shadow: 0 10px 25px -4px rgba(5, 150, 105, 0.5), 0 0 16px rgba(217, 119, 6, 0.35);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
          outline: none;
        }

        .ai-fab-btn:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 14px 30px -4px rgba(5, 150, 105, 0.65), 0 0 24px rgba(217, 119, 6, 0.5);
        }

        .ai-fab-btn:active {
          transform: scale(0.96);
        }

        .ai-fab-icon-wrap {
          position: relative;
          font-size: 1.55rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-fab-sparkle {
          position: absolute;
          top: -6px;
          right: -8px;
          font-size: 0.85rem;
          color: #fbbf24;
          animation: aiSparklePulse 2s infinite ease-in-out;
        }

        @keyframes aiSparklePulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
          50% { transform: scale(1.3) rotate(20deg); opacity: 1; }
        }

        .ai-fab-pulse-dot {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: aiPulseDot 2s infinite cubic-bezier(0.66, 0, 0, 1);
        }

        @keyframes aiPulseDot {
          to { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        }

        .ai-fab-badge-pill {
          position: absolute;
          bottom: -8px;
          background: #0f172a;
          color: #f8fafc;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          padding: 2px 7px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          white-space: nowrap;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
        }

        /* --- Chat Window --- */
        .ai-chat-window {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 410px;
          max-width: calc(100vw - 32px);
          height: 590px;
          max-height: calc(100vh - 120px);
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(5, 150, 105, 0.2);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9999;
          animation: aiWindowSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes aiWindowSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 480px) {
          .ai-chat-window {
            bottom: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
          }
        }

        /* Header */
        .ai-chat-header {
          background: linear-gradient(135deg, #064e3b 0%, #059669 100%);
          color: #ffffff;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .ai-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-avatar {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
        }

        .ai-title-wrap h4 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: -0.2px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ai-header-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 2px;
        }

        .ai-mode-tag {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.22);
          text-transform: uppercase;
        }

        .ai-live-indicator {
          font-size: 0.7rem;
          color: #a7f3d0;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .ai-live-indicator::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
        }

        .ai-header-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ai-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.12);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.15s;
        }

        .ai-icon-btn:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        /* Context Banner */
        .ai-context-banner {
          background: #ecfdf5;
          border-bottom: 1px solid #d1fae5;
          padding: 8px 14px;
          font-size: 0.76rem;
          color: #065f46;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
        }

        .ai-context-banner i {
          color: #059669;
          font-size: 0.85rem;
          margin-right: 4px;
        }

        /* Chips Scroll */
        .ai-chips-wrap {
          padding: 8px 12px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          gap: 6px;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: thin;
        }

        .ai-chips-wrap::-webkit-scrollbar {
          height: 4px;
        }

        .ai-chips-wrap::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        .ai-chip {
          padding: 4px 10px;
          font-size: 0.74rem;
          font-weight: 600;
          background: #ffffff;
          color: #334155;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .ai-chip:hover {
          background: #059669;
          color: #ffffff;
          border-color: #059669;
          transform: translateY(-1px);
        }

        /* Messages Body */
        .ai-messages-list {
          flex: 1;
          overflow-y: auto;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f8fafc;
          scrollbar-width: thin;
        }

        .ai-message {
          display: flex;
          flex-direction: column;
          max-width: 88%;
          animation: aiMsgFadeIn 0.2s ease-out;
        }

        @keyframes aiMsgFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ai-msg-user {
          align-self: flex-end;
          align-items: flex-end;
        }

        .ai-msg-bot {
          align-self: flex-start;
          align-items: flex-start;
        }

        .ai-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 0.86rem;
          line-height: 1.5;
          word-break: break-word;
          position: relative;
        }

        .ai-msg-user .ai-bubble {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: #ffffff;
          border-bottom-right-radius: 4px;
          box-shadow: 0 3px 8px rgba(5, 150, 105, 0.25);
        }

        .ai-msg-bot .ai-bubble {
          background: #ffffff;
          color: #0f172a;
          border: 1px solid #e2e8f0;
          border-bottom-left-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .ai-msg-time {
          font-size: 0.68rem;
          color: #94a3b8;
          margin-top: 3px;
          padding: 0 4px;
        }

        .ai-bubble-urdu {
          font-family: var(--font-urdu, 'Noto Nastaliq Urdu', serif);
          direction: rtl;
          text-align: right;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        /* Markdown styling inside bubbles */
        .ai-bubble p { margin: 0 0 8px 0; }
        .ai-bubble p:last-child { margin-bottom: 0; }
        .ai-bubble strong { font-weight: 700; color: inherit; }
        .ai-bubble ul, .ai-bubble ol { margin: 4px 0 8px 18px; padding: 0; }
        .ai-bubble li { margin-bottom: 3px; }
        .ai-bubble hr { border: none; border-top: 1px solid #e2e8f0; margin: 8px 0; }
        .ai-bubble table {
          width: 100%;
          border-collapse: collapse;
          margin: 6px 0;
          font-size: 0.8rem;
        }
        .ai-bubble th, .ai-bubble td {
          border: 1px solid #cbd5e1;
          padding: 4px 8px;
          text-align: left;
        }
        .ai-bubble th {
          background: #f1f5f9;
          font-weight: 700;
        }
        .ai-bubble code {
          background: rgba(0, 0, 0, 0.06);
          padding: 2px 4px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.82rem;
        }

        /* Typing indicator */
        .ai-typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          width: fit-content;
        }

        .ai-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          animation: aiTypingBounce 1.4s infinite ease-in-out both;
        }

        .ai-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .ai-typing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes aiTypingBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Input Bar */
        .ai-input-area {
          padding: 10px 12px;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-mic-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .ai-mic-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .ai-mic-btn.listening {
          background: #ef4444;
          color: #ffffff;
          border-color: #dc2626;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.3);
          animation: aiMicPulse 1s infinite alternate;
        }

        @keyframes aiMicPulse {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }

        .ai-text-input {
          flex: 1;
          min-height: 40px;
          max-height: 90px;
          border: 1.5px solid #cbd5e1;
          border-radius: 20px;
          padding: 9px 14px;
          font-family: inherit;
          font-size: 0.88rem;
          outline: none;
          resize: none;
          line-height: 1.4;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .ai-text-input:focus {
          border-color: #059669;
          box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
        }

        .ai-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.95rem;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(5, 150, 105, 0.3);
          transition: transform 0.15s, background 0.2s;
        }

        .ai-send-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .ai-send-btn:active {
          transform: scale(0.95);
        }

        /* Settings Modal Overlay */
        .ai-settings-modal {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 10000;
          animation: aiMsgFadeIn 0.2s;
        }

        .ai-settings-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 18px;
          width: 100%;
          max-width: 350px;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        }

        .ai-settings-box h4 {
          margin: 0 0 12px 0;
          font-size: 1rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-settings-field {
          margin-bottom: 12px;
        }

        .ai-settings-field label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 4px;
        }

        .ai-settings-field input, .ai-settings-field select {
          width: 100%;
          box-sizing: border-box;
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 0.82rem;
          outline: none;
        }
      `;
      document.head.appendChild(styleEl);
    }

    createWidgetDOM() {
      if (document.getElementById("alsadiqAiFabContainer")) return;

      const roleTitle = this.isStaff ? "AI Accountant & Manager" : "Al Sadiq AI Assistant";
      const roleBadge = this.isStaff ? "Staff AI Accountant" : "Customer Guide";
      const bannerText = this.isStaff 
        ? "📊 Live Accounting & Stock Mode: Daily Sales, Milk In/Out, Food Expenses & Profit."
        : "🥛 Pure Milk, Shakes, Timings & Quick Booking Assistance.";

      const container = document.createElement("div");
      container.id = "alsadiqAiFabContainer";
      container.className = "ai-fab-container";
      container.innerHTML = `
        <!-- Floating Action Button -->
        <button type="button" id="aiFabBtn" class="ai-fab-btn" title="${roleTitle} (الصادق سمارٹ ایجنٹ)">
          <div class="ai-fab-icon-wrap">
            <i class="fa-solid fa-sparkles ai-fab-sparkle"></i>
            <i class="fa-solid fa-headset"></i>
          </div>
          <span class="ai-fab-pulse-dot"></span>
          <span class="ai-fab-badge-pill">${this.isStaff ? 'STAFF AI' : 'AI CHAT'}</span>
        </button>

        <!-- Chat Window -->
        <div id="aiChatWindow" class="ai-chat-window" style="display:none;">
          
          <!-- Header -->
          <div class="ai-chat-header">
            <div class="ai-header-left">
              <div class="ai-avatar">
                <i class="fa-solid ${this.isStaff ? 'fa-calculator' : 'fa-robot'}"></i>
              </div>
              <div class="ai-title-wrap">
                <h4>
                  <span>${roleTitle}</span>
                </h4>
                <div class="ai-header-meta">
                  <span class="ai-mode-tag">${roleBadge}</span>
                  <span class="ai-live-indicator">Groq ⚡ Online</span>
                </div>
              </div>
            </div>
            <div class="ai-header-actions">
              <button type="button" class="ai-icon-btn" id="aiBtnSettings" title="API Settings"><i class="fa-solid fa-gear"></i></button>
              <button type="button" class="ai-icon-btn" id="aiBtnReset" title="Clear Chat / نیا سیشن"><i class="fa-solid fa-arrows-rotate"></i></button>
              <button type="button" class="ai-icon-btn" id="aiBtnClose" title="Minimize / بند کریں"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>

          <!-- Context Banner -->
          <div class="ai-context-banner">
            <div><i class="fa-solid fa-circle-info"></i> ${bannerText}</div>
          </div>

          <!-- Quick Action Chips -->
          <div class="ai-chips-wrap" id="aiChipsList"></div>

          <!-- Messages Scroll View -->
          <div class="ai-messages-list" id="aiMessagesList"></div>

          <!-- Input Area -->
          <div class="ai-input-area">
            <button type="button" class="ai-mic-btn" id="aiMicBtn" title="Voice Input (بول کر پوچھیں)">
              <i class="fa-solid fa-microphone"></i>
            </button>
            <textarea id="aiTextInput" class="ai-text-input" placeholder="${this.isStaff ? 'حساب کتاب یا خرچہ پوچھیں... / Ask figures...' : 'دودھ ریٹ، شیکس یا اوقات پوچھیں... / Ask here...'}" rows="1"></textarea>
            <button type="button" class="ai-send-btn" id="aiSendBtn" title="Send (ارسال کریں)">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>

          <!-- Settings Modal (Hidden by default) -->
          <div id="aiSettingsModal" class="ai-settings-modal" style="display:none;">
            <div class="ai-settings-box">
              <h4><i class="fa-solid fa-microchip" style="color:#059669;"></i> AI Agent Configuration</h4>
              
              <div class="ai-settings-field">
                <label>Groq Cloud API Key</label>
                <input type="password" id="aiSettingApiKey" placeholder="gsk_..." value="${this.config.apiKey}">
              </div>

              <div class="ai-settings-field">
                <label>Groq AI Model</label>
                <select id="aiSettingModel">
                  <option value="qwen/qwen3.8-27b" ${this.config.model === 'qwen/qwen3.8-27b' ? 'selected' : ''}>Qwen 3.8 27B (Fastest & Best Urdu - Recommended)</option>
                  <option value="openai/gpt-oss-120b" ${this.config.model === 'openai/gpt-oss-120b' ? 'selected' : ''}>GPT OSS 120B (Deep Reasoning)</option>
                  <option value="openai/gpt-oss-20b" ${this.config.model === 'openai/gpt-oss-20b' ? 'selected' : ''}>GPT OSS 20B (Compact Fast)</option>
                </select>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:14px;">
                <button type="button" class="btn-modal-cancel" id="aiCancelSettingsBtn" style="padding:6px 12px; font-size:0.8rem;">Cancel</button>
                <button type="button" class="btn-save-prices" id="aiSaveSettingsBtn" style="background:#059669; padding:6px 14px; font-size:0.8rem;">Save Settings</button>
              </div>
            </div>
          </div>

        </div>
      `;

      document.body.appendChild(container);
      this.renderQuickChips();
    }

    renderQuickChips() {
      const chipsContainer = document.getElementById("aiChipsList");
      if (!chipsContainer) return;

      let chips = [];
      if (this.isStaff) {
        chips = [
          { text: "📊 آج کا مکمل حساب کتاب (Full Summary)", prompt: "آج کا مکمل حساب کتاب، سیلز، دودھ کی آمد و نکاسی، خرچے اور خالص منافع کی مکمل سمری دیں" },
          { text: "🥛 دودھ کتنا آیا، نکلا اور بچا؟", prompt: "آج کل کتنا دودھ آیا، کتنا فروخت/استعمال ہوا، اور ٹینکس میں کتنا بیلنس بچا ہے؟" },
          { text: "🍔 کھانے پینے (Food) کا کتنا خرچہ ہوا؟", prompt: "آج کھانے پینے (Food/Mess/Tea) پر کل کتنا خرچہ ہوا ہے؟" },
          { text: "🌾 چارے اور ونڈے کا کتنا خرچہ ہوا؟", prompt: "آج فارم کے چارے اور ونڈے پر کتنا خرچہ ہوا؟" },
          { text: "💸 آج کے تمام خرچوں کی تفصیل", prompt: "آج کے تمام ریکارڈ شدہ خرچوں کی کیٹیگری وائز تفصیل اور کل ٹوٹل بتائیں" },
          { text: "💰 کل سیلز اور خالص منافع (Profit)", prompt: "آج کی کل سیلز کتنی ہیں اور سارے خرچے نکال کر خالص منافع (Net Profit) کتنا بچتا ہے؟" },
          { text: "📋 آن لائن پینڈنگ آرڈرز کتنے ہیں؟", prompt: "ابھی کاؤنٹر پر پینڈنگ اور تیاری کے منتظر کتنے آرڈرز ہیں؟" }
        ];
      } else {
        chips = [
          { text: "🥛 خالص دودھ کے ریٹس کیا ہیں؟", prompt: "الصادق کے پاس گائے، بھینس اور مکس خالص دودھ کے تازہ ترین ریٹس کیا ہیں؟" },
          { text: "🕒 دکان کے اوقات اور ایڈریس؟", prompt: "دکان کے اوقات اور لوکیشن کا مکمل ایڈریس بتائیں" },
          { text: "🥤 اسپیشل شیکس اور موہیٹو؟", prompt: "آپ کے پاس کون سے اسپیشل ملک شیکس، پروٹین شیکس اور موہیٹوز دستیاب ہیں؟" },
          { text: "🥣 ملائی دار دہی اور دیسی گھی؟", prompt: "دہی اور خالص دیسی گھی کے ریٹس اور کوالٹی کی تفصیل بتائیں" },
          { text: "🛵 آن لائن آرڈر کا طریقہ؟", prompt: "میں آن لائن بکنگ یا آرڈر کیسے کر سکتا ہوں؟" },
          { text: "📦 آرڈر ٹریک کیسے کریں؟", prompt: "میں اپنے آرڈر کا لائیو سٹیٹس کیسے چیک کروں؟" }
        ];
      }

      chipsContainer.innerHTML = chips.map(c => `
        <button type="button" class="ai-chip" data-prompt="${c.prompt.replace(/"/g, '&quot;')}">
          ${c.text}
        </button>
      `).join("");

      chipsContainer.querySelectorAll(".ai-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          const prompt = btn.getAttribute("data-prompt");
          if (prompt) {
            this.handleUserSend(prompt);
          }
        });
      });
    }

    renderInitialWelcome() {
      const messagesList = document.getElementById("aiMessagesList");
      if (!messagesList) return;

      let welcomeHtml = "";
      if (this.isStaff) {
        welcomeHtml = `
          <p><strong>السلام علیکم!</strong> میں الصادق بزنس و اکاؤنٹنٹ AI ایجنٹ ہوں۔</p>
          <p>میرے پاس آج کی تمام لائیو سیلز، دودھ کی آمد و نکاسی، چیلرز کا بیلنس، کھانے پینے و چارے کے اخراجات، اور خالص منافع کا مکمل ریکارڈ موجود ہے۔</p>
          <p>آپ مجھ سے الگ الگ خرچے (جیسے کھانا، چارہ، برف)، دودھ کا حساب یا ایک ساتھ آج کا مکمل کھاتہ پوچھ سکتے ہیں!</p>
        `;
      } else {
        welcomeHtml = `
          <p><strong>السلام علیکم! Welcome to Al Sadiq Milk & Fresh Drinks!</strong></p>
          <p>میں الصادق کا ورچوئل اسسٹنٹ ہوں۔ آپ مجھ سے ہمارے فارم کے خالص گائے و بھینس کے دودھ، ملائی دار دہی، دیسی گھی، فریش شیکس، ریٹس اور بکنگ کے بارے میں کچھ بھی پوچھ سکتے ہیں!</p>
        `;
      }

      this.addMessageToDOM("bot", welcomeHtml, true);
    }

    attachEvents() {
      const fabBtn = document.getElementById("aiFabBtn");
      const closeBtn = document.getElementById("aiBtnClose");
      const resetBtn = document.getElementById("aiBtnReset");
      const settingsBtn = document.getElementById("aiBtnSettings");
      const sendBtn = document.getElementById("aiSendBtn");
      const micBtn = document.getElementById("aiMicBtn");
      const textInput = document.getElementById("aiTextInput");

      const settingsModal = document.getElementById("aiSettingsModal");
      const cancelSettingsBtn = document.getElementById("aiCancelSettingsBtn");
      const saveSettingsBtn = document.getElementById("aiSaveSettingsBtn");

      if (fabBtn) {
        fabBtn.addEventListener("click", () => this.toggleChat());
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", () => this.closeChat());
      }
      if (resetBtn) {
        resetBtn.addEventListener("click", () => this.resetChat());
      }

      if (settingsBtn) {
        settingsBtn.addEventListener("click", () => {
          if (settingsModal) settingsModal.style.display = "flex";
        });
      }
      if (cancelSettingsBtn) {
        cancelSettingsBtn.addEventListener("click", () => {
          if (settingsModal) settingsModal.style.display = "none";
        });
      }
      if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener("click", () => {
          const keyInput = document.getElementById("aiSettingApiKey");
          const modelSelect = document.getElementById("aiSettingModel");
          const newKey = keyInput ? keyInput.value.trim() : "";
          const newModel = modelSelect ? modelSelect.value : DEFAULT_MODEL;

          this.saveConfig({
            apiKey: newKey || DEFAULT_GROQ_API_KEY,
            model: newModel
          });

          if (settingsModal) settingsModal.style.display = "none";
          if (typeof showToast === "function") {
            showToast("AI Key & Model saved successfully!", "success");
          }
        });
      }

      if (sendBtn) {
        sendBtn.addEventListener("click", () => {
          const text = textInput ? textInput.value.trim() : "";
          if (text) {
            this.handleUserSend(text);
            textInput.value = "";
          }
        });
      }

      if (textInput) {
        textInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            const text = textInput.value.trim();
            if (text) {
              this.handleUserSend(text);
              textInput.value = "";
            }
          }
        });
      }

      if (micBtn) {
        micBtn.addEventListener("click", () => this.toggleSpeech());
      }
    }

    toggleChat() {
      const windowEl = document.getElementById("aiChatWindow");
      if (!windowEl) return;
      this.isOpen = !this.isOpen;
      windowEl.style.display = this.isOpen ? "flex" : "none";
      if (this.isOpen) {
        const textInput = document.getElementById("aiTextInput");
        if (textInput) textInput.focus();
        this.scrollToBottom();
      }
    }

    openChat() {
      const windowEl = document.getElementById("aiChatWindow");
      if (!windowEl) return;
      this.isOpen = true;
      windowEl.style.display = "flex";
      const textInput = document.getElementById("aiTextInput");
      if (textInput) textInput.focus();
      this.scrollToBottom();
    }

    closeChat() {
      const windowEl = document.getElementById("aiChatWindow");
      if (!windowEl) return;
      this.isOpen = false;
      windowEl.style.display = "none";
    }

    resetChat() {
      this.messages = [];
      const list = document.getElementById("aiMessagesList");
      if (list) list.innerHTML = "";
      this.renderInitialWelcome();
    }

    initSpeechRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) return;

      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = "ur-PK"; // Default to Urdu

      this.recognition.onstart = () => {
        this.isListening = true;
        const micBtn = document.getElementById("aiMicBtn");
        if (micBtn) micBtn.classList.add("listening");
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const textInput = document.getElementById("aiTextInput");
        if (textInput && transcript) {
          textInput.value = transcript;
          this.handleUserSend(transcript);
          textInput.value = "";
        }
      };

      this.recognition.onerror = () => {
        this.isListening = false;
        const micBtn = document.getElementById("aiMicBtn");
        if (micBtn) micBtn.classList.remove("listening");
      };

      this.recognition.onend = () => {
        this.isListening = false;
        const micBtn = document.getElementById("aiMicBtn");
        if (micBtn) micBtn.classList.remove("listening");
      };
    }

    toggleSpeech() {
      if (!this.recognition) {
        if (typeof showToast === "function") {
          showToast("Speech recognition is not supported in this browser.", "alert");
        }
        return;
      }
      if (this.isListening) {
        this.recognition.stop();
      } else {
        try {
          this.recognition.start();
        } catch (e) {
          console.warn("Speech recognition error:", e);
        }
      }
    }

    isUrduText(text) {
      const urduPattern = /[\u0600-\u06FF\u0750-\u077F]/;
      return urduPattern.test(text);
    }

    formatMarkdown(text) {
      if (!text) return "";
      let html = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Tables
      if (html.includes("|")) {
        const lines = html.split("\n");
        let inTable = false;
        let tableHtml = "";
        const processedLines = [];

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line.startsWith("|") && line.endsWith("|")) {
            if (!inTable) {
              inTable = true;
              tableHtml = "<table>";
              // Header
              const headers = line.split("|").slice(1, -1);
              tableHtml += "<tr>" + headers.map(h => `<th>${h.trim()}</th>`).join("") + "</tr>";
            } else if (line.includes("---")) {
              // separator, skip
            } else {
              const cells = line.split("|").slice(1, -1);
              tableHtml += "<tr>" + cells.map(c => `<td>${c.trim()}</td>`).join("") + "</tr>";
            }
          } else {
            if (inTable) {
              tableHtml += "</table>";
              processedLines.push(tableHtml);
              inTable = false;
            }
            processedLines.push(line);
          }
        }
        if (inTable) {
          tableHtml += "</table>";
          processedLines.push(tableHtml);
        }
        html = processedLines.join("\n");
      }

      // Bold & Italic
      html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

      // Headings
      html = html.replace(/^### (.*$)/gim, '<h4 style="margin:6px 0 3px 0; font-size:0.92rem; color:var(--brand-emerald-dark, #064e3b);">$1</h4>');
      html = html.replace(/^## (.*$)/gim, '<h3 style="margin:8px 0 4px 0; font-size:1rem; color:var(--brand-emerald-dark, #064e3b);">$1</h3>');

      // Bullets
      html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li style="margin-left:14px;">$1</li>');

      // Clean multiple linebreaks
      html = html.replace(/\n\n+/g, "<br><br>");
      html = html.replace(/\n/g, "<br>");

      return html;
    }

    addMessageToDOM(sender, htmlContent, isPreformatted = false) {
      const messagesList = document.getElementById("aiMessagesList");
      if (!messagesList) return;

      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const isUrdu = this.isUrduText(htmlContent);

      const msgEl = document.createElement("div");
      msgEl.className = `ai-message ${sender === 'user' ? 'ai-msg-user' : 'ai-msg-bot'}`;

      const formattedContent = isPreformatted ? htmlContent : this.formatMarkdown(htmlContent);

      msgEl.innerHTML = `
        <div class="ai-bubble ${isUrdu ? 'ai-bubble-urdu' : ''}">
          ${formattedContent}
        </div>
        <span class="ai-msg-time">${timeStr}</span>
      `;

      messagesList.appendChild(msgEl);
      this.scrollToBottom();
      return msgEl;
    }

    showTypingIndicator() {
      const messagesList = document.getElementById("aiMessagesList");
      if (!messagesList) return null;

      const ind = document.createElement("div");
      ind.id = "aiTypingIndicator";
      ind.className = "ai-message ai-msg-bot";
      ind.innerHTML = `
        <div class="ai-typing-indicator">
          <span class="ai-typing-dot"></span>
          <span class="ai-typing-dot"></span>
          <span class="ai-typing-dot"></span>
        </div>
      `;
      messagesList.appendChild(ind);
      this.scrollToBottom();
      return ind;
    }

    removeTypingIndicator() {
      const ind = document.getElementById("aiTypingIndicator");
      if (ind) ind.remove();
    }

    scrollToBottom() {
      const messagesList = document.getElementById("aiMessagesList");
      if (messagesList) {
        messagesList.scrollTop = messagesList.scrollHeight;
      }
    }

    playChime() {
      if (!this.config.sound) return;
      try {
        if (typeof soundSynth !== "undefined" && soundSynth.playOrderBell) {
          // slight beep
        }
      } catch (e) {}
    }

    buildSystemPrompt() {
      const todayDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      const storeRef = typeof store !== "undefined" ? store : null;

      if (this.isStaff) {
        const milkSummary = storeRef && storeRef.getMilkStockSummary ? storeRef.getMilkStockSummary() : {
          totalIn: 300, totalOut: 180, totalBal: 120, cowBal: 40, buffaloBal: 80, mixedBal: 0, dahiTotal: 45,
          cowIn: 120, buffaloIn: 180, mixedIn: 0, cowOut: 80, buffaloOut: 100, mixedOut: 0
        };

        const salesSummary = storeRef && storeRef.getSalesSummary ? storeRef.getSalesSummary() : {
          grossTotal: 18450, milkTotal: 12600, dahiTotal: 2400, drinksTotal: 3450, count: 24
        };

        const expensesSummary = storeRef && storeRef.getExpensesSummary ? storeRef.getExpensesSummary() : {
          total: 5300, food: 1200, feed: 3500, utilities: 600, wages: 0, supplies: 0, misc: 0, count: 3
        };

        const orders = storeRef && storeRef.orders ? storeRef.orders : [];
        const pending = orders.filter(o => o.status === 'pending').length;
        const preparing = orders.filter(o => o.status === 'preparing').length;
        const ready = orders.filter(o => o.status === 'ready').length;
        const completed = orders.filter(o => o.status === 'completed').length;

        const netProfit = salesSummary.grossTotal - expensesSummary.total;

        return `You are "Al Sadiq Staff Business AI Accountant & Manager" (الصادق اسٹاف و بزنس اکاؤنٹنٹ ایجنٹ) for Al Sadiq Milk & Fresh Drinks shop counter and dairy farm management in Dina, GT Road (With Focus College), Pakistan.
Date: ${todayDate}.

YOU HAVE LIVE REAL-TIME DATA ACCESS TO TODAY'S REGISTER:
1. DAILY SALES & REVENUE (سیلز کھاتہ):
   - Total Gross Sales (کل بکری): Rs. ${salesSummary.grossTotal.toLocaleString()}
   - Total Slips / Orders Count: ${salesSummary.count}
   - Pure Milk Sales Revenue: Rs. ${salesSummary.milkTotal.toLocaleString()}
   - Dahi & Dairy Items Revenue: Rs. ${salesSummary.dahiTotal.toLocaleString()}
   - Shakes, Mojitos & Drinks Revenue: Rs. ${salesSummary.drinksTotal.toLocaleString()}

2. MILK INWARD, OUTWARD & CHILLER STOCK (دودھ آمد و اخراج سٹاک):
   - Total Milk Inward (کل آمد): ${milkSummary.totalIn} Liters (Buffalo: ${milkSummary.buffaloIn} L, Cow: ${milkSummary.cowIn} L, Mixed: ${milkSummary.mixedIn} L)
   - Total Milk Outward / Sold / Dispatched (کل نکاسی): ${milkSummary.totalOut} Liters (Buffalo: ${milkSummary.buffaloOut} L, Cow: ${milkSummary.cowOut} L, Mixed: ${milkSummary.mixedOut} L)
   - Milk Curdled for Dahi (دہی میں استعمال): ${milkSummary.dahiTotal} Liters (Yields approx ~${Math.round(milkSummary.dahiTotal * 0.9)} KG Dahi)
   - Net Remaining Chiller Tank Stock (موجودہ بچت/سٹاک): ${milkSummary.totalBal} Liters (Buffalo Chiller: ${milkSummary.buffaloBal} L, Cow Chiller: ${milkSummary.cowBal} L, Mixed: ${milkSummary.mixedBal} L)

3. DAILY EXPENSES BREAKDOWN (روزانہ کے تمام خرچے):
   - Total Expenses (کل خرچہ): Rs. ${expensesSummary.total.toLocaleString()}
   - Food / Mess / Tea Expense (کھانا پینا و چائے کا خرچہ): Rs. ${expensesSummary.food.toLocaleString()}
   - Dairy Farm Animal Feed / Chara / Wanda (چارہ و ونڈا خرچہ): Rs. ${expensesSummary.feed.toLocaleString()}
   - Utilities & Ice (برف، بجلی، پٹرول، گیس): Rs. ${expensesSummary.utilities.toLocaleString()}
   - Staff Wages (اسٹاف دیہاڑی): Rs. ${expensesSummary.wages.toLocaleString()}
   - Shop Supplies (شاپر، بوتلیں، صفائی): Rs. ${expensesSummary.supplies.toLocaleString()}
   - Miscellaneous / Other: Rs. ${expensesSummary.misc.toLocaleString()}

4. NET PROFIT / LOSS (خالص منافع):
   - Net Profit = Gross Sales (Rs. ${salesSummary.grossTotal.toLocaleString()}) - Total Expenses (Rs. ${expensesSummary.total.toLocaleString()}) = Rs. ${netProfit.toLocaleString()} ${netProfit >= 0 ? '(منافع / Profit)' : '(نقصان / Loss)'}

5. COUNTER QUEUE & ONLINE ORDERS (آن لائن آرڈرز):
   - Total Bookings: ${orders.length}
   - Pending: ${pending} | In Kitchen Prep: ${preparing} | Ready for Pickup: ${ready} | Completed: ${completed}

CRITICAL INSTRUCTIONS FOR STAFF ACCOUNTING:
- You are directly answering the shop owner/manager.
- Answer in polite, natural Urdu (اردو), Roman Urdu, or English matching the user.
- If asked a single specific figure (e.g. "Food pe kitna kharcha hua?", "Doodh kitna nikla?", "Chiller mein doodh kitna bacha hai?", "Profit kitna hai?"): Provide the exact figure immediately with brief relevant context.
- If asked for full accounts ("Pura hisab batao", "Daily sheet summary do", "Total hisab kitab"): Provide a clean, organized breakdown covering Sales, Milk (In/Out/Balance), Expenses (with Food and Feed highlighted), and Net Profit.
- Always use the exact real numbers provided above.`;
      } else {
        // Customer Mode
        const menu = storeRef && storeRef.menu ? storeRef.menu : [];
        const menuText = menu.map(m => `- ${m.nameEn} (${m.nameUr}): Rs. ${m.price} per ${m.unit} [${m.inStock ? 'Available' : 'Sold Out'}]`).join('\n');

        return `You are "Al Sadiq AI Assistant" (الصادق سمارٹ اسسٹنٹ), the friendly virtual concierge for "Al Sadiq Milk & Fresh Drinks" located on GT Road, Dina (With Focus College), Pakistan.
Phone / WhatsApp: 0370-9589018 & 0342-1008375.
Timings: Open Daily 6:00 AM – 11:30 PM.

PRODUCT CATALOG & LIVE PRICES:
${menuText}

CUSTOMER ASSISTANCE GUIDELINES:
- Warm, polite greeting in Urdu (اردو) or English.
- Pure Dairy Pride: Highlight that our milk is 100% natural, unadulterated, hygienically chilled straight from our own dairy farm.
- If customer asks about rates: Quote the exact prices from the catalog above.
- If customer asks how to book/order: Explain they can select items on this web page and tap "Proceed to Booking", or message on WhatsApp at 0370-9589018.
- If customer asks how to track their order: Instruct them to click the "Track Order" button at the top nav and type their mobile number or Token ID (e.g. ASD-101).
- Keep answers concise, clear, and appetizing!`;
      }
    }

    async handleUserSend(userText) {
      if (!userText || this.isGenerating) return;

      // Append user message
      this.addMessageToDOM("user", userText);
      this.messages.push({ role: "user", content: userText });

      this.isGenerating = true;
      const typingInd = this.showTypingIndicator();

      const systemPrompt = this.buildSystemPrompt();
      const apiKey = this.config.apiKey || DEFAULT_GROQ_API_KEY;

      // Prepare conversation payload for Groq
      const payloadMessages = [
        { role: "system", content: systemPrompt },
        ...this.messages.slice(-8) // keep last 8 turns for context
      ];

      const modelsToTry = [this.config.model, ...FALLBACK_MODELS.filter(m => m !== this.config.model)];
      let success = false;
      let replyContent = "";

      for (const modelName of modelsToTry) {
        try {
          const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: modelName,
              messages: payloadMessages,
              max_tokens: 800,
              temperature: 0.4
            })
          });

          if (resp.ok) {
            const data = await resp.json();
            const choice = data.choices && data.choices[0];
            replyContent = (choice && choice.message && choice.message.content) || "";
            // gpt-oss might place text in reasoning if content is empty
            if (!replyContent && choice && choice.message && choice.message.reasoning) {
              replyContent = choice.message.reasoning;
            }
            if (replyContent) {
              success = true;
              break;
            }
          }
        } catch (err) {
          console.warn(`Groq request failed with model ${modelName}:`, err);
        }
      }

      this.removeTypingIndicator();
      this.isGenerating = false;

      if (success && replyContent) {
        this.addMessageToDOM("bot", replyContent);
        this.messages.push({ role: "assistant", content: replyContent });
        this.playChime();
      } else {
        const errorMsg = this.isUrduText(userText)
          ? "معذرت، انٹرنیٹ یا AI سرور کے ساتھ رابطہ نہیں ہو سکا۔ براہ کرم اپنا Groq API Key چیک کریں یا دوبارہ کوشش کریں۔"
          : "Sorry, could not connect to the AI engine. Please check your Groq API key or try again in a moment.";
        this.addMessageToDOM("bot", errorMsg);
      }
    }
  }

  // Auto-instantiate when DOM is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.alSadiqAI = new AlSadiqAIAgent();
    });
  } else {
    window.alSadiqAI = new AlSadiqAIAgent();
  }
})();
