@echo off
title Al Sadiq - Build Staff Android APK
echo ====================================================================
echo   Al Sadiq Milk ^& Fresh Drinks - Building Staff Android POS App
echo ====================================================================
echo.

set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
set "PATH=%JAVA_HOME%\bin;%PATH%"

cd /d "%~dp0android"

echo [*] Compiling Android APK with latest web assets and cloud sync...
call gradlew.bat assembleDebug

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [*] Copying APK to main folder...
    copy /y "app\build\outputs\apk\debug\app-debug.apk" "..\AlSadiq_Staff_POS_App.apk" >nul
    echo.
    echo ====================================================================
    echo [SUCCESS] Staff APK Ready at:
    echo %~dp0AlSadiq_Staff_POS_App.apk
    echo.
    echo You can now send this APK file via WhatsApp, Google Drive, or USB
    echo to your shop staff's Android phones!
    echo ====================================================================
) else (
    echo.
    echo [ERROR] Build failed. Please ensure Android Studio SDK is installed.
)

pause
