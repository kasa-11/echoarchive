// Conversation flow data
const conversationFlow = {
    messages: [
        {
            type: 'bot',
            content: '<strong>Ah, welcome.</strong> I am Echo — curator of this archive. Not of objects, but of emotional memory.'
        },
        {
            type: 'bot',
            content: 'When you feel prepared to proceed, say "begin."'
        },
        {
            type: 'user',
            content: 'Begin.',
            triggersStep: 1
        },
        {
            type: 'bot',
            content: 'I shall guide you through the process. Say next when you\'re ready.'
        },
        {
            type: 'user',
            content: 'Next.',
            triggersStep: 2
        },
        {
            type: 'bot',
            content: 'If you need to revisit a prior step, say "previous." Otherwise, say "next" to continue. Say "exit" at any time you would like to stop.'
        },
        {
            type: 'user',
            content: 'Next.',
            triggersStep: 3
        },
        {
            type: 'bot',
            content: 'Before we begin, I want to ensure you feel entirely comfortable with the degree to which you choose to share. When you are ready, say "continue."'
        }
    ],
    steps: [
        {
            title: 'Share Your Feelings',
            description: 'You\'ll be invited to share your feelings through text, voice, or video reflection',
            icon: 'chat',
            iconColor: 'blue',
            progress: 10,
            buttons: ['next']
        },
        {
            title: 'I\'ll Listen',
            description: 'My system will interpret what you decide to share.',
            icon: 'ear',
            iconColor: 'listen-orange',
            progress: 33,
            buttons: ['previous', 'next']
        },
        {
            title: 'Explore Suggestions',
            description: 'You\'ll receive suggestions to connect based on the emotional interpretation.',
            icon: 'people',
            iconColor: 'suggest-yellow',
            progress: 66,
            buttons: ['previous', 'continue']
        }
    ]
};

// SVG icons
const icons = {
    chat: `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.1665 56.8333V10.3333C5.1665 8.91249 5.67241 7.69617 6.68421 6.68436C7.69602 5.67256 8.91234 5.16666 10.3332 5.16666H51.6665C53.0873 5.16666 54.3036 5.67256 55.3155 6.68436C56.3273 7.69617 56.8332 8.91249 56.8332 10.3333V41.3333C56.8332 42.7541 56.3273 43.9705 55.3155 44.9823C54.3036 45.9941 53.0873 46.5 51.6665 46.5H15.4998L5.1665 56.8333ZM13.304 41.3333H51.6665V10.3333H10.3332V44.2396L13.304 41.3333Z" fill="white"/>
    </svg>`,
    ear: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_ear" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <rect width="64" height="64" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_ear)">
            <path d="M15.9997 58.6667C18.7552 58.6667 21.0108 57.9778 22.7663 56.6001C24.5219 55.2223 25.8663 53.2001 26.7997 50.5334C27.5552 48.3112 28.2775 46.7556 28.9663 45.8667C29.6552 44.9778 31.2441 43.5556 33.733 41.6001C36.4886 39.3778 38.6663 36.8667 40.2663 34.0667C41.8663 31.2667 42.6663 27.9112 42.6663 24.0001C42.6663 18.7112 40.8775 14.2778 37.2997 10.7001C33.7219 7.12227 29.2886 5.33339 23.9997 5.33339C18.7108 5.33339 14.2775 7.12227 10.6997 10.7001C7.1219 14.2778 5.33301 18.7112 5.33301 24.0001H10.6663C10.6663 20.2223 11.9441 17.0556 14.4997 14.5001C17.0552 11.9445 20.2219 10.6667 23.9997 10.6667C27.7775 10.6667 30.9441 11.9445 33.4997 14.5001C36.0552 17.0556 37.333 20.2223 37.333 24.0001C37.333 27.0223 36.733 29.6001 35.533 31.7334C34.333 33.8667 32.6219 35.7778 30.3997 37.4667C28.0886 39.1556 26.2886 40.8001 24.9997 42.4001C23.7108 44.0001 22.7552 45.7334 22.133 47.6001C21.5108 49.5556 20.7663 51.0001 19.8997 51.9334C19.033 52.8667 17.733 53.3334 15.9997 53.3334C14.533 53.3334 13.2775 52.8112 12.233 51.7667C11.1886 50.7223 10.6663 49.4667 10.6663 48.0001H5.33301C5.33301 50.9334 6.37745 53.4445 8.46634 55.5334C10.5552 57.6223 13.0663 58.6667 15.9997 58.6667ZM23.9997 30.6667C25.8663 30.6667 27.4441 30.0112 28.733 28.7001C30.0219 27.3889 30.6663 25.8223 30.6663 24.0001C30.6663 22.1334 30.0219 20.5556 28.733 19.2667C27.4441 17.9778 25.8663 17.3334 23.9997 17.3334C22.133 17.3334 20.5552 17.9778 19.2663 19.2667C17.9775 20.5556 17.333 22.1334 17.333 24.0001C17.333 25.8223 17.9775 27.3889 19.2663 28.7001C20.5552 30.0112 22.133 30.6667 23.9997 30.6667ZM49.333 38.7334L45.3997 34.8001C46.2441 33.1556 46.8886 31.4334 47.333 29.6334C47.7775 27.8334 47.9997 25.9556 47.9997 24.0001C47.9997 22.0445 47.7775 20.1778 47.333 18.4001C46.8886 16.6223 46.2441 14.9112 45.3997 13.2667L49.333 9.33339C50.6219 11.5112 51.6108 13.8334 52.2997 16.3001C52.9886 18.7667 53.333 21.3334 53.333 24.0001C53.333 26.7112 52.9886 29.3001 52.2997 31.7667C51.6108 34.2334 50.6219 36.5556 49.333 38.7334ZM57.133 46.4667L53.1997 42.6001C54.933 39.9334 56.2775 37.0445 57.233 33.9334C58.1886 30.8223 58.6663 27.5556 58.6663 24.1334C58.6663 20.6667 58.1775 17.3667 57.1997 14.2334C56.2219 11.1001 54.8663 8.20005 53.133 5.53339L57.133 1.53339C59.3108 4.73339 60.9997 8.23339 62.1997 12.0334C63.3997 15.8334 63.9997 19.8223 63.9997 24.0001C63.9997 28.1778 63.3997 32.1667 62.1997 35.9667C60.9997 39.7667 59.3108 43.2667 57.133 46.4667Z" fill="white"/>
        </g>
    </svg>`,
    people: `<svg viewBox="0 0 62 62" fill="white">
        <circle cx="31" cy="20" r="8" fill="white"/>
        <circle cx="14" cy="26" r="6" fill="white"/>
        <circle cx="48" cy="26" r="6" fill="white"/>
        <path d="M31 30c-10 0-18 6-18 14h36c0-8-8-14-18-14z" fill="white"/>
        <path d="M14 34c-6 0-10 4-10 10h14c0-4 1-7 3-10h-7z" fill="white"/>
        <path d="M48 34c6 0 10 4 10 10h-14c0-4-1-7-3-10h7z" fill="white"/>
    </svg>`
};

// State
let currentMessageIndex = 0;
let currentStep = -1;
let awaitingUserAction = false;
let ferEnabled = false;
let videoStream = null;
let emotionDetectionInterval = null;
let cameraInitInProgress = false;

let voiceMicStream = null;
let voiceAudioCtx = null;
let voiceAnalyser = null;
let voiceRaf = null;
let voiceMonitoring = false;
let experienceShareMethod = 'text';
let reflectionProcessingBubbleTimer = null;
let reflectionProcessingLoadingTimer = null;

const PROCESSING_LOAD_MIN_MS = 4200;

const PROCESSING_ECHO_SECOND =
    'Below you will find suggestions based on my interpretation of your emotional output.';

// DOM Elements
const landingScreen = document.getElementById('landing');
const conversationScreen = document.getElementById('conversation');
const consentScreen = document.getElementById('consent');
const shareMethodScreen = document.getElementById('shareMethod');
const experienceScreen = document.getElementById('experience');
const reflectionProcessingScreen = document.getElementById('reflectionProcessing');
const chatMessages = document.getElementById('chatMessages');
const welcomeState = document.getElementById('welcomeState');
const stepState = document.getElementById('stepState');
const stepContent = document.getElementById('stepContent');
const stepButtons = document.getElementById('stepButtons');
const progressFill = document.getElementById('progressFill');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Enter button on landing page
    document.getElementById('enterBtn').addEventListener('click', enterExperience);
    
    // Begin Journey button
    document.getElementById('beginJourneyBtn').addEventListener('click', beginJourney);
    
    // Consent screen buttons
    document.getElementById('consentCancelBtn').addEventListener('click', () => {
        // Go back to conversation screen
        consentScreen.classList.remove('active');
        conversationScreen.classList.add('active');
    });
    
    document.getElementById('consentContinueBtn').addEventListener('click', () => {
        // Add user "Continue." message
        addConsentMessage('Continue.', true);
        
        // Check FER preference
        const ferRadio = document.querySelector('input[name="fer"]:checked');
        ferEnabled = ferRadio && ferRadio.value === 'yes';
        
        // Continue to share method screen
        setTimeout(() => {
            goToShareMethodScreen();
        }, 500);
    });
    
    // Share Method screen buttons
    document.getElementById('shareMethodBackBtn').addEventListener('click', () => {
        shareMethodScreen.classList.remove('active');
        consentScreen.classList.add('active');
    });
    
    document.getElementById('shareMethodContinueBtn').addEventListener('click', () => {
        const selectedMethod = document.querySelector('input[name="shareMethod"]:checked');
        experienceShareMethod = selectedMethod ? selectedMethod.value : 'text';
        if (selectedMethod) {
            addShareMethodMessage(`I'll share via ${selectedMethod.value}.`, true);
        }

        setTimeout(() => {
            goToExperienceScreen();
        }, 500);
    });
    
    // Experience screen buttons
    document.getElementById('experienceBackBtn').addEventListener('click', () => {
        stopCamera();
        experienceScreen.classList.remove('active');
        experienceScreen.classList.remove('experience--voice', 'experience--video', 'experience--text');
        const wrap = document.getElementById('reflectionInputWrap');
        if (wrap) wrap.hidden = false;
        shareMethodScreen.classList.add('active');
    });
    
    document.getElementById('submitReflectionBtn').addEventListener('click', () => {
        /* Prototype: always advance — no empty-reflection gate */
        goToReflectionProcessing();
    });

    const experienceMicBtn = document.getElementById('experienceMicBtn');
    if (experienceMicBtn) {
        experienceMicBtn.addEventListener('click', toggleExperienceVoiceOrb);
    }

    const processingExitBtn = document.getElementById('processingExitBtn');
    const processingCreateProfileBtn = document.getElementById('processingCreateProfileBtn');
    if (processingExitBtn) {
        processingExitBtn.addEventListener('click', returnFromReflectionProcessing);
    }
    if (processingCreateProfileBtn) {
        processingCreateProfileBtn.addEventListener('click', returnFromReflectionProcessing);
    }
});

function enterExperience() {
    landingScreen.classList.remove('active');
    conversationScreen.classList.add('active');
    
    // Start showing messages after a short delay
    setTimeout(() => {
        showNextMessage();
    }, 500);
}

function showNextMessage() {
    if (currentMessageIndex >= conversationFlow.messages.length) return;
    
    const message = conversationFlow.messages[currentMessageIndex];
    
    if (message.type === 'bot') {
        addBotMessage(message.content);
        currentMessageIndex++;
        
        // Check if next message is a user message
        if (currentMessageIndex < conversationFlow.messages.length && 
            conversationFlow.messages[currentMessageIndex].type === 'user') {
            awaitingUserAction = true;
        } else {
            setTimeout(showNextMessage, 800);
        }
    }
}

function addBotMessage(content) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble greeting';
    bubble.innerHTML = content;
    chatMessages.appendChild(bubble);
    // Smooth scroll to bottom
    setTimeout(() => {
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

function addUserMessage(content, callback) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.textContent = content;
    bubble.addEventListener('click', () => {
        if (callback) callback();
    });
    chatMessages.appendChild(bubble);
    // Smooth scroll to bottom
    setTimeout(() => {
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

function beginJourney() {
    if (!awaitingUserAction) return;
    
    const message = conversationFlow.messages[currentMessageIndex];
    if (message.type === 'user') {
        addUserMessage(message.content);
        
        // Hide welcome state, show step state
        welcomeState.classList.remove('active');
        stepState.classList.add('active');
        
        // Show the step
        if (message.triggersStep !== undefined) {
            showStep(message.triggersStep - 1);
        }
        
        currentMessageIndex++;
        awaitingUserAction = false;
        
        // Continue with next bot messages
        setTimeout(showNextMessage, 600);
    }
}

function showStep(stepIndex) {
    currentStep = stepIndex;
    const step = conversationFlow.steps[stepIndex];
    
    // Update progress bar
    progressFill.style.width = step.progress + '%';
    
    stepContent.innerHTML = `
        <div class="step-icon ${step.iconColor}">
            ${icons[step.icon]}
        </div>
        <div class="step-text">
            <h2 class="step-title">${step.title}</h2>
            <p class="step-description">${step.description}</p>
        </div>
    `;
    
    // Build buttons
    stepButtons.innerHTML = '';
    step.buttons.forEach(btnType => {
        const btn = document.createElement('button');
        if (btnType === 'previous') {
            btn.className = 'btn-secondary';
            btn.textContent = 'Previous';
            btn.addEventListener('click', () => navigateStep('previous'));
        } else if (btnType === 'next') {
            btn.className = 'btn-primary';
            btn.textContent = 'Next →';
            btn.addEventListener('click', () => navigateStep('next'));
        } else if (btnType === 'continue') {
            btn.className = 'btn-primary';
            btn.textContent = 'Continue to Privacy Settings →';
            btn.addEventListener('click', () => {
                goToConsentScreen();
            });
        }
        stepButtons.appendChild(btn);
    });
}

function navigateStep(direction) {
    // Find next user message to trigger
    if (currentMessageIndex < conversationFlow.messages.length) {
        const message = conversationFlow.messages[currentMessageIndex];
        if (message.type === 'user') {
            addUserMessage(message.content);
            
            if (message.triggersStep !== undefined) {
                showStep(message.triggersStep - 1);
            }
            
            currentMessageIndex++;
            
            // Continue with next bot messages
            setTimeout(showNextMessage, 600);
        }
    } else {
        // Just navigate without adding messages
        if (direction === 'next' && currentStep < conversationFlow.steps.length - 1) {
            showStep(currentStep + 1);
        } else if (direction === 'previous' && currentStep > 0) {
            showStep(currentStep - 1);
        }
    }
}

function goToConsentScreen() {
    // Add "Continue." user message before switching
    addUserMessage('Continue.');
    
    const consentChatMessages = document.getElementById('consentChatMessages');
    
    setTimeout(() => {
        // Copy messages
        consentChatMessages.innerHTML = chatMessages.innerHTML;
        
        // Disable animations on copied bubbles to prevent jump
        consentChatMessages.querySelectorAll('.chat-bubble').forEach(bubble => {
            bubble.classList.add('no-animation');
        });
        
        // Switch screens
        conversationScreen.classList.remove('active');
        consentScreen.classList.add('active');
        
        // Ensure scroll is at bottom after render (double rAF for full paint)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                consentChatMessages.scrollTop = consentChatMessages.scrollHeight;
            });
        });
        
        // Add the consent screen bot message
        setTimeout(() => {
            addConsentMessage('Just say the word when you are ready to proceed.');
        }, 400);
    }, 500);
}

function addConsentMessage(content, isUser = false) {
    const consentChatMessages = document.getElementById('consentChatMessages');
    const bubble = document.createElement('div');
    bubble.className = isUser ? 'chat-bubble user' : 'chat-bubble greeting';
    bubble.innerHTML = content;
    consentChatMessages.appendChild(bubble);
    setTimeout(() => {
        consentChatMessages.scrollTo({
            top: consentChatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

// Share Method Screen Functions
function goToShareMethodScreen() {
    const shareMethodChatMessages = document.getElementById('shareMethodChatMessages');
    const consentChatMessages = document.getElementById('consentChatMessages');
    
    // Copy messages from consent screen
    shareMethodChatMessages.innerHTML = consentChatMessages.innerHTML;
    
    // Disable animations on copied bubbles
    shareMethodChatMessages.querySelectorAll('.chat-bubble').forEach(bubble => {
        bubble.classList.add('no-animation');
    });
    
    // Switch screens
    consentScreen.classList.remove('active');
    shareMethodScreen.classList.add('active');
    
    // Scroll to bottom
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            shareMethodChatMessages.scrollTop = shareMethodChatMessages.scrollHeight;
        });
    });
    
    // Add welcome message
    setTimeout(() => {
        addShareMethodMessage('Now, choose how you\'d like to share your reflection.');
    }, 400);
}

function addShareMethodMessage(content, isUser = false) {
    const shareMethodChatMessages = document.getElementById('shareMethodChatMessages');
    const bubble = document.createElement('div');
    bubble.className = isUser ? 'chat-bubble user' : 'chat-bubble greeting';
    bubble.innerHTML = content;
    shareMethodChatMessages.appendChild(bubble);
    setTimeout(() => {
        shareMethodChatMessages.scrollTo({
            top: shareMethodChatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

let touchKeyboardCaps = false;

function buildTouchKeyboard() {
    const el = document.getElementById('experienceTouchKeyboard');
    if (!el || el.dataset.built === '1') return;
    el.dataset.built = '1';
    const rows = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
        [',', '.', "'", '-', 'Space', 'Enter'],
    ];
    rows.forEach((row) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'touch-keyboard__row';
        row.forEach((k) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'touch-key';
            if (k === 'Space') btn.classList.add('touch-key--space');
            if (k === 'Backspace' || k === 'Enter' || k === 'Shift') btn.classList.add('touch-key--accent');
            btn.dataset.key = k;
            if (k === 'Space') btn.textContent = 'Space';
            else if (k === 'Backspace') btn.textContent = '⌫';
            else if (k === 'Enter') btn.textContent = '↵';
            else if (k === 'Shift') btn.textContent = '⇧';
            else btn.textContent = k;
            rowEl.appendChild(btn);
        });
        el.appendChild(rowEl);
    });
    el.addEventListener('click', onTouchKeyboardClick);
}

function updateTouchKeyboardLetterLabels() {
    const kb = document.getElementById('experienceTouchKeyboard');
    if (!kb) return;
    kb.querySelectorAll('.touch-key[data-key]').forEach((btn) => {
        const k = btn.dataset.key;
        if (!k || k.length !== 1 || !/[a-z]/i.test(k)) return;
        btn.textContent = touchKeyboardCaps ? k.toUpperCase() : k.toLowerCase();
    });
}

function onTouchKeyboardClick(e) {
    const btn = e.target.closest('.touch-key[data-key]');
    if (!btn) return;
    const key = btn.dataset.key;
    const ta = document.getElementById('reflectionText');
    if (!ta) return;

    if (key === 'Shift') {
        touchKeyboardCaps = !touchKeyboardCaps;
        const kb = document.getElementById('experienceTouchKeyboard');
        if (kb) kb.classList.toggle('touch-keyboard--caps', touchKeyboardCaps);
        updateTouchKeyboardLetterLabels();
        return;
    }

    if (key === 'Backspace') {
        ta.value = ta.value.slice(0, -1);
    } else if (key === 'Enter') {
        ta.value += '\n';
    } else if (key === 'Space') {
        ta.value += ' ';
    } else if (key.length === 1) {
        let ch = key;
        if (/[a-zA-Z]/.test(ch)) ch = touchKeyboardCaps ? ch.toUpperCase() : ch.toLowerCase();
        ta.value += ch;
    }

    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus({ preventScroll: true });
}

function placeExperienceCameraPanel() {
    const heroMedia = document.getElementById('experienceHeroMedia');
    const content = document.querySelector('#experience .experience-content');
    const title = document.querySelector('#experience .experience-title');
    const camera = document.getElementById('cameraContainer');
    const noCam = document.getElementById('noCameraMessage');
    if (!heroMedia || !content || !camera || !noCam) return;

    if (experienceShareMethod === 'video') {
        heroMedia.appendChild(camera);
        heroMedia.appendChild(noCam);
    } else if (title && title.parentNode === content) {
        title.after(camera);
        camera.after(noCam);
    }
}

function applyExperienceShareMethodUI() {
    const exp = document.getElementById('experience');
    const wrap = document.getElementById('reflectionInputWrap');
    const title = document.querySelector('#experience .experience-title');
    const ta = document.getElementById('reflectionText');
    const kb = document.getElementById('experienceTouchKeyboard');
    const isVoice = experienceShareMethod === 'voice';
    const isVideo = experienceShareMethod === 'video';
    const isText = experienceShareMethod === 'text';
    if (exp) {
        exp.classList.toggle('experience--voice', isVoice);
        exp.classList.toggle('experience--video', isVideo);
        exp.classList.toggle('experience--text', isText);
    }
    if (wrap) wrap.hidden = isVoice || isVideo;
    if (ta) {
        if (isText) ta.setAttribute('inputmode', 'none');
        else ta.removeAttribute('inputmode');
    }
    if (kb) {
        buildTouchKeyboard();
        touchKeyboardCaps = false;
        kb.classList.remove('touch-keyboard--caps');
        kb.hidden = !isText;
        updateTouchKeyboardLetterLabels();
    }
    if (title) {
        title.textContent = 'Share Your Reflection';
    }
    placeExperienceCameraPanel();
}

function resetProcessingEchoBubbles() {
    const container = document.getElementById('processingBubbles');
    if (!container) return;
    container.innerHTML =
        '<div class="processing-sidebar-bubble"><p>Aha! Your emotional state has returned as Contemplative.</p></div>';
}

function scheduleProcessingSecondEchoBubble() {
    const container = document.getElementById('processingBubbles');
    if (!container) return;
    if (reflectionProcessingBubbleTimer) {
        clearTimeout(reflectionProcessingBubbleTimer);
        reflectionProcessingBubbleTimer = null;
    }
    reflectionProcessingBubbleTimer = setTimeout(() => {
        reflectionProcessingBubbleTimer = null;
        const div = document.createElement('div');
        div.className = 'processing-sidebar-bubble';
        div.innerHTML = `<p>${PROCESSING_ECHO_SECOND}</p>`;
        container.appendChild(div);
    }, 700);
}

function goToReflectionProcessing() {
    if (!reflectionProcessingScreen) return;
    stopCamera();
    experienceScreen.classList.remove('active');
    experienceScreen.classList.remove('experience--voice', 'experience--video', 'experience--text');
    const wrap = document.getElementById('reflectionInputWrap');
    if (wrap) wrap.hidden = false;

    const proc = reflectionProcessingScreen;
    const loadingOverlay = document.getElementById('processingLoadingOverlay');

    if (reflectionProcessingBubbleTimer) {
        clearTimeout(reflectionProcessingBubbleTimer);
        reflectionProcessingBubbleTimer = null;
    }
    if (reflectionProcessingLoadingTimer) {
        clearTimeout(reflectionProcessingLoadingTimer);
        reflectionProcessingLoadingTimer = null;
    }

    resetProcessingEchoBubbles();

    proc.classList.remove('reflection-processing--complete');
    proc.setAttribute('aria-busy', 'true');
    proc.classList.add('active');

    if (loadingOverlay) {
        loadingOverlay.classList.remove('processing-loading-overlay--hidden');
        loadingOverlay.setAttribute('aria-hidden', 'false');
    }

    scheduleProcessingSecondEchoBubble();

    reflectionProcessingLoadingTimer = setTimeout(() => {
        reflectionProcessingLoadingTimer = null;
        if (loadingOverlay) {
            loadingOverlay.classList.add('processing-loading-overlay--hidden');
            loadingOverlay.setAttribute('aria-hidden', 'true');
        }
        proc.setAttribute('aria-busy', 'false');
        proc.classList.add('reflection-processing--complete');
    }, PROCESSING_LOAD_MIN_MS);
}

function returnFromReflectionProcessing() {
    if (reflectionProcessingBubbleTimer) {
        clearTimeout(reflectionProcessingBubbleTimer);
        reflectionProcessingBubbleTimer = null;
    }
    if (reflectionProcessingLoadingTimer) {
        clearTimeout(reflectionProcessingLoadingTimer);
        reflectionProcessingLoadingTimer = null;
    }
    const loadingOverlay = document.getElementById('processingLoadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('processing-loading-overlay--hidden');
        loadingOverlay.setAttribute('aria-hidden', 'true');
    }
    if (reflectionProcessingScreen) {
        reflectionProcessingScreen.classList.remove('active', 'reflection-processing--complete');
        reflectionProcessingScreen.setAttribute('aria-busy', 'false');
    }
    if (landingScreen) landingScreen.classList.add('active');
}

// Experience Screen Functions
function goToExperienceScreen() {
    applyExperienceShareMethodUI();

    const experienceChatMessages = document.getElementById('experienceChatMessages');
    const shareMethodChatMessages = document.getElementById('shareMethodChatMessages');
    
    // Copy messages from share method screen
    experienceChatMessages.innerHTML = shareMethodChatMessages.innerHTML;
    
    // Disable animations on copied bubbles
    experienceChatMessages.querySelectorAll('.chat-bubble').forEach(bubble => {
        bubble.classList.add('no-animation');
    });

    const echoSharingLead =
        'Excellent choice! Allow yourself to freely express what lies at the center of your heart and mind.';
    let sharingHow;
    if (experienceShareMethod === 'voice') {
        sharingHow =
            "When you're ready, tap the microphone to speak your reflection. Submit when you're done.";
    } else if (experienceShareMethod === 'video') {
        sharingHow =
            "When you're ready, use the camera and controls below to share your reflection. Submit when you're done.";
    } else {
        sharingHow =
            'Use the on-screen keyboard below to type your reflection. Submit when you\'re done.';
    }
    addExperienceMessage(`${echoSharingLead}<br><br>${sharingHow}`);

    syncExperienceBubbleFromLog();

    // Switch screens
    shareMethodScreen.classList.remove('active');
    experienceScreen.classList.add('active');

    // Camera: voice mode hides it; video uses FER preference
    const cameraContainer = document.getElementById('cameraContainer');
    const noCameraMessage = document.getElementById('noCameraMessage');

    if (experienceShareMethod === 'voice' || experienceShareMethod === 'text') {
        cameraContainer.classList.add('hidden');
        noCameraMessage.classList.add('hidden');
    } else if (experienceShareMethod === 'video') {
        cameraContainer.classList.remove('hidden');
        noCameraMessage.classList.add('hidden');
        initExperienceCamera();
    } else {
        cameraContainer.classList.add('hidden');
        noCameraMessage.classList.add('hidden');
    }

    if (experienceShareMethod === 'text') {
        requestAnimationFrame(() => {
            const t = document.getElementById('reflectionText');
            if (t) t.focus({ preventScroll: true });
        });
    }
}

function syncExperienceBubbleFromLog() {
    const log = document.getElementById('experienceChatMessages');
    const bubbleContent = document.getElementById('experienceBubbleContent');
    if (!log || !bubbleContent) return;
    const bubbles = log.querySelectorAll('.chat-bubble');
    if (!bubbles.length) return;
    const last = bubbles[bubbles.length - 1];
    if (last.classList.contains('user')) {
        bubbleContent.textContent = last.textContent;
    } else {
        bubbleContent.innerHTML = last.innerHTML;
    }
}

function addExperienceMessage(content, isUser = false) {
    const experienceChatMessages = document.getElementById('experienceChatMessages');
    const bubble = document.createElement('div');
    bubble.className = isUser ? 'chat-bubble user' : 'chat-bubble greeting';
    bubble.innerHTML = content;
    experienceChatMessages.appendChild(bubble);
    syncExperienceBubbleFromLog();
}

function toggleExperienceVoiceOrb() {
    if (voiceMonitoring) {
        stopVoiceOrb();
        return;
    }
    startVoiceOrb();
}

function startVoiceOrb() {
    const orb = document.getElementById('experienceVoiceOrb');
    const btn = document.getElementById('experienceMicBtn');
    if (!orb || !btn || voiceMonitoring) return;

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        voiceMicStream = stream;
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        voiceAudioCtx = new AudioCtx();
        const source = voiceAudioCtx.createMediaStreamSource(stream);
        voiceAnalyser = voiceAudioCtx.createAnalyser();
        voiceAnalyser.fftSize = 512;
        voiceAnalyser.smoothingTimeConstant = 0.65;
        source.connect(voiceAnalyser);

        if (voiceAudioCtx.state === 'suspended') {
            voiceAudioCtx.resume();
        }

        voiceMonitoring = true;
        btn.setAttribute('aria-pressed', 'true');

        const data = new Uint8Array(voiceAnalyser.frequencyBinCount);

        function tick() {
            if (!voiceAnalyser || !voiceMonitoring) return;
            voiceAnalyser.getByteFrequencyData(data);
            let sum = 0;
            for (let i = 0; i < data.length; i++) sum += data[i];
            const level = sum / (data.length * 255);
            orb.classList.toggle('is-speaking', level > 0.06);
            voiceRaf = requestAnimationFrame(tick);
        }
        tick();
    }).catch(() => {
        alert('Microphone access was denied or is unavailable.');
    });
}

function stopVoiceOrb() {
    if (voiceRaf) {
        cancelAnimationFrame(voiceRaf);
        voiceRaf = null;
    }
    voiceMonitoring = false;
    if (voiceMicStream) {
        voiceMicStream.getTracks().forEach(t => t.stop());
        voiceMicStream = null;
    }
    if (voiceAudioCtx) {
        voiceAudioCtx.close().catch(() => {});
        voiceAudioCtx = null;
    }
    voiceAnalyser = null;
    const orb = document.getElementById('experienceVoiceOrb');
    const btn = document.getElementById('experienceMicBtn');
    if (orb) orb.classList.remove('is-speaking');
    if (btn) btn.setAttribute('aria-pressed', 'false');
}

function getUserMediaErrorMessage(err) {
    const name = err && err.name;
    if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
        return '<p>Permission was blocked. Check the camera icon in the address bar, site settings for this origin, and that no other rule is blocking access.</p>';
    }
    if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
        return '<p>No camera was found. Plug in a webcam or enable the built-in camera, then reload.</p>';
    }
    if (name === 'NotReadableError' || name === 'TrackStartError') {
        return '<p>The camera is in use by another app (for example a meeting). Close it and try again.</p>';
    }
    if (name === 'OverconstrainedError' || name === 'ConstraintNotSatisfiedError') {
        return '<p>This camera cannot use the requested settings. Try another browser or device.</p>';
    }
    if (name === 'SecurityError') {
        return '<p>Camera blocked for security reasons. Use <strong>https://</strong> or <strong>http://localhost</strong> (not a <code>file://</code> URL).</p>';
    }
    return `<p>Camera could not start (${name || 'unknown error'}). Check browser updates and try again.</p>`;
}

/** Wait until the video element reports non-zero size (handles loadedmetadata firing before we subscribe). */
function waitForVideoDimensions(video, maxMs = 12000) {
    const start = performance.now();
    return new Promise((resolve) => {
        const id = setInterval(() => {
            const ok = video.videoWidth > 0 && video.videoHeight > 0;
            const timedOut = performance.now() - start >= maxMs;
            if (ok || timedOut) {
                clearInterval(id);
                resolve();
            }
        }, 50);
    });
}

async function acquireCameraVideoStream() {
    try {
        return await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' },
        });
    } catch (e1) {
        // Only retry with relaxed constraints when the first request
        // failed because of constraints/device selection, not permissions/device lock.
        const retryableErrors = new Set([
            'OverconstrainedError',
            'ConstraintNotSatisfiedError',
            'NotFoundError',
            'DevicesNotFoundError',
        ]);
        if (!retryableErrors.has(e1 && e1.name)) {
            throw e1;
        }
        try {
            return await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (e2) {
            throw e2;
        }
    }
}

// Video + optional FER (camera always on for Video share; FER only when opted in on consent)
async function initExperienceCamera() {
    const video = document.getElementById('videoFeed');
    const canvas = document.getElementById('emotionCanvas');
    const loading = document.getElementById('cameraLoading');
    const dominantEmotionEl = document.getElementById('dominantEmotion');
    const emotionConfidenceEl = document.getElementById('emotionConfidence');
    const emotionOverlay = document.getElementById('emotionOverlay');
    const livePill = document.querySelector('#cameraContainer .fer-live-pill');
    const subEl = document.querySelector('#cameraContainer .fer-screen-subtitle');

    if (!video || !canvas || !loading) return;
    if (cameraInitInProgress) return;
    cameraInitInProgress = true;

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        loading.classList.remove('hidden');
        loading.innerHTML =
            '<p>Camera needs a secure context. Open this page via <strong>https://</strong> or <strong>localhost</strong> (not as a raw file).</p>';
        cameraInitInProgress = false;
        return;
    }

    if (emotionDetectionInterval) {
        clearInterval(emotionDetectionInterval);
        emotionDetectionInterval = null;
    }

    loading.classList.remove('hidden');
    loading.innerHTML = '<div class="loading-spinner"></div><p>Starting camera…</p>';
    dominantEmotionEl.textContent = ferEnabled ? '…' : '';
    emotionConfidenceEl.textContent = '';

    if (videoStream) {
        videoStream.getTracks().forEach(t => t.stop());
        videoStream = null;
    }
    video.pause();
    video.srcObject = null;

    const hideLoading = () => {
        loading.classList.add('hidden');
    };

    let stream;
    try {
        stream = await acquireCameraVideoStream();
    } catch (err) {
        console.error('getUserMedia failed:', err);
        loading.classList.remove('hidden');
        loading.innerHTML = getUserMediaErrorMessage(err);
        cameraInitInProgress = false;
        return;
    }

    videoStream = stream;
    video.playsInline = true;
    video.muted = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.srcObject = videoStream;

    await video.play().catch(() => {});
    await waitForVideoDimensions(video, 12000);

    if (video.videoWidth) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    } else {
        console.warn('Camera stream has no video dimensions yet; preview may appear after a moment.');
    }

    hideLoading();

    if (livePill) livePill.hidden = !ferEnabled;
    if (subEl) {
        subEl.textContent = ferEnabled
            ? 'Live cues only — your image is not recorded or saved.'
            : 'Preview only — emotion scanning is off; your image is not recorded or saved.';
    }

    if (ferEnabled) {
        if (emotionOverlay) emotionOverlay.hidden = false;
        dominantEmotionEl.textContent = 'Loading emotion detection…';

        if (typeof faceapi === 'undefined') {
            dominantEmotionEl.textContent = 'Emotion library unavailable';
            emotionConfidenceEl.textContent = '';
        } else {
            try {
                const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                ]);
                dominantEmotionEl.textContent = 'Detecting...';
                startEmotionDetection(video, canvas, dominantEmotionEl, emotionConfidenceEl);
            } catch (modelErr) {
                console.error('FER model load error:', modelErr);
                dominantEmotionEl.textContent = 'Emotion models unavailable';
                emotionConfidenceEl.textContent = '';
            }
        }
    } else {
        if (emotionOverlay) emotionOverlay.hidden = true;
        dominantEmotionEl.textContent = '';
        emotionConfidenceEl.textContent = '';
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    cameraInitInProgress = false;
}

function startEmotionDetection(video, canvas, dominantEmotionEl, emotionConfidenceEl) {
    const ctx = canvas.getContext('2d');

    if (emotionDetectionInterval) {
        clearInterval(emotionDetectionInterval);
        emotionDetectionInterval = null;
    }

    emotionDetectionInterval = setInterval(async () => {
        const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (detections.length > 0) {
            const expressions = detections[0].expressions;
            
            // Find dominant emotion
            let maxEmotion = 'neutral';
            let maxValue = 0;
            
            for (const [emotion, value] of Object.entries(expressions)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxEmotion = emotion;
                }
            }
            
            // Update display
            dominantEmotionEl.textContent = formatEmotion(maxEmotion);
            emotionConfidenceEl.textContent = `${Math.round(maxValue * 100)}% confidence`;
            
            // Draw face box
            const box = detections[0].detection.box;
            ctx.strokeStyle = '#5B4CD9';
            ctx.lineWidth = 3;
            ctx.strokeRect(box.x, box.y, box.width, box.height);
        } else {
            dominantEmotionEl.textContent = 'No face detected';
            emotionConfidenceEl.textContent = '';
        }
    }, 200);
}

function formatEmotion(emotion) {
    const emotionMap = {
        'neutral': 'Neutral',
        'happy': 'Happy',
        'sad': 'Sad',
        'angry': 'Angry',
        'fearful': 'Fearful',
        'disgusted': 'Disgusted',
        'surprised': 'Surprised'
    };
    return emotionMap[emotion] || emotion;
}

function stopCamera() {
    if (emotionDetectionInterval) {
        clearInterval(emotionDetectionInterval);
        emotionDetectionInterval = null;
    }
    
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
    cameraInitInProgress = false;

    stopVoiceOrb();
}
