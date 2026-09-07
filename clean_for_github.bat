@echo off
echo ========================================================
echo   Al Sadiq Project - Clean for GitHub Upload
echo ========================================================
echo Removing temporary build caches and large binary files...

rmdir /s /q "android\.gradle" 2>nul
rmdir /s /q "android\.idea" 2>nul
rmdir /s /q "android\app\build" 2>nul
rmdir /s /q "android\build" 2>nul
rmdir /s /q ".idea" 2>nul
del /f /q "android\local.properties" 2>nul
del /f /q "android\hs_err_pid*.log" 2>nul
del /f /q "*.log" 2>nul

echo.
echo ========================================================
echo [SUCCESS] Project is completely clean!
echo All files are now lightweight and ready for GitHub upload.
echo ========================================================
pause
