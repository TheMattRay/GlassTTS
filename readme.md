The GlassTTS PhoneGap Plugin
========================
GlassTS is a simple wrapper around the native Text-to-Speech (TTS) functionality in the Android OS.
Please feel free to ask questions and provide feedback.

## Common Build Procedure
- From your PhoneGap application root, make sure you execute a `phonegap build android` at least once as this creates the appropriate platform folder schema that must be in place prior to adding plugins (still as of PhoneGap 3.4)
- Install this plugin by calling `phonegap local plugin add https://github.com/TheMattRay/GlassTTS.git`
- Execute the `phonegap build android` again so that the CLI can merge and repoisition files as needed by the plugin into your output folder (platforms/android)
- Run/debug the app (probably using Eclipse)

Note: PhoneGap (as of 3.4) does not recognize the Glass Developer Kit (GDK) Preview as a valid target and will blow up if you have modified the project targets AS REQUIRED to point to it. Ther eis a workaround that I will post soon.

## JavaScript Usage
Note: You MUST wait until deviceReady to instantiate this or it will likely fail.

	// Initiate the TTS service
	glassTTS.start(win, fail);

	function win() {
		// The service is firing up.
	}

	function fail(err) {
		// Crap
		console.log(err);
	}

    glassTTS.speak("Boom, baby!", speakWin, speakFail);

    function speakWin(){};
    function speakFail(err){};
    
## Available methods
### start
`glassTTS.start(successCallback, failCallback) ` Initiates the service that handles future calls.

### shutdown
`glassTTS.shutdown(successCallback, failCallback) ` Stops the aforementioned service.

### speak
`glassTTS.speak(text, successCallback, failCallback) ` Speaks the text when TTS is availiable.

### interrupt
`glassTTS.interrup(text, successCallback, failCallback) ` Breaks any active speaking and immediately begins speaking the specified text.

### silence
`glassTTS.silence(duration, successCallback, failCallback) ` Forces silence; useful in regulating the cadence of a long passage.

### speed
`glassTTS.speed(speed, successCallback, failCallback) ` Changes cadence of speech. Values should range from 30 to 500.

### pitch
`glassTTS.pitch(pitch, successCallback, failCallback) ` Changes the pitch. Values range from 30 to 300.

### isLanguageAvailable
`glassTTS.isLanguageAvailable(lang, successCallback, failCallback) ` Returns true/false if string of language is supported.

### getLanguage
`glassTTS.getLanguage(successCallback, failCallback) ` Returns the string of the current TTS language.

### setLanguage
`glassTTS.setLanguage(lang, successCallback, failCallback) ` Sets the TTS service language.

