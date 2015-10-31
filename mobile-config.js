App.info({
	id: 'com.mehdisolati.ballmerpeak',
	name: 'Ballmer Peak',
	description: 'You Work Hard; You Should Drink To Work Better!',
	version: '0.0.1',
	author: 'Mehdi Solati',
  	email: 'mkslt04@gmail.com',
  	website: 'http://ballmerpeak.meteor.com'
});

App.icons({
  'android_ldpi': 'public/images/ballmer.png',
  'android_mdpi': 'public/images/ballmer.png',
  'android_hdpi': 'public/images/ballmer.png',
  'android_xhdpi': 'public/images/ballmer.png'
});

App.launchScreens({
// Android
  'android_ldpi_portrait': 'public/images/cordova/splash/splash-200x320.png',
  'android_mdpi_portrait': 'public/images/cordova/splash/splash-320x480.png',
  'android_hdpi_portrait': 'public/images/cordova/splash/splash-480x800.png',
  'android_xhdpi_portrait': 'public/images/cordova/splash/splash-720x1280.png',
});

// Set PhoneGap/Cordova preferences
App.setPreference('HideKeyboardFormAccessoryBar', true);

// Pass preferences for a particular PhoneGap/Cordova plugin


App.accessRule('*');