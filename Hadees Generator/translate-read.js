// Function to initialize Google Translate
function loadGoogleTranslate() {
    // No need to do anything here as Translate API is automatically loaded
}

// Variable to store the original text
var originalText = '';
// Variable to track translation status
var translated = false;

// Function to handle translation
function translateText() {
    // Get the target language code (e.g., 'ur' for Urdu)
    var targetLanguage = 'ur';

    // Get the text content to translate
    var textToTranslate = '';

    // If already translated, revert to original text
    if (translated) {
        document.getElementById('hadees').textContent = originalText;
        document.getElementById('translateBtn').textContent = 'Translate';
        // Remove the disclaimer message if it exists
        var disclaimer = document.getElementById('disclaimer');
        if (disclaimer) {
            disclaimer.remove();
        }
        translated = false;
    } else {
        // Capture the original text before translation
        originalText = document.getElementById('hadees').textContent;

        // Set the text to be translated
        textToTranslate = originalText;

        // Translate the content using Google Translate API
        var apiUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + targetLanguage + '&dt=t&q=' + encodeURI(textToTranslate);

        // Make a GET request to the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update the content inside #hadees with the translated text
                var translatedText = data[0][0][0];
                document.getElementById('hadees').textContent = translatedText;
                // Add a disclaimer message after translation
                var disclaimer = document.createElement('p');
                disclaimer.classList.add('pTag');
                disclaimer.id = 'disclaimer';
                disclaimer.textContent = 'Some translation may not be accurate.';
                document.querySelector('.container').appendChild(disclaimer);
            })
            .catch(error => console.error('Error:', error));

        document.getElementById('translateBtn').textContent = 'Original';
        translated = true;
    }
}

// Function to speak the translated text
function speakText() {
    var textToSpeak = document.getElementById('hadees').textContent;

    // Create a new speech synthesis object
    var speechSynthesis = window.speechSynthesis;

    // Create a new SpeechSynthesisUtterance object
    var utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Set the language
    utterance.lang = 'ur';

    // Speak the text
    speechSynthesis.speak(utterance);
}

// Load Google Translate when page is fully loaded
window.onload = function () {
    loadGoogleTranslate();

    // Add event listener to the translate button
    document.getElementById('translateBtn').addEventListener('click', function () {
        translateText();
    });

    // Add event listener to the .speakHadees element
    document.querySelector('.speakHadees').addEventListener('click', function () {
        speakText();
        // Hide the speak icon and show the mute icon
        document.querySelector('.speakHadees').style.display = 'none';
        document.querySelector('.muteHadees').style.display = 'inline-block';
    });

    // Add event listener to the .muteHadees element
    document.querySelector('.muteHadees').addEventListener('click', function () {
        // Pause the speech synthesis
        window.speechSynthesis.cancel();
        // Hide the mute icon and show the speak icon
        document.querySelector('.muteHadees').style.display = 'none';
        document.querySelector('.speakHadees').style.display = 'inline-block';
    });
};