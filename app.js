// Enhanced Paramount+ Jeopardy Game with 24 Players

// Question database by category
const questionDB = {
    "CBS": [
        {
            "question": "This drama series follows the elite Naval Special Warfare unit as they execute high-stakes missions worldwide.",
            "answer": "What is SEAL Team?"
        },
        {
            "question": "This long-running CBS procedural about Navy criminal investigators is currently in its 22nd season on Paramount+.",
            "answer": "What is NCIS?"
        },
        {
            "question": "This Justin Hartley drama became CBS's #1 new series in 2024",
            "answer": "What is Tracker?",
        },
        {
            "question": "This reality competition show pits contestants against each other to survive in remote locations.",
            "answer": "What is Survivor?"
        },
        {
            "question": "This reboot of a 1980s legal drama stars Kathy Bates as a brilliant attorney returning to practice law.",
            "answer": "What is Matlock?"
        },
        {
            "question": "This police procedural is set in Hawaii and is a reboot of the 1968 series of the same name.",
            "answer": "What is Hawaii Five-0?"
        },
        {
            "question": "Shemar Moore left this series after 11 seasons to join SWAT",
            "answer": "What is Criminal Minds?",
        },
        {
            "question": "This sitcom stars Iain Armitage as the childhood version of a character from another popular CBS series (The Big Bang Theory).",
            "answer": "What is Young Sheldon?"
        },
        {
            "question": "Morris Chestnut plays this modern detective solving medical mysteries",
            "answer": "What is Watson?"
        },
        {
            "question": "This series stars Tom Selleck as the police commissioner of New York City in a family of law enforcement officers.",
            "answer": "What is Blue Bloods?"
        }
    ],
    "SHOWTIME": [
        {
            "question": "This series starring William H. Macy follows the dysfunctional Gallagher family on Chicago's South Side.",
            "answer": "What is Shameless?"
        },
        {
            "question": "This prequel series explores young Dexter Morgan's origins",
            "answer": "What is Dexter: Original Sin?"
        },
        {
            "question": "This series created by Lena Waithe chronicles the life of young Black residents in a South Side Chicago neighborhood.",
            "answer": "What is The Chi?"
        },
        {
            "question": "This dark comedy stars Don Cheadle as a management consultant team navigating the world of big business.",
            "answer": "What is House of Lies?"
        },
        {
            "question": "This series follows high school girls stranded in the wilderness after a plane crash, with parallel timelines in the present day.",
            "answer": "What is Yellowjackets?"
        },
        {
            "question": "This series stars Michael C. Hall as a forensics expert who moonlights as a vigilante serial killer.",
            "answer": "What is Dexter?"
        },
        {
            "question": "This historical drama depicts the reign of Henry VIII through the perspective of his advisors.",
            "answer": "What is The Tudors?"
        },
        {
            "question": "This series stars Paul Giamatti as a U.S. Attorney going after a hedge fund king played by Damian Lewis.",
            "answer": "What is Billions?"
        },
        {
            "question": "This comedy follows a management consultant played by Kristen Bell who navigates corporate America.",
            "answer": "What is House of Lies?"
        },
        {
            "question": "This documentary series features psychotherapist Dr. Orna Guralnik conducting therapy sessions with real couples.",
            "answer": "What is Couples Therapy?"
        }
    ],
    "PARAMOUNT+ ORIGINAL": [
        {
            "question": "This competition series hosted by RuPaul featured its 10th All Stars season, which premiered in May 2025.",
            "answer": "What is RuPaul's Drag Race All Stars?"
        },
        {
            "question": "Tulsa King stars this actor as a New York mafia capo who rebuilds his criminal empire in Oklahoma.",
            "answer": "Who is Sylvester Stallone?"
        },
        {
            "question": "This blue video game character's movies are available on Paramount+.",
            "answer": "What is Sonic the Hedgehog?"
        },
        {
            "question": "The Paramount+ Original series '1883' is a prequel to which popular drama series?",
            "answer": "What is Yellowstone?"
        },
        {
            "question": "Billy Bob Thornton stars in this oil industry drama about securing land and mineral rights in West Texas boomtowns.",
            "answer": "What is Landman?"
        },
        {
            "question": "This series based on a video game franchise follows Master Chief, a cybernetically enhanced supersoldier.",
            "answer": "What is Halo?"
        },
        {
            "question": "This series follows the McLusky family, power brokers in a Michigan town where incarceration is the only thriving industry.",
            "answer": "What is Mayor of Kingstown?"
        },
        {
            "question": "This comedy series starring Kelsey Grammer as a psychiatrist was rebooted for Paramount+ in 2023, and cancelled in 2025.",
            "answer": "What is Frasier?"
        },
        {
            "question":  "This 2025 animated film explores the origin story of Optimus Prime and Megatron.",
            "answer": "What is Transformers: One?"
        },
        {
            "question": "This legal drama starring Christine Baranski continues the story of a character from 'The Good Wife'.",
            "answer": "What is The Good Fight?"
        }
    ],
    "SPORT": [
        {
            "question": "This major European soccer tournament's exclusive U.S. broadcasting rights are held by Paramount+ through 2030.",
            "answer": "What is the UEFA Champions League?"
        },
        {
            "question": "Paramount+ subscribers can stream this major American football league's games that air on CBS.",
            "answer": "What is the NFL?"
        },
        {
            "question": "This prestigious golf tournament can be streamed on Paramount+ with the Showtime plan.",
            "answer": "Who is The Masters?"
        },
        {
            "question": "Paramount+ has exclusive rights to this U.S. women's professional soccer league through 2027.",
            "answer": "Who is the NWSL (National Women's Soccer League)?"
        },
        {
            "question": "This Italian football league's matches are available exclusively on Paramount+ in the United States.",
            "answer": "What is Serie A?"
        },
        {
            "question": "This annual college basketball tournament is partially streamed on Paramount+.",
            "answer": "What is the NCAA Tournament (March Madness)?"
        },
        {
            "question": "This 24/7 streaming channel on Paramount+ is dedicated exclusively to soccer coverage.",
            "answer": "What is CBS Sports Golazo Network?"
        },
        {
            "question": "David Beckham hosts this UEFA Champions League alternate broadcast",
            "answer": "What is Beckham & Friends Live?"
        },
        {
            "question": "This Scottish football league's exclusive US rights are held by Paramount+ through 2024/25.",
            "answer": "Who is the Scottish Premiership?"
        },
        {
            "question": "These three divisions of English football below the Premier League have matches on Paramount+.",
            "answer": "What is the EFL Championship, EFL League One, and EFL League Two?"
        }
    ],
    "BRANDS": [
        {
            "question": "This streaming service owned by Paramount Global launched in 2021, rebranding from CBS All Access.",
            "answer": "What is Paramount+?"
        },
        {
            "question": "This premium cable network owned by Paramount Global is known for shows like 'Billions' and 'Yellowjackets'.",
            "answer": "What is Showtime?"
        },
        {
            "question": "This children's TV channel owned by Paramount Global features SpongeBob SquarePants and PAW Patrol.",
            "answer": "What is Nickelodeon?"
        },
        {
            "question": "This music-focused TV network owned by Paramount launched in 1981 with 'Video Killed the Radio Star'.",
            "answer": "What is MTV?"
        },
        {
            "question": "This cable network owned by Paramount Global focuses on comedy programming and South Park.",
            "answer": "What is Comedy Central?"
        },
        {
            "question": "This brand's logo features an eyeball and is the flagship broadcast television network of Paramount Global.",
            "answer": "What is CBS?"
        },
        {
            "question": "This Paramount-owned cable channel rebranded from Spike TV in 2018 and focuses on unscripted programming.",
            "answer": "What is Paramount Network?"
        },
        {
            "question": "This streaming service partnership between Paramount and BET offers content targeting African American audiences.",
            "answer": "What is BET+?"
        },
        {
            "question": "This Paramount-owned free streaming service features hundreds of linear channels and on-demand content.",
            "answer": "What is Pluto TV?"
        },
        {
            "question": "This MTV reality show follows participants competing in physical challenges and strategic gameplay.",
            "answer": "What is The Challenge?"
        }
    ],
    "CLASSIC MOVIES": [
        {
            "question": "This 1972 Paramount film directed by Francis Ford Coppola follows the Corleone crime family.",
            "answer": "What is The Godfather?"
        },
        {
            "question": "This 1994 Paramount film stars Tom Hanks as a man with low IQ who witnesses key historical events.",
            "answer": "What is Forrest Gump?"
        },
        {
            "question": "This 1986 Paramount action film starred Tom Cruise as a Naval aviator pilot trainee.",
            "answer": "What is Top Gun?"
        },
        {
            "question": "This 1997 Paramount blockbuster about the sinking of the RMS __________ starred Leonardo DiCaprio and Kate Winslet, was the first film directed by James Cameron to gross over $1 billion worldwide.",
            "answer": "What is Titanic?"
        },
        {
            "question": "This 1953 Paramount film starred Audrey Hepburn as a princess who explores Rome with a journalist.",
            "answer": "What is Roman Holiday?"
        },
        {
            "question": "This 1927 silent film from Paramount was the first winner of the Academy Award for Best Picture.",
            "answer": "What is Wings?"
        },
        {
            "question":  "This 1984 Eddie Murphy comedy spawned three sequels",
            "answer": "What is Beverly Hills Cop?"
        },
        {
            "question": "Al Pacino plays a Cuban refugee in this 1983 crime drama",
            "answer": "What is Scarface?"
        },
        {
            "question": "This 2001 Paramount comedy follows male models who become involved in an assassination plot.",
            "answer": "What is Zoolander?"
        },
        {
            "question": "John Travolta and Samuel L. Jackson star in this Tarantino film",
            "answer": "What is Pulp Fiction?"
        }
    ]
};

// Final Jeopardy questions
const finalJeopardyDB = [
    {
        "category": "PARAMOUNT+ ORIGINALS",
        "question": "This Paramount+ series is the seventh Star Trek series and follows the crew of the USS Discovery.",
        "answer": "What is Star Trek: Discovery?"
    },
    {
        "category": "CLASSIC MOVIES",
        "question": "This 1972 film's famous line 'I'm gonna make him an offer he can't refuse' was ranked #2 on AFI's 100 Years...100 Movie Quotes list.",
        "answer": "What is The Godfather?"
    },
    {
        "category": "CBS TELEVISION",
        "question": "Running from 1972 to 1983, this CBS sitcom set in Korea remains one of the highest-rated shows in U.S. television history.",
        "answer": "What is M*A*S*H?"
    },
    {
        "category": "SHOWTIME SERIES",
        "question": "This Showtime series ending in 2013 featured Michael C. Hall as a blood spatter analyst for the Miami police who moonlights as a vigilante serial killer.",
        "answer": "What is Dexter?"
    },
    {
        "category": "SPORTS BROADCASTING",
        "question": "This announcer, 'the voice of CBS Sports' for over 35 years, is known for his work on NFL games, the Masters, and March Madness.",
        "answer": "Who is Jim Nantz?"
    }
];

// Function to generate random game data
function generateGameData() {
    const categories = ["CBS", "SHOWTIME", "PARAMOUNT+ ORIGINAL", "SPORT", "BRANDS", "CLASSIC MOVIES"];
    const gameData = {
        "categories": {},
        "final_jeopardy": finalJeopardyDB[Math.floor(Math.random() * finalJeopardyDB.length)]
    };
    
    // Generate questions for each category
    categories.forEach(category => {
        gameData.categories[category] = {};
        
        // Get questions for this category and shuffle them
        const questions = [...questionDB[category]];
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        // Assign questions to values 1 through 5
        for (let i = 1; i <= 5; i++) {
            gameData.categories[category][i] = questions[i - 1];
        }
    });
    
    return gameData;
}

// Audio Manager - Improved system to handle audio smoothly
const AudioManager = {
    // Queue for managing speech synthesis
    speechQueue: [],
    isSpeaking: false,
    currentUtterance: null,
    bestVoice: null,
    audioEnabled: true,
    
    // Initialize audio system
    init() {
        this.setupVoice();
        this.attachEventListeners();
        console.log('Audio Manager initialized');
    },
    
    // Setup voice recognition
    setupVoice() {
        if ('speechSynthesis' in window) {
            // Load voices immediately or wait for them to become available
            const voices = speechSynthesis.getVoices();
            if (voices.length) {
                this.processVoices(voices);
            } else {
                // Wait for voices to load
                speechSynthesis.addEventListener('voiceschanged', () => {
                    this.processVoices(speechSynthesis.getVoices());
                });
            }
        } else {
            console.warn('Speech synthesis not available in this browser');
        }
    },
    
    // Process available voices and select the best one
    processVoices(voices) {
        // Prioritize high-quality English voices
        const preferredVoices = voices.filter(voice => {
            const name = voice.name.toLowerCase();
            const lang = voice.lang.toLowerCase();
            
            return (
                (lang.includes('en-us') || lang.includes('en-gb') || lang.includes('en-')) && 
                (name.includes('english') || name.includes('british') || name.includes('american') ||
                name.includes('daniel') || name.includes('alex') || name.includes('david') ||
                name.includes('natural') || name.includes('premium') || name.includes('neural'))
            );
        });
        
        // Fallback to any English voice
        const englishVoices = voices.filter(voice => voice.lang.toLowerCase().startsWith('en-'));
        
        // Select the best available voice
        this.bestVoice = preferredVoices[0] || englishVoices[0] || voices[0];
        console.log('Selected voice:', this.bestVoice?.name || 'Default');
    },
    
    // Attach event listeners for handling audio state
    attachEventListeners() {
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
        
        // Handle window focus
        window.addEventListener('focus', () => {
            this.resume();
        });
        
        window.addEventListener('blur', () => {
            // Don't pause speech on blur, only on visibility change
        });
    },
    
    // Toggle audio on/off
    toggleAudio() {
        this.audioEnabled = !this.audioEnabled;
        if (!this.audioEnabled) {
            this.cancelAll();
        }
        return this.audioEnabled;
    },
    
    // Speak text with queueing system
    speak(text, options = {}) {
        // Don't speak if audio is disabled
        if (!text || !this.audioEnabled) return null;
        
        // Sanitize and prepare text
        const cleanText = this.sanitizeText(text);
        
        // Add to queue with priority
        const queueItem = {
            text: cleanText,
            options: {
                rate: options.rate || 0.8,
                pitch: options.pitch || 0.9,
                volume: options.volume || 0.8,
                priority: options.priority || 1 // Higher number = higher priority
            },
            onStart: options.onStart || null,
            onEnd: options.onEnd || null
        };
        
        // Insert based on priority
        if (options.priority && options.priority > 1) {
            // Higher priority items go to the front
            if (options.priority >= 10) {
                // Critical priority - cancel current and speak immediately
                this.cancelCurrent();
                this.speechQueue.unshift(queueItem);
            } else {
                // Find position based on priority
                let inserted = false;
                for (let i = 0; i < this.speechQueue.length; i++) {
                    if (this.speechQueue[i].options.priority < options.priority) {
                        this.speechQueue.splice(i, 0, queueItem);
                        inserted = true;
                        break;
                    }
                }
                if (!inserted) {
                    this.speechQueue.push(queueItem);
                }
            }
        } else {
            // Regular priority - add to end of queue
            this.speechQueue.push(queueItem);
        }
        
        // Start processing queue if not already speaking
        if (!this.isSpeaking) {
            this.processQueue();
        }
        
        return queueItem;
    },
    
    // Process the speech queue
    processQueue() {
        // If nothing to say or already speaking, exit
        if (this.speechQueue.length === 0 || this.isSpeaking) {
            return;
        }
        
        // Get the next item from the queue
        const item = this.speechQueue.shift();
        this.isSpeaking = true;
        
        try {
            // Create utterance
            const utterance = new SpeechSynthesisUtterance(item.text);
            
            // Set voice and options
            if (this.bestVoice) {
                utterance.voice = this.bestVoice;
            }
            utterance.rate = item.options.rate;
            utterance.pitch = item.options.pitch;
            utterance.volume = item.options.volume;
            
            // Track the current utterance for cancellation
            this.currentUtterance = utterance;
            
            // Set up events
            utterance.onstart = () => {
                if (item.onStart) item.onStart();
            };
            
            utterance.onend = () => {
                this.isSpeaking = false;
                this.currentUtterance = null;
                if (item.onEnd) item.onEnd();
                
                // Continue with next item in queue after a small delay to prevent overlapping
                setTimeout(() => this.processQueue(), 100);
            };
            
            utterance.onerror = (event) => {
                console.error('Speech synthesis error:', event);
                this.isSpeaking = false;
                this.currentUtterance = null;
                
                // Continue with queue despite error
                setTimeout(() => this.processQueue(), 100);
            };
            
            // Speak the text
            speechSynthesis.speak(utterance);
            
        } catch (error) {
            console.error('Error in speak function:', error);
            this.isSpeaking = false;
            this.currentUtterance = null;
            
            // Try to continue with queue
            setTimeout(() => this.processQueue(), 100);
        }
    },
    
    // Play a sound effect
    playSound(soundId, options = {}) {
        if (!this.audioEnabled) return;
        
        try {
            const sound = document.getElementById(soundId);
            if (sound) {
                // Reset position
                sound.currentTime = 0;
                
                // Set volume if provided
                if (options.volume !== undefined) {
                    sound.volume = Math.min(1, Math.max(0, options.volume));
                }
                
                // Lower speech volume during sound effect if needed
                if (options.lowerSpeechVolume && this.currentUtterance) {
                    const originalVolume = this.currentUtterance.volume;
                    this.currentUtterance.volume = Math.max(0.3, originalVolume / 2);
                    
                    // Restore volume when sound ends
                    sound.addEventListener('ended', () => {
                        if (this.currentUtterance) {
                            this.currentUtterance.volume = originalVolume;
                        }
                    }, { once: true });
                }
                
                // Play and handle promise rejection (some browsers block autoplay)
                sound.play().catch(e => console.warn('Sound play failed:', e));
            }
        } catch (error) {
            console.warn('Error playing sound:', error);
        }
    },
    
    // Cancel current utterance
    cancelCurrent() {
        if (this.isSpeaking && window.speechSynthesis) {
            try {
                speechSynthesis.cancel();
                this.isSpeaking = false;
                this.currentUtterance = null;
            } catch (e) {
                console.warn('Error cancelling speech:', e);
            }
        }
    },
    
    // Cancel all speech including queue
    cancelAll() {
        this.speechQueue = [];
        this.cancelCurrent();
    },
    
    // Pause speech synthesis
    pause() {
        if (window.speechSynthesis && this.isSpeaking) {
            try {
                speechSynthesis.pause();
            } catch (e) {
                console.warn('Error pausing speech:', e);
            }
        }
    },
    
    // Resume speech synthesis
    resume() {
        if (window.speechSynthesis && this.isSpeaking) {
            try {
                speechSynthesis.resume();
            } catch (e) {
                console.warn('Error resuming speech:', e);
                
                // Some browsers need a complete restart
                this.restartSpeech();
            }
        }
    },
    
    // Restart speech (used when resume fails)
    restartSpeech() {
        if (this.currentUtterance && this.isSpeaking) {
            try {
                speechSynthesis.cancel();
                setTimeout(() => {
                    speechSynthesis.speak(this.currentUtterance);
                }, 50);
            } catch (e) {
                console.warn('Error restarting speech:', e);
            }
        }
    },
    
    // Clean text for better speech synthesis
    sanitizeText(text) {
        if (!text) return '';
        
        // Replace difficult-to-pronounce characters
        let processed = text
            .replace(/&/g, ' and ')
            .replace(/\+/g, ' plus ')
            .replace(/\n/g, '. ')
            .replace(/\s+/g, ' ')
            .replace(/\.{2,}/g, '.')
            .trim();
            
        // Add pauses after punctuation if missing
        processed = processed
            .replace(/([.!?])\s*/g, '$1 ')
            .replace(/([,:;])\s*/g, '$1 ');
            
        return processed;
    }
};

// Game data - will be generated randomly at startup
let gameData;

// Game State
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    usedQuestions: new Set(),
    questionsAnswered: 0,
    totalQuestions: 30,
    currentQuestion: null,
    gameStarted: false,
    countdownInterval: null,
    countdownTime: 30,
    countdownRunning: false
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('startScreen'),
    gameScreen: document.getElementById('gameScreen'),
    playersList: document.getElementById('playersList'),
    startGameBtn: document.getElementById('startGameBtn'),
    audioToggle: document.getElementById('audioToggle'),
    resetBtn: document.getElementById('resetBtn'),
    showLeaderboardBtn: document.getElementById('showLeaderboardBtn'),
    currentPlayerName: document.getElementById('currentPlayerName'),
    currentScore: document.getElementById('currentScore'),
    currentBreakTime: document.getElementById('currentBreakTime'),
    valuesGrid: document.getElementById('valuesGrid'),
    questionModal: document.getElementById('questionModal'),
    questionCategory: document.getElementById('questionCategory'),
    modalPlayerName: document.getElementById('modalPlayerName'),
    questionText: document.getElementById('questionText'),
    countdownTimer: document.getElementById('countdownTimer'),
    showAnswerBtn: document.getElementById('showAnswerBtn'),
    answerSection: document.getElementById('answerSection'),
    answerText: document.getElementById('answerText'),
    correctBtn: document.getElementById('correctBtn'),
    incorrectBtn: document.getElementById('incorrectBtn'),
    leaderboardModal: document.getElementById('leaderboardModal'),
    closeLeaderboardBtn: document.getElementById('closeLeaderboardBtn'),
    leaderboardContent: document.getElementById('leaderboardContent'),
    finalResultsModal: document.getElementById('finalResultsModal'),
    finalLeaderboard: document.getElementById('finalLeaderboard'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    exportResultsBtn: document.getElementById('exportResultsBtn'),
    breakNotification: document.getElementById('breakNotification'),
    breakMessage: document.getElementById('breakMessage'),
    dismissBreakBtn: document.getElementById('dismissBreakBtn')
};

// Initialize the game
function initGame() {
    // Make sure DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initializeGameComponents();
        });
    } else {
        initializeGameComponents();
    }
}

// Initialize game components 
function initializeGameComponents() {
    try {
        // Re-get DOM elements to ensure they're available
        refreshDOMElements();
        
        // Check if critical elements are available
        const criticalElements = ['startScreen', 'gameScreen', 'playersList', 'startGameBtn'];
        const missingElements = criticalElements.filter(el => !elements[el]);
        
        if (missingElements.length > 0) {
            console.error('Missing critical elements for initialization:', missingElements);
            alert('There was a problem initializing the game. Please refresh the page.');
            return;
        }
        
        // Initialize Audio Manager
        AudioManager.init();
        
        // Generate the game data
        gameData = generateGameData();
        
        // Reset game state
        gameState = {
            players: [],
            currentPlayerIndex: 0,
            usedQuestions: new Set(),
            questionsAnswered: 0,
            totalQuestions: 30,
            currentQuestion: null,
            gameStarted: false,
            countdownInterval: null,
            countdownTime: 30,
            countdownRunning: false
        };
        
        // Setup components
        setupPlayers();
        setupEventListeners();
        createGameBoard();
        showStartScreen();
        
        // Log successful initialization
        console.log('Game initialized successfully');
    } catch (error) {
        console.error('Error initializing game:', error);
        alert('There was a problem initializing the game. Please refresh the page.');
    }
}

// Refresh DOM elements references
function refreshDOMElements() {
    try {
        // Game screens
        elements.startScreen = document.getElementById('startScreen');
        elements.gameScreen = document.getElementById('gameScreen');
        elements.playersList = document.getElementById('playersList');
        elements.playerInputs = document.getElementById('playerInputs');
        
        // Buttons
        elements.startGameBtn = document.getElementById('startGameBtn');
        elements.audioToggle = document.getElementById('audioToggle');
        elements.resetBtn = document.getElementById('resetBtn');
        elements.showLeaderboardBtn = document.getElementById('showLeaderboardBtn');
        elements.addPlayerFieldBtn = document.getElementById('addPlayerFieldBtn');
        elements.removePlayerFieldBtn = document.getElementById('removePlayerFieldBtn');
        elements.useDefaultNamesBtn = document.getElementById('useDefaultNamesBtn');
        
        // Current player info
        elements.currentPlayerName = document.getElementById('currentPlayerName');
        elements.currentScore = document.getElementById('currentScore');
        elements.currentBreakTime = document.getElementById('currentBreakTime');
        
        // Game board
        elements.valuesGrid = document.getElementById('valuesGrid');
        
        // Question modal
        elements.questionModal = document.getElementById('questionModal');
        elements.questionCategory = document.getElementById('questionCategory');
        elements.modalPlayerName = document.getElementById('modalPlayerName');
        elements.questionText = document.getElementById('questionText');
        elements.countdownTimer = document.getElementById('countdownTimer');
        elements.showAnswerBtn = document.getElementById('showAnswerBtn');
        elements.answerSection = document.getElementById('answerSection');
        elements.answerText = document.getElementById('answerText');
        elements.correctBtn = document.getElementById('correctBtn');
        elements.incorrectBtn = document.getElementById('incorrectBtn');
        
        // Leaderboard
        elements.leaderboardModal = document.getElementById('leaderboardModal');
        elements.closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
        elements.leaderboardContent = document.getElementById('leaderboardContent');
        
        // Results
        elements.finalResultsModal = document.getElementById('finalResultsModal');
        elements.finalLeaderboard = document.getElementById('finalLeaderboard');
        elements.playAgainBtn = document.getElementById('playAgainBtn');
        elements.exportResultsBtn = document.getElementById('exportResultsBtn');
        
        // Notifications
        elements.breakNotification = document.getElementById('breakNotification');
        elements.breakMessage = document.getElementById('breakMessage');
        elements.dismissBreakBtn = document.getElementById('dismissBreakBtn');
        
        // Missing critical elements check
        const criticalElements = ['startScreen', 'gameScreen', 'playersList', 'startGameBtn'];
        const missingCritical = criticalElements.filter(el => !elements[el]);
        if (missingCritical.length > 0) {
            console.warn(`Missing critical DOM elements: ${missingCritical.join(', ')}`);
        }
        
        return true;
    } catch (error) {
        console.error('Error refreshing DOM elements:', error);
        return false;
    }
}

// Setup players with individual stats
function setupPlayers() {
    // Get player names from input fields if available
    const inputFields = document.querySelectorAll('.player-name-input');

    // If input fields exist and have values, use those names
    if (inputFields.length > 0) {
        const customNames = Array.from(inputFields)
            .map(input => input.value.trim())
            .filter(name => name !== '');

        // Use custom names for player setup
        gameState.players = customNames.map((name, index) => ({
            id: index,
            name: name,
            score: 0,
            breakTime: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            incorrectAnswers: 0
        }));
    } else {
        // No players yet, will be populated from input fields
        gameState.players = [];
    }
}

// Setup event listeners
function setupEventListeners() {
    elements.startGameBtn.addEventListener('click', validateAndStartGame);
    elements.audioToggle.addEventListener('click', toggleAudio);
    elements.resetBtn.addEventListener('click', resetGame);
    elements.showLeaderboardBtn.addEventListener('click', showLeaderboard);
    elements.closeLeaderboardBtn.addEventListener('click', hideLeaderboard);
    elements.showAnswerBtn.addEventListener('click', showAnswer);
    elements.correctBtn.addEventListener('click', () => handleAnswer(true));
    elements.incorrectBtn.addEventListener('click', () => handleAnswer(false));
    elements.playAgainBtn.addEventListener('click', resetGame);
    elements.exportResultsBtn.addEventListener('click', exportResults);
    elements.dismissBreakBtn.addEventListener('click', dismissBreakNotification);

    // Player input field management
    const addPlayerFieldBtn = document.getElementById('addPlayerFieldBtn');
    const removePlayerFieldBtn = document.getElementById('removePlayerFieldBtn');
    const useDefaultNamesBtn = document.getElementById('useDefaultNamesBtn');

    if (addPlayerFieldBtn) {
        addPlayerFieldBtn.addEventListener('click', () => {
            const currentInputs = document.querySelectorAll('.player-name-input');
            addPlayerInputField(currentInputs.length);
        });
    }

    if (removePlayerFieldBtn) {
        removePlayerFieldBtn.addEventListener('click', () => {
            const inputContainer = document.getElementById('playerInputs');
            if (inputContainer.lastChild && inputContainer.children.length > 1) {
                inputContainer.removeChild(inputContainer.lastChild);
            }
        });
    }

    if (useDefaultNamesBtn) {
        useDefaultNamesBtn.addEventListener('click', useDefaultPlayerNames);
    }

    // Close modals when clicking outside
    elements.questionModal.addEventListener('click', (e) => {
        if (e.target === elements.questionModal) {
            // Don't allow closing during active question
        }
    });

    elements.leaderboardModal.addEventListener('click', (e) => {
        if (e.target === elements.leaderboardModal) {
            hideLeaderboard();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Only handle shortcuts when not in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch (e.key) {
            case ' ':
                // Spacebar to show answer
                if (elements.questionModal.style.display === 'block' && !elements.answerSection.classList.contains('hidden') === false) {
                    e.preventDefault();
                    showAnswer();
                }
                break;
            case 'c':
            case 'C':
                // C for correct
                if (!elements.answerSection.classList.contains('hidden')) {
                    e.preventDefault();
                    handleAnswer(true);
                }
                break;
            case 'x':
            case 'X':
                // X for incorrect
                if (!elements.answerSection.classList.contains('hidden')) {
                    e.preventDefault();
                    handleAnswer(false);
                }
                break;
            case 'l':
            case 'L':
                // L for leaderboard
                if (gameState.gameStarted) {
                    e.preventDefault();
                    showLeaderboard();
                }
                break;
            case 'Escape':
                // Escape to close modals
                if (elements.leaderboardModal.style.display === 'block') {
                    hideLeaderboard();
                }
                break;
        }
    });
}

// Create game board
function createGameBoard() {
    const categories = Object.keys(gameData.categories);
    const values = ['1', '2', '3', '4', '5'];

    // Update category headers
    const categoryHeaders = document.querySelectorAll('.category-cell');
    if (categoryHeaders && categoryHeaders.length === categories.length) {
        categories.forEach((category, index) => {
            categoryHeaders[index].textContent = category;
        });
    }

    elements.valuesGrid.innerHTML = '';

    values.forEach(value => {
        categories.forEach(category => {
            const cell = document.createElement('div');
            cell.className = 'value-cell';
            cell.textContent = `${value} min`;
            cell.dataset.category = category;
            cell.dataset.value = value;
            cell.addEventListener('click', () => selectQuestion(category, value, cell));
            elements.valuesGrid.appendChild(cell);
        });
    });
}

// Show start screen with player list and name inputs
function showStartScreen() {
    elements.playersList.innerHTML = '';

    // Only show player list if game has players already
    if (gameState.players.length > 0) {
        gameState.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player-item';
            playerDiv.textContent = player.name;
            elements.playersList.appendChild(playerDiv);
        });
    }

    // Set up player input fields
    setupPlayerInputFields();

    elements.startScreen.classList.remove('hidden');
    elements.gameScreen.classList.add('hidden');
}

// Setup player input fields
function setupPlayerInputFields() {
    const inputContainer = document.getElementById('playerInputs');
    inputContainer.innerHTML = '';

    // Create default number of input fields (24)
    const numPlayers = 24;

    for (let i = 0; i < numPlayers; i++) {
        addPlayerInputField(i);
    }
}

// Add a single player input field
function addPlayerInputField(index) {
    const inputContainer = document.getElementById('playerInputs');

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'player-input-wrapper';

    const label = document.createElement('label');
    label.textContent = `Player ${index + 1}:`;
    label.htmlFor = `player-input-${index}`;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `player-input-${index}`;
    input.className = 'player-name-input';
    input.placeholder = `Enter name`;
    input.value = '';

    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    inputContainer.appendChild(inputWrapper);
}

// Validate and start the game
function validateAndStartGame() {
    try {
        // Refresh DOM elements first
        refreshDOMElements();
        
        // Check if game is already started - if so, don't try to start again
        if (gameState.gameStarted) {
            console.warn('Game already started, ignoring start request');
            return;
        }
        
        const inputs = document.querySelectorAll('.player-name-input');
        
        // Make sure inputs exist
        if (!inputs || inputs.length === 0) {
            console.error('Player input fields not found');
            alert('There was a problem initializing the game. Please try refreshing the page.');
            return;
        }
        
        const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '');

        // Require at least 2 players
        if (filledInputs.length < 2) {
            alert('Please enter at least 2 player names to start the game.');
            return;
        }

        // Make sure we have all required elements before starting
        const requiredElements = [
            'gameScreen', 'questionModal', 'countdownTimer', 'currentPlayerName', 
            'currentScore', 'currentBreakTime', 'valuesGrid'
        ];
        const missingElements = requiredElements.filter(el => !elements[el]);
        
        if (missingElements.length > 0) {
            console.error('Missing required elements:', missingElements);
            alert('There was a problem initializing the game. Please try refreshing the page.');
            return;
        }
        
        // Setup players before starting
        setupPlayers();
        
        // Double check that we have players
        if (gameState.players.length < 2) {
            alert('Please enter at least 2 player names to start the game.');
            return;
        }
        
        console.log('Starting game with', gameState.players.length, 'players');
        startGame();
    } catch (error) {
        console.error('Error in validateAndStartGame:', error);
        alert('There was a problem starting the game. Please try refreshing the page.');
    }
}

// Use default player names
function useDefaultPlayerNames() {
    const inputs = document.querySelectorAll('.player-name-input');
    
    // Generate simple default names (Player 1, Player 2, etc.)
    inputs.forEach((input, index) => {
        input.value = `Player ${index + 1}`;
    });
}

// Start the game
function startGame() {
    try {
        // Set game state
        gameState.gameStarted = true;
        gameState.currentPlayerIndex = 0;
        
        // Make sure elements exist
        if (!elements.startScreen || !elements.gameScreen) {
            console.error('Critical game screens missing');
            refreshDOMElements();
            
            if (!elements.startScreen || !elements.gameScreen) {
                alert('There was a problem starting the game. Please try refreshing the page.');
                return;
            }
        }
    
        // Show game screen
        elements.startScreen.classList.add('hidden');
        elements.gameScreen.classList.remove('hidden');
    
        // Make sure the player display is updated
        updateCurrentPlayerDisplay();
    
        // Sound and speech
        AudioManager.playSound('clickSound');
        
        // Welcome speech
        AudioManager.speak("Welcome to Jeopardy! Today we are showcasing the finest entertainment from Paramount Plus, and our contestants will be competing for break time!", {
            rate: 0.8,
            pitch: 0.9,
            priority: 10
        }); 
    
        // Clear any existing timeouts
        if (window._gameTimeouts) {
            window._gameTimeouts.forEach(id => clearTimeout(id));
        }
        window._gameTimeouts = [];
    
        // Use tracked timeout - announce categories after welcome
        const timeoutId = setTimeout(() => {
            try {
                const categories = Object.keys(gameData.categories);
                const categoryText = categories.join(', ');
                
                const currentPlayer = getCurrentPlayer();
                if (!currentPlayer) {
                    console.error('No current player in startGame timeout');
                    return;
                }
                
                AudioManager.speak(`Our categories today are: ${categoryText}.... Good luck, and remember to phrase your response in the form of a question!`, {
                    rate: 0.8,
                    priority: 2,
                    onEnd: () => {
                        // Small pause before announcing first player
                        setTimeout(() => {
                            AudioManager.speak(`${currentPlayer.name}, you're up first. Please select a category and value.`, {
                                rate: 0.8,
                                priority: 2
                            });
                        }, 800);
                    }
                });
            } catch (error) {
                console.error('Error in startGame timeout:', error);
            }
        }, 7000); 
        
        // Track timeout
        if (!window._gameTimeouts) window._gameTimeouts = [];
        window._gameTimeouts.push(timeoutId);
        
        console.log('Game started successfully');
    } catch (error) {
        console.error('Error in startGame:', error);
        alert('There was a problem starting the game. Please try refreshing the page.');
    }
}

// Toggle audio
function toggleAudio() {
    const isEnabled = AudioManager.toggleAudio();
    elements.audioToggle.textContent = isEnabled ? '🔊 Audio Enabled' : '🔇 Audio Disabled';
}

// Get current player
function getCurrentPlayer() {
    return gameState.players[gameState.currentPlayerIndex];
}

// Update current player display
function updateCurrentPlayerDisplay() {
    try {
        const player = getCurrentPlayer();
        
        // Make sure we have a player and the necessary DOM elements
        if (!player) {
            console.error('No current player in updateCurrentPlayerDisplay');
            return;
        }
        
        // Check for DOM elements and refresh if needed
        if (!elements.currentPlayerName || !elements.currentScore || !elements.currentBreakTime) {
            console.warn('Missing player display elements');
            refreshDOMElements();
        }
        
        // Update display if elements exist
        if (elements.currentPlayerName) elements.currentPlayerName.textContent = player.name;
        if (elements.currentScore) elements.currentScore.textContent = `${player.score} min`;
        if (elements.currentBreakTime) elements.currentBreakTime.textContent = `${player.breakTime} min`;
    } catch (error) {
        console.error('Error in updateCurrentPlayerDisplay:', error);
    }
}

// Select a question
function selectQuestion(category, value, cell) {
    if (!gameState.gameStarted || cell.classList.contains('used')) return;

    const questionKey = `${category}-${value}`;
    if (gameState.usedQuestions.has(questionKey)) return;

    AudioManager.playSound('clickSound');
    cell.classList.add('used');
    gameState.usedQuestions.add(questionKey);

    const questionData = gameData.categories[category][value];
    gameState.currentQuestion = {
        category,
        value: parseInt(value),
        question: questionData.question,
        answer: questionData.answer
    };

    showQuestionModal();
}

// Show question modal
function showQuestionModal() {
    try {
        // Make sure we have a current player and question
        const player = getCurrentPlayer();
        if (!player || !gameState.currentQuestion) {
            console.error('No current player or question in showQuestionModal');
            return;
        }
        
        // Make sure we have required elements
        if (!elements.questionCategory || !elements.modalPlayerName || 
            !elements.questionText || !elements.answerSection || 
            !elements.showAnswerBtn || !elements.questionModal) {
            console.error('Missing required DOM elements in showQuestionModal');
            refreshDOMElements();
        }
    
        // Set content
        if (elements.questionCategory) elements.questionCategory.textContent = gameState.currentQuestion.category;
        if (elements.modalPlayerName) elements.modalPlayerName.textContent = player.name;
        if (elements.questionText) elements.questionText.textContent = gameState.currentQuestion.question;
    
        // Reset modal state
        if (elements.answerSection) elements.answerSection.classList.add('hidden');
        if (elements.showAnswerBtn) elements.showAnswerBtn.style.display = 'inline-flex';
    
        if (elements.questionModal) elements.questionModal.style.display = 'block';
    
        // First stop any existing countdown to avoid duplicates
        stopCountdown();
        
        // Cancel any existing speech and announce the question with high priority
        AudioManager.cancelAll();
        AudioManager.speak(`${player.name}, for ${gameState.currentQuestion.value} minutes of break time, in the category ${gameState.currentQuestion.category}: ${gameState.currentQuestion.question}`, {
            rate: 0.8,
            pitch: 0.9,
            priority: 10,
            onEnd: () => {
                // Start countdown after the question is fully announced
                startCountdown();
            }
        });
    } catch (error) {
        console.error('Error in showQuestionModal:', error);
    }
}

// Start countdown timer
function startCountdown() {
    // Only start if not already running
    if (gameState.countdownRunning) {
        console.log('Countdown already running, stopping existing one first');
        stopCountdown();
    }
    
    // Refresh elements to ensure we have the latest reference
    elements.countdownTimer = document.getElementById('countdownTimer');
    
    // Check if countdown element exists
    if (!elements.countdownTimer) {
        console.error('Countdown timer element not found');
        return;
    }
    
    // Set initial time
    gameState.countdownTime = 30;
    elements.countdownTimer.textContent = gameState.countdownTime;
    elements.countdownTimer.className = 'countdown-timer';
    
    console.log('Starting countdown timer');
    
    // Start the interval
    gameState.countdownRunning = true;
    gameState.countdownInterval = setInterval(() => {
        try {
            gameState.countdownTime--;
            
            // Re-check if element still exists
            if (!elements.countdownTimer) {
                elements.countdownTimer = document.getElementById('countdownTimer');
            }
            
            // Update display if element exists
            if (elements.countdownTimer) {
                elements.countdownTimer.textContent = gameState.countdownTime;
                
                // Add warning class when time is running low
                if (gameState.countdownTime <= 10 && gameState.countdownTime > 5) {
                    elements.countdownTimer.className = 'countdown-timer warning';
                    
                    // If at exactly 10 seconds, announce warning
                    if (gameState.countdownTime === 10) {
                        AudioManager.speak("10 seconds remaining", { 
                            rate: 0.9, 
                            pitch: 1.0,
                            priority: 5
                        });
                    }
                } else if (gameState.countdownTime <= 5) {
                    elements.countdownTimer.className = 'countdown-timer danger';
                    
                    // If at exactly 5 seconds, announce final warning
                    if (gameState.countdownTime === 5) {
                        AudioManager.speak("5 seconds", { 
                            rate: 1.0, 
                            pitch: 1.1,
                            priority: 5
                        });
                    }
                }
            } else {
                console.error('Countdown timer element lost during countdown');
            }
            
            // Time's up!
            if (gameState.countdownTime <= 0) {
                stopCountdown();
                timeUp();
            }
        } catch (error) {
            console.error('Error in countdown interval:', error);
            stopCountdown(); // Safety: stop the interval if there's an error
        }
    }, 1000);
}

// Stop countdown timer
function stopCountdown() {
    if (gameState.countdownInterval) {
        clearInterval(gameState.countdownInterval);
        gameState.countdownInterval = null;
        gameState.countdownRunning = false;
    }
}

// Time's up function
function timeUp() {
    try {
        // If answer section exists and hasn't been shown yet, show it
        if (elements.answerSection && elements.answerSection.classList.contains('hidden')) {
            showAnswer();
        } else if (!elements.answerSection) {
            console.error('Answer section element not found');
        }
        
        AudioManager.speak("Time's up!", { 
            rate: 0.9, 
            pitch: 1.0,
            priority: 10
        });
        
        // Play a sound for time up
        AudioManager.playSound('incorrectSound', { volume: 0.7 });
        
        // Automatically mark as incorrect after 2 seconds
        setTimeout(() => {
            handleAnswer(false);
        }, 2000);
    } catch (error) {
        console.error('Error in timeUp function:', error);
        // Try to recover from error
        if (gameState.currentQuestion) {
            AudioManager.speak("Sorry, there was a problem with the timer. Let's try to continue.", { 
                rate: 0.8, 
                pitch: 0.9,
                priority: 8
            });
        }
    }
}

// Show answer
function showAnswer() {
    // Stop the countdown timer
    stopCountdown();
    
    try {
        // Make sure we have all the elements and data we need
        if (!gameState.currentQuestion || !gameState.currentQuestion.answer) {
            console.error('Current question or answer is missing');
            return;
        }
        
        if (elements.answerText && elements.answerSection && elements.showAnswerBtn) {
            elements.answerText.textContent = gameState.currentQuestion.answer;
            elements.answerSection.classList.remove('hidden');
            elements.showAnswerBtn.style.display = 'none';
            
            AudioManager.speak(`The correct answer is: ${gameState.currentQuestion.answer}`, {
                rate: 0.8,
                pitch: 0.9,
                priority: 8
            });
        } else {
            console.error('Answer elements missing from the DOM');
        }
    } catch (error) {
        console.error('Error in showAnswer function:', error);
    }
}

// Handle correct/incorrect answer
function handleAnswer(isCorrect) {
    // Stop the countdown timer
    stopCountdown();
    
    const player = getCurrentPlayer();
    const value = parseInt(gameState.currentQuestion.value);

    player.questionsAnswered++;

    if (isCorrect) {
        // Correct answer: add break time directly
        player.score += value;
        player.breakTime += value;
        player.correctAnswers++;

        AudioManager.playSound('correctSound');
        showBreakNotification(`${player.name} earned ${value} minutes of break time!`, 'correct');

        AudioManager.speak(`That's correct! ${player.name} earns ${value} minutes of break time!`, {
            rate: 0.8,
            pitch: 1.0,
            priority: 8
        });

        // Add visual feedback
        elements.questionModal.classList.add('correct-animation');
        setTimeout(() => elements.questionModal.classList.remove('correct-animation'), 500);

    } else {
        // Incorrect answer: lose break time
        player.incorrectAnswers++;

        // Lose 1 minute for being wrong
        const breakTimeLost = 1;
        player.breakTime = Math.max(0, player.breakTime - breakTimeLost);

        AudioManager.playSound('incorrectSound');
        showBreakNotification(`${player.name} lost ${breakTimeLost} minute of break time.`, 'incorrect');

        AudioManager.speak(`That's incorrect. ${player.name} loses ${breakTimeLost} minute of break time. The correct answer was: ${gameState.currentQuestion.answer}`, {
            rate: 0.8,
            pitch: 0.85,
            priority: 8
        });

        // Add visual feedback
        elements.questionModal.classList.add('incorrect-animation');
        setTimeout(() => elements.questionModal.classList.remove('incorrect-animation'), 500);
    }

    updateCurrentPlayerDisplay();
    gameState.questionsAnswered++;

    // Close modal and move to next player after speech completes
    setTimeout(() => {
        elements.questionModal.style.display = 'none';
        nextPlayer();
    }, 2500);
}

// Show break time notification
function showBreakNotification(message, type) {
    elements.breakMessage.textContent = message;
    elements.breakNotification.classList.remove('hidden');

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        dismissBreakNotification();
    }, 3000);
}

// Dismiss break notification
function dismissBreakNotification() {
    elements.breakNotification.classList.add('hidden');
}

// Move to next player
function nextPlayer() {
    try {
        // Make sure we have players
        if (!gameState.players || gameState.players.length === 0) {
            console.error('No players in nextPlayer function');
            return;
        }
        
        // Move to next player
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        updateCurrentPlayerDisplay();
    
        // Check if game is complete
        if (gameState.questionsAnswered >= gameState.totalQuestions) {
            endGame();
            return;
        }
    
        // Announce next player
        const nextPlayer = getCurrentPlayer();
        if (!nextPlayer) {
            console.error('No next player found');
            return;
        }
        
        // Announce with a slight delay to allow previous speech to finish
        setTimeout(() => {
            AudioManager.speak(`${nextPlayer.name}, you're up next. Please select a category and break time amount.`, {
                rate: 0.8,
                priority: 3
            });
        }, 500);
    } catch (error) {
        console.error('Error in nextPlayer:', error);
    }
}

// Show leaderboard
function showLeaderboard() {
    const sortedPlayers = [...gameState.players].sort((a, b) => {
        // Sort by score first, then by break time
        if (b.score !== a.score) return b.score - a.score;
        return b.breakTime - a.breakTime;
    });

    let html = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Score (min)</th>
                    <th>Break Time (min)</th>
                    <th>Correct</th>
                    <th>Incorrect</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedPlayers.forEach((player, index) => {
        const isCurrentPlayer = player.id === getCurrentPlayer().id;
        const rankClass = index === 0 ? 'top-player' : index === 1 ? 'second-player' : index === 2 ? 'third-player' : '';
        const highlightClass = isCurrentPlayer ? 'highlight-row' : '';

        html += `
            <tr class="player-row ${rankClass} ${highlightClass}">
                <td class="player-rank">${index + 1}</td>
                <td>${player.name}${isCurrentPlayer ? ' (Current)' : ''}</td>
                <td>${player.score} min</td>
                <td>${player.breakTime} min</td>
                <td>${player.correctAnswers}</td>
                <td>${player.incorrectAnswers}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    elements.leaderboardContent.innerHTML = html;
    elements.leaderboardModal.style.display = 'block';

    AudioManager.playSound('clickSound');
}

// Hide leaderboard
function hideLeaderboard() {
    elements.leaderboardModal.style.display = 'none';
}

// End game and show final results
function endGame() {
    const sortedPlayers = [...gameState.players].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.breakTime - a.breakTime;
    });

    let html = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Final Rank</th>
                    <th>Player</th>
                    <th>Final Score (min)</th>
                    <th>Total Break Time (min)</th>
                    <th>Questions Answered</th>
                    <th>Accuracy</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedPlayers.forEach((player, index) => {
        const rankClass = index === 0 ? 'top-player' : index === 1 ? 'second-player' : index === 2 ? 'third-player' : '';
        const accuracy = player.questionsAnswered > 0 ? Math.round((player.correctAnswers / player.questionsAnswered) * 100) : 0;

        html += `
            <tr class="player-row ${rankClass}">
                <td class="player-rank">${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.score} min</td>
                <td>${player.breakTime} min</td>
                <td>${player.questionsAnswered}</td>
                <td>${accuracy}%</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    elements.finalLeaderboard.innerHTML = html;
    elements.finalResultsModal.style.display = 'block';

    AudioManager.playSound('applauseSound');

    // Announce final results
    const winner = sortedPlayers[0];
    AudioManager.speak(`Congratulations to our champion, ${winner.name}, with a final score of ${winner.score} minutes and ${winner.breakTime} minutes of break time! Thank you all for playing Paramount Plus Jeopardy!`, {
        rate: 0.8,
        pitch: 1.0,
        priority: 10
    });
}

// Export results
function exportResults() {
    const sortedPlayers = [...gameState.players].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.breakTime - a.breakTime;
    });

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Rank,Player,Score (min),Break Time (min),Questions Answered,Correct Answers,Incorrect Answers,Accuracy\n";

    sortedPlayers.forEach((player, index) => {
        const accuracy = player.questionsAnswered > 0 ? Math.round((player.correctAnswers / player.questionsAnswered) * 100) : 0;
        csvContent += `${index + 1},${player.name},${player.score},${player.breakTime},${player.questionsAnswered},${player.correctAnswers},${player.incorrectAnswers},${accuracy}%\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "jeopardy_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    AudioManager.playSound('clickSound');
}

// Reset game
function resetGame() {
    try {
        // Stop any running countdown and speech
        stopCountdown();
        AudioManager.cancelAll();
        
        // Clear any pending timeouts
        if (window._gameTimeouts) {
            window._gameTimeouts.forEach(id => clearTimeout(id));
        }
        window._gameTimeouts = [];
        
        // Refresh DOM elements
        refreshDOMElements();
        
        // Make sure critical elements are available after refresh
        const criticalElements = ['startScreen', 'gameScreen', 'playersList'];
        const missingElements = criticalElements.filter(el => !elements[el]);
        
        if (missingElements.length > 0) {
            console.error('Missing critical elements during reset:', missingElements);
            alert('There was a problem resetting the game. Please refresh the page.');
            return;
        }
        
        // Generate new game data
        gameData = generateGameData();
        
        // Reset game state
        gameState = {
            players: [],
            currentPlayerIndex: 0,
            usedQuestions: new Set(),
            questionsAnswered: 0,
            totalQuestions: 30,
            currentQuestion: null,
            gameStarted: false,
            countdownInterval: null,
            countdownTime: 30,
            countdownRunning: false
        };
    
        // Re-initialize components
        setupPlayers();
        setupEventListeners(); // Re-bind events to be safe
        createGameBoard();
    
        // Hide all modals if the elements exist
        if (elements.questionModal) elements.questionModal.style.display = 'none';
        if (elements.leaderboardModal) elements.leaderboardModal.style.display = 'none';
        if (elements.finalResultsModal) elements.finalResultsModal.style.display = 'none';
        if (elements.breakNotification) elements.breakNotification.classList.add('hidden');
        
        // Reset any countdown UI
        if (elements.countdownTimer) {
            elements.countdownTimer.textContent = '30';
            elements.countdownTimer.className = 'countdown-timer';
        }
    
        // Go back to start screen
        showStartScreen();
        AudioManager.playSound('clickSound');
        
        // Announce game reset
        AudioManager.speak("Game has been reset. Ready to play again!", {
            rate: 0.8,
            priority: 5
        });
        
        console.log('Game reset successfully');
    } catch (error) {
        console.error('Error resetting game:', error);
        alert('There was a problem resetting the game. Please refresh the page.');
    }
}

// Play sound effect - now just an adapter to AudioManager
function playSound(soundId) {
    AudioManager.playSound(soundId);
}

// Enhanced category introduction
function introduceCategoriesWithStyle() {
    const categories = Object.keys(gameData.categories);
    
    // Create a speech queue with pauses between categories
    let speechText = "Our categories today are:";
    
    // Add each category with dramatic pause
    categories.forEach((category, index) => {
        // Schedule this announcement with an increasing delay
        setTimeout(() => {
            // Highlight the category visually
            const categoryElements = document.querySelectorAll('.category-cell');
            if (categoryElements && categoryElements.length > index) {
                categoryElements[index].classList.add('highlight-category');
                
                // Remove highlight after a moment
                setTimeout(() => {
                    categoryElements[index].classList.remove('highlight-category');
                }, 2000);
            }
            
            // Announce with varying pitch for interest
            const pitch = 0.9 + (index % 3) * 0.1; // Slight pitch variation
            AudioManager.speak(category, {
                rate: 0.75,
                pitch: pitch,
                priority: 5
            });
        }, index * 2500); // Space out announcements
    });
    
    // Add final instruction after all categories
    setTimeout(() => {
        AudioManager.speak("Remember to phrase your answers in the form of a question!", {
            rate: 0.8,
            pitch: 1.0,
            priority: 3
        });
        
        // After instructions, announce first player
        setTimeout(() => {
            const currentPlayer = getCurrentPlayer();
            if (currentPlayer) {
                AudioManager.speak(`${currentPlayer.name}, you're up first. Please select a category and value.`, {
                    rate: 0.8,
                    priority: 3
                });
            }
        }, 4000);
    }, categories.length * 2500 + 1000);
    
    // Return the entire combined speech for fallback
    return speechText + " " + categories.join(", ") + ". Remember to phrase your answer in the form of a question!";
}

// Add dramatic sound effects for key moments
function addDramaticSoundEffect(type) {
    switch(type) {
        case 'finalQuestion':
            // For the last question announcement
            AudioManager.playSound('drumrollSound', { volume: 0.7 });
            break;
        case 'milestone':
            // For reaching halfway point or other milestone
            AudioManager.playSound('chimeSound', { volume: 0.6 });
            break;
        case 'finalJeopardy':
            // For final jeopardy announcement
            AudioManager.playSound('dramaticSound', { volume: 0.8 });
            break;
    }
}

// Voice-assisted question selection
function assistWithQuestionSelection() {
    // If fewer than 10 questions remain, give a voice tip
    if (gameState.questionsAnswered >= 20) {
        const remainingQuestions = gameState.totalQuestions - gameState.questionsAnswered;
        
        if (remainingQuestions <= 5) {
            AudioManager.speak(`Only ${remainingQuestions} questions left! Choose wisely.`, {
                rate: 0.8,
                priority: 2
            });
        } else {
            AudioManager.speak(`${remainingQuestions} questions remaining.`, {
                rate: 0.8,
                priority: 1
            });
        }
    }
}

// Enhanced time's up announcement with sound effect
function enhancedTimeUp() {
    // Play a "time's up" sound
    AudioManager.playSound('buzzerSound', { volume: 0.8 });
    
    // Use a higher priority to interrupt other speech
    AudioManager.speak("Time's up!", { 
        rate: 1.1, 
        pitch: 1.1,
        priority: 10
    });
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing game');
    // Wait a short moment to ensure all scripts and resources are loaded
    setTimeout(() => {
        try {
            // Initialize the audio system first
            AudioManager.init();
            
            // Then initialize the game
            initGame();
        } catch (error) {
            console.error('Error during game initialization:', error);
            alert('There was a problem initializing the game. Please refresh the page.');
        }
    }, 100);
});

// Handle page visibility changes 
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause countdown if page is hidden
        if (gameState.countdownRunning) {
            stopCountdown();
        }
    }
});

// Progress tracking for adaptive audio
function trackGameProgress() {
    const progress = gameState.questionsAnswered / gameState.totalQuestions;
    
    // Provide progress-based announcements
    if (gameState.questionsAnswered === Math.floor(gameState.totalQuestions / 2)) {
        // Halfway point
        addDramaticSoundEffect('milestone');
        AudioManager.speak("We're halfway through the game! Let's check the leaderboard.", {
            rate: 0.8,
            priority: 4
        });
        
        // Show leaderboard after announcement
        setTimeout(showLeaderboard, 2500);
    } 
    else if (gameState.questionsAnswered === gameState.totalQuestions - 5) {
        // Final five questions
        addDramaticSoundEffect('finalQuestion');
        AudioManager.speak("Only five questions remain! The competition is heating up!", {
            rate: 0.85,
            pitch: 1.05,
            priority: 5
        });
    }
    
    return progress;
}

// Call this after each question is answered
function updateProgressAndAudio() {
    // Track progress and get percentage complete
    const progressPct = trackGameProgress() * 100;
    
    // Update the current player
    updateCurrentPlayerDisplay();
    
    // If we're near the end, add some drama to the audio
    if (progressPct > 80) {
        // More urgent/excited announcements for the final questions
        const nextPlayer = getCurrentPlayer();
        
        // Check if this player is leading
        const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);
        const isLeader = sortedPlayers[0].id === nextPlayer.id;
        
        if (isLeader) {
            AudioManager.speak(`${nextPlayer.name} is in the lead and selects next.`, {
                rate: 0.9,
                pitch: 1.05,
                priority: 4
            });
        } else {
            // Find position
            const position = sortedPlayers.findIndex(p => p.id === nextPlayer.id) + 1;
            const pointsDiff = sortedPlayers[0].score - nextPlayer.score;
            
            AudioManager.speak(`${nextPlayer.name}, currently in position ${position}, ${pointsDiff} points behind the leader, selects next.`, {
                rate: 0.9,
                pitch: 1.0,
                priority: 4
            });
        }
    }
}

// Add this to the initialization to ensure all audio elements are ready
function preloadAudioResources() {
    // List of all sound effects used in the game
    const soundEffects = [
        'clickSound',
        'correctSound',
        'incorrectSound',
        'applauseSound',
        'buzzerSound',
        'chimeSound',
        'dramaticSound',
        'drumrollSound'
    ];
    
    // Make sure all sounds are preloaded
    soundEffects.forEach(soundId => {
        const sound = document.getElementById(soundId);
        if (sound) {
            // Try to preload
            sound.load();
            
            // Add error handler
            sound.onerror = (e) => {
                console.warn(`Error preloading sound ${soundId}:`, e);
            };
        } else {
            console.warn(`Sound element not found: ${soundId}`);
        }
    });
    
    // Log success
    console.log('Audio resources preloaded');
}

// Add this call to the initialization function to guarantee audio elements are ready
function initializeAudioElements() {
    // Create any missing audio elements programmatically
    const requiredSounds = {
        'buzzerSound': 'data:audio/wav;base64,UklGRuQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YcADAAA/hYqKbF1fdJivrJBgKDVgodDbq2QdBj+a2/LDciUFLIHO8tiJNggZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAEZXrLm66dgFAxDmNnswIA2CCJvwOrhmEgMGFSl4PCbUxIMO5DU7MLQfjcIInS/6N2STQsZUJzc8K9kGQswaLrq5KJUDAxEmtjtxnk0CSVyv+jil0sLGVej3++jWBQMPZLW7cR8OgkgeL7p4ZhODBpVn9zvsIodBgZHiKiTX0I6OVBja2ldSkI+N0NhaXRranBva2VfV05EPzo2NEI4SzY5PENQZnODlqGvvMXP1dbU0cvDubGpopuTjIV9dmxgWVBHPTYvKSMeHB4gIycvOUVTYHF+i5qovcrX4erg18vKvbSspZyTioJ4bmRZT0U7Mi8oJCMmKikvNkBNWmZzgI2ZprK/zNjj7PDz8O3m39bMwrislIl+dGpgVkxDOjEqJiQmKi0yOUJOW2dxfYiVo6+8ydTf6O3w8Ozl3dPJv7Wsnparnp/Cv7SdkH1waFhLPjUsJSEmKSwwNj9IUl5ocHmEkaGpuMfR193k5eXh2dDFu7Cjl4uAd2xjXFJJQTkyLSgrMDQ5PkRNV2BpcXeBjpagrLrI09zl7fLz8eze1MrAta2kmZCHfnRrYVdNRDw1MSwrLC0wNDpBSVNcZW11foeTm6WvucLJ0Njf5uri3dbOxr+3r6eempSOh4F6c2xkXFRNRkA7NzQ0NDU4PEFHTVNYXWJpcHZ8gYeNkZecoaWpr7S3vL/Cw8TDwb+8ube0sq6rqaWjoJ2al5KPi4eDgHx5dnNwbWtpZmRhX11aWFZUUk9NTMJBP0E/PT0/QEdFTVJJRDg6Ni8rKCUlJCUmJyotMDU6P0NITVJXXGFmaWtvAUMBQT8/PT1BR0VNUklEODo2Ly0nJCQlJicqLTA1Oj9DSE1SV1xhZmlrbHBzdXZ4eXp7e3x8e3t6eXh2dHJwbmtpaGZkYl9dW1lXVVRSTkpJRkRBPz07OTc1MzEwLi0sKyopKCg1LDU4PTw8W1pbXVxcXF1dXVUyOC44MzM1Mw==',
        'drumrollSound': 'data:audio/wav;base64,UklGRuQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YcADAAA/hYe3eHNlcJWvuK1aIidWoNvzymQPAzOZ7v7Vfx0CG3XN+eeXSgUIRp3h97diEQMpeNP34ZtUCgY3htj75qdaDAEgYLfw8a1gEAEtd8354JhSCQU5idv86apcAwAabLLw9bRnFAAjaMz366NaDAExfNP55JZCBAA3hND445dQCAIcXKTn8LRqGgAeXLbn9r9yIAACJGnA6+erZxUAAyhltObptG4dAAIaT5zg7cCEMAAADTRxvOLZqnckAAAKL1qKzN7InXg5EAEACRM0XImzwMvT1dLIv7Kik4d6a1tLOyohFgsAEjBSc5Gou8vc6e7t6ODTxbWnmIl7cGRXRTcqHhQMAhIkO1Boa4GVqLnK2ejw9fXw59rNv6+gkYR2alpNQDMnHhMMBg0ZKTtLWmp7jJ6tw9Hf7PX6+/jy59zPwbGik4V3a1pMPzIoHhMNCAoVIjJCUmFxfY6cr8HO3Ons8fLw6uLXzb6wppeJfXBiUkY5LSMaEQkHCxMdKjdFU2FueYaVpLTCz9vk7PDz8ezo3tLFuKqcj4N2a15QQTYtIxoSCggJDhggLTtHUV5qd4GQnq27x9Pd5Oru7uzn39XJvK6hlYl+c2RYSkE3LiUbFAwJCAsRGSItN0FMV2JteH6Jlp+ptL/I0Njf5Ofp6eTc08m+saecko2Cf3ZsYVdORT02LSYgGhYTERAPDxASFRodIiYqLjM3Oz9DSEtPUlZaXWBjZmhrbW5wcXJzdHV1dnZ1dXRzcnBvbWtpZmRhXlxZVlRQTUpHREE+OTw0ODIxLiwrKSgnJiYmJiYnJygoKSorLKasUHt/cXh6b3d9a3t8c3Z8cHh9cnd9c3Z8cnd8cnd8cXd9c3d8cXd9c3h8cnd8cnd9c3d9cXd8c3h8cXd8c3d8cnd7cXV6clRlXk9cVk1aVE1aVU5bVU9aVUuIfAxjSFBESkVFTkZHUENIUfBDSPNOQ/JCTvBFRu9JQO9HQfFIQPBFQfFHQ+9EQvFFQO9DQ/BCQ/BCQ/FCQ/FDQfBEQvFBRO9DQfFBRPFEQvBBQ/BCQ/FARPERAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ==',
        'chimeSound': 'data:audio/wav;base64,UklGRuQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YcADAAA/hYWFcGJdcJWzuKlWGCNUnOr2z2gPAzaY6P3UfR0CG3XL9+OVSgUIRp3f+LZjEQMpeNH54JtUCwY4h9j76ahbDAEgYLfy8a1gEAEtd8v44JhSCQU5idv86KpcAwAabLPw9bRnFQAjaMz366NaDQExe9L55JZCAwA3hNH455dQCAMcXKXn761pGQAfXLXl8rxwHgACJGnA6+erZxYAAyhltObptG4eAAIaT5zg7buCLgAADTVxu+HXqXYjAAAKL1qKzN3GnHc4DwEAChM0XIiywcvT1dLIvrOjk4d6a1tMOyohFgsAEjBTc5Gou8vc6e7u6ODTxbWnmIl7cGVXRTcqHhQMAhIlO1Bobn+Vp7nK2ejw9Pbw59rNv6+gkYN2alpNQDMnHRMNBg0ZKDtLWml6i52sw9He6/T6+/jz59zPwbGik4R3a1pNPzIoHhMNCAoVIjJCUmFwfY6cr8DO3Ons8PHw6uLXzb6wppeJfXFiUkY5LSMaEQkHCxMdKzdFU2FueIaUpLTCz9rj6/Dz8ezo3tLFuaubjYF1a19QQTYtIxoSCggJDhggLDpGUF5qd4CPnqu6x9Pd5Oru7uzn39XJvK6hlYl+c2VZSkE3LiUbFAwJCAsRGSItOEFMV2JseH+Jlp+ptL7I0Njf5Ofp6eTc08m+saidkoyDf3ZtYVdORT02LSYgGhYTERAPDxASFRodIiYqLjM3Oz9DSEtPUlZaXWBjZmhrbW5wcXJzdHV1dnZ1dXRzcnBvbWtpZmRhXlxZVlRQTUpHREE+OTw0ODIxLiwrKSgnJiYmJiYnJygoKSorLCytTFJ7fHB6fW95fHF4fnF4fnF5fXF5fXF4fnF5fXF5fXF4fnF4fnF5fXF5fXF5fXF4fnF5fXF5fXF5fXF5fXF5fXF4fXF4fnFUZF1OWlVOWlVOWlVOWlVOWVVLiHwMY0hQREpFRk1GR0/zSFHvQ0jyTkTyQk7wRUbvSUDvR0HySEDwRUHxR0PvRELxRUDvQ0PwQkPwQkPxQkPxQ0DyREXySEHxRUfzQ0fyRUXzQkbzQkXyQ0XzRURtbm1sbGxsa2xra2traklkS2ZJZElkSWZJZElkSWRKZEpkSmRJZEhjSmFFZEVnRWRFZ0ZlRmhGZUZoZWlzcHJzcXJzcHFzcXFscXJzb3Nwc3B==',
        'dramaticSound': 'data:audio/wav;base64,UklGRuQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YcADAAA/hYKCRj85P2KBlJNkMSotXIulnVstERxKgKCaZD0dIESMp6JoPBoiRZGso2c4Fx9EkKynaTkXHkGNqqdqPBkePoiko2k9HCE+hJ+daDoaIEKQrKRkNRYcQpCrpWY2FhpAjaefaTgXGz6HoZ1oOxsgP4ehnWc5GR5Bi6KbZjgXG0CLoZ9pPBkcO4GZmGtBIiI5epSSbEQlJDh4kpJuRyYlNnWPkm5JJyU0c42UcEspJzNyjpZySyoqM3GOlnNJKSgwbo2XdU8tKC9ui5Z0UC4qL26LlHBLLSwwcI2Vb0gqKzFykZdvSCkqM3STmG1FJyozeJaabUMkJDV7mJpsQSQlOYCZmGg8ICE8hJuZZjkbHTuEm5lmORocOYObl2c6GRo3gZyaakEgHDR6lpdsSyspMHGNkWxJLCw1eI6QaUIjIjiAmZhlNxcaPoaamWc6Ghs9iKGdaTsYGTqEnZtqPxwbN32XmG1FJiQ0d5CUcU0rJzFui5NxTS4qMXCNlXJOMCsxcIuTcU0sKjJyjJJvSSonMnONknBKKSgydI2ScEknJjR1jpJwSiclM3SNkW9JJyY0dY6RcEooJzN0jZJwSikoMnSOk3FLKigxc46UcUonJTR2j5JwSSclNHeQk3BJJyY0d5CTb0gmJjR3kJNvSSYnNHiQkm5IJiY0eJCSb0gmJTR4kZJuRyUlNXmRkm5HJSU1eZGSbkclJDV5kZJuRiQkNXmRk25GJCQ1eJGTbkYkJDV4kZNuRiUkNXiRkm5HJSU1eJGSb0clJTV4kJJvRyUlNHiQkm9HJiU0d5CSb0gmJnXd8/HeBwCBQKBPwA/AEAAf8A/wD/gP8APgD+AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A==',
    };
    
    // Add any missing audio elements to the DOM
    Object.entries(requiredSounds).forEach(([id, dataUrl]) => {
        if (!document.getElementById(id)) {
            const audio = document.createElement('audio');
            audio.id = id;
            audio.preload = 'auto';
            
            const source = document.createElement('source');
            source.src = dataUrl;
            audio.appendChild(source);
            
            document.body.appendChild(audio);
            console.log(`Created missing audio element: ${id}`);
        }
    });
    
    // Now preload all audio
    preloadAudioResources();
}

// Update the start game function to use the enhanced category introduction
function startGame() {
    try {
        // Set game state
        gameState.gameStarted = true;
        gameState.currentPlayerIndex = 0;
        
        // Make sure elements exist
        if (!elements.startScreen || !elements.gameScreen) {
            console.error('Critical game screens missing');
            refreshDOMElements();
            
            if (!elements.startScreen || !elements.gameScreen) {
                alert('There was a problem starting the game. Please try refreshing the page.');
                return;
            }
        }
    
        // Show game screen
        elements.startScreen.classList.add('hidden');
        elements.gameScreen.classList.remove('hidden');
    
        // Make sure the player display is updated
        updateCurrentPlayerDisplay();
    
        // Sound and speech
        AudioManager.playSound('clickSound');
        
        // Welcome speech
        AudioManager.speak("Welcome to Jeopardy! Today we are showcasing the finest entertainment from Paramount Plus, and our contestants will be competing for break time!", {
            rate: 0.8,
            pitch: 0.9,
            priority: 10,
            onEnd: () => {
                // Begin the dramatic category introduction after welcome
                setTimeout(() => {
                    introduceCategoriesWithStyle();
                }, 1000);
            }
        });
    
        // Clear any existing timeouts
        if (window._gameTimeouts) {
            window._gameTimeouts.forEach(id => clearTimeout(id));
        }
        window._gameTimeouts = [];
        
        console.log('Game started successfully');
    } catch (error) {
        console.error('Error in startGame:', error);
        alert('There was a problem starting the game. Please try refreshing the page.');
    }
}

// Initialize all systems when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing game');
    setTimeout(() => {
        try {
            // First set up any missing audio elements
            initializeAudioElements();
            
            // Then initialize the game
            initGame();
        } catch (error) {
            console.error('Error during game initialization:', error);
            alert('There was a problem initializing the game. Please refresh the page.');
        }
    }, 100);
});
