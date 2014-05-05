var exec = require('cordova/exec');

function GlassTTS() {
    /**
     * Play the passed in text as synthesized speech
     * 
     * @param {DOMString} text
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.speak = function(text, successCallback, errorCallback) {
	   exec(successCallback, errorCallback, "GlassTTS", "speak", [text]);
    }


    /**
     * Interrupt any existing speech, then speak the passed in text as synthesized speech
     * 
     * @param {DOMString} text
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.interrupt = function(text, successCallback, errorCallback) {
         exec(successCallback, errorCallback, "GlassTTS", "interrupt", [text]);
    }


    /**
     * Stop any queued synthesized speech
     * 
     * @param {DOMString} text
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.stop = function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GlassTTS", "stop", []);
    }


    /** 
     * Play silence for the number of ms passed in as duration
     * 
     * @param {long} duration
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.silence = function(duration, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GlassTTS", "silence", [duration]);
    }


    /** 
     * Set speed of speech.  Usable from 30 to 500.  Higher values make little difference.
     * 
     * @param {long} speed
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.speed = function(speed, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GlassTTS", "speed", [speed]);
    }


    /** 
     * Set pitch of speech.  Useful values are approximately 30 - 300
     * 
     * @param {long} pitch
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.pitch = function(pitch, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GlassTTS", "pitch", [pitch]);
    }


    /**
     * Starts up the TTS Service
     * 
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.startup = function(successCallback, errorCallback) {
	   console.log("TTS-Startup");
        exec(successCallback, errorCallback, "GlassTTS", "startup", []);
    }


    /**
     * Shuts down the TTS Service if you no longer need it.
     * 
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.shutdown = function(successCallback, errorCallback) {
         exec(successCallback, errorCallback, "GlassTTS", "shutdown", []);
    }


    /**
     * Finds out if the language is currently supported by the TTS service.
     * 
     * @param {DOMSting} lang
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.isLanguageAvailable = function(lang, successCallback, errorCallback) {
         exec(successCallback, errorCallback, "GlassTTS", "isLanguageAvailable", [lang]);
    }


    /**
     * Finds out the current language of the TTS service.
     * 
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.getLanguage = function(successCallback, errorCallback) {
         exec(successCallback, errorCallback, "GlassTTS", "getLanguage", []);
    }


    /**
     * Sets the language of the TTS service.
     * 
     * @param {DOMString} lang
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    this.setLanguage = function(lang, successCallback, errorCallback) {
         exec(successCallback, errorCallback, "GlassTTS", "setLanguage", [lang]);
    }
};

module.exports = new GlassTTS();