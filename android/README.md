# Al Sadiq Milk & Fresh Drinks - Android Studio Project

This directory contains the complete, production-ready Android Studio project for **Al Sadiq Milk & Fresh Drinks (الصادق ملک اینڈ فریش ڈرنکس)** booking and POS counter application.

---

## 📁 Project Structure

```
android/
├── app/
│   ├── build.gradle                     # App-level build configurations & dependencies
│   ├── proguard-rules.pro               # ProGuard / R8 code shrinking rules
│   └── src/
│       └── main/
│           ├── AndroidManifest.xml      # App permissions, theme, launcher activity
│           ├── assets/                  # Complete web application files & images
│           │   ├── index.html
│           │   ├── styles.css
│           │   ├── app.js
│           │   └── assets/              # Product and branding images
│           ├── java/com/alsadiq/bookingapp/
│           │   ├── MainActivity.java    # Full WebView Activity (Hardware acceleration, pull-to-refresh, navigation)
│           │   └── WebAppInterface.java # Native bridge (WhatsApp, Phone calls, Printing, Sharing)
│           └── res/                     # Vector icons, colors, themes, layouts, XML configs
├── gradle/
│   └── wrapper/
│       └── gradle-wrapper.properties   # Gradle 8.7 distribution config
├── build.gradle                         # Project-level build script
├── settings.gradle                      # Module settings
├── gradle.properties                    # AndroidX & JVM optimization flags
├── local.properties                     # Android SDK path configuration
└── gradlew.bat / gradlew                # Gradle build wrappers
```

---

## 🚀 How to Open and Compile in Android Studio

### Step 1: Open in Android Studio
1. Launch **Android Studio**.
2. Click **Open** (or `File > Open...`).
3. Select the `android` folder located at:
   `c:\Users\Ole-Reider\Desktop\alsadiq booking app\android`
4. Android Studio will automatically sync the Gradle project.

### Step 2: Build the APK
- **Debug APK (For Instant Testing)**:
  - In Android Studio menu, go to:
    **`Build` ➔ `Build Bundle(s) / APK(s)` ➔ `Build APK(s)`**
  - Once compilation finishes, a popup notification will appear at bottom-right with a **"locate"** link pointing to:
    `android/app/build/outputs/apk/debug/app-debug.apk`

- **Signed Release APK (For Production / Store Distribution)**:
  - In Android Studio menu, go to:
    **`Build` ➔ `Generate Signed Bundle / APK...`**
  - Choose **APK**, create or choose your keystore, and click **Next ➔ Release ➔ Create**.
  - The signed production APK will be saved in `android/app/release/`.

---

## ⚡ Features Included in this Build

- **100% Offline-Capable & Fast Loading**: All HTML, CSS, JS, and high-resolution menu images are bundled inside `src/main/assets/`.
- **Automatic Asset Sync**: The Gradle build script automatically syncs any changes made in the root web folder during build.
- **WhatsApp Integration**: Instant dispatch to Al Sadiq shop WhatsApp numbers (`0370-9589018` & `0342-1008375`).
- **Direct Phone Dialing**: One-tap calling to customer service and order desk.
- **Thermal Slip & Receipt Printing**: Integrated native Android `PrintManager` printing support for orders and daily Z-reports.
- **Pull-to-Refresh**: Smooth swipe-down refresh at the top of the page.
- **Smart Back Navigation**: Back key navigates internal history or prompts double-tap to exit.
- **Modern Hardware Acceleration**: 60fps animations and fluid touch interactions on all Android versions (Android 5.0 Lollipop through Android 14+ / 15).
