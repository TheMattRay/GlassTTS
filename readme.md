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
`glassTTS.start(successCallback, failCallback)` Initiates the service that handles future calls.

### stop
`glassTTS.stop(successCallback, failCallback)` Stops the aforementioned service.

...