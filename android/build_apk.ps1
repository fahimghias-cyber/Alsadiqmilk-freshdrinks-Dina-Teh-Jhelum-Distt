# PowerShell Helper to build APK using Android Studio's bundled JDK and Gradle
$ErrorActionPreference = "Stop"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  Al Sadiq Milk & Drinks - APK Builder Script    " -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

$asJbr = "C:\Program Files\Android\Android Studio\jbr"
if (Test-Path "$asJbr\bin\java.exe") {
    $env:JAVA_HOME = $asJbr
    $env:PATH = "$asJbr\bin;" + $env:PATH
    Write-Host "Using Android Studio JDK from: $asJbr" -ForegroundColor Green
} else {
    Write-Host "Using system Java in PATH" -ForegroundColor Yellow
}

$gradleWrapper = ".\gradlew.bat"
if (Test-Path $gradleWrapper) {
    Write-Host "Building Debug APK..." -ForegroundColor Cyan
    & $gradleWrapper assembleDebug
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host ">>> BUILD SUCCESSFUL! <<<" -ForegroundColor Green
        Write-Host "APK Location: app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Green
    } else {
        Write-Host "Build failed with exit code $LASTEXITCODE" -ForegroundColor Red
    }
} else {
    Write-Host "gradlew.bat not found in current directory." -ForegroundColor Red
}
