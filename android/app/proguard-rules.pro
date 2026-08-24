# ProGuard rules for Al Sadiq Booking App

# Keep JavaScript Interface methods
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep WebAppInterface
-keep class com.alsadiq.bookingapp.WebAppInterface {
    public *;
}

# Keep WebKit and Material components
-keep class androidx.webkit.** { *; }
-keep class com.google.android.material.** { *; }
-dontwarn com.google.android.material.**
