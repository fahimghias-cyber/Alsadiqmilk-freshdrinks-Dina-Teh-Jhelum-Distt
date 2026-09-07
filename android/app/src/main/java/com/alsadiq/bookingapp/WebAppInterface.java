package com.alsadiq.bookingapp;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class WebAppInterface {
    private static final String TAG = "WebAppInterface";
    private final MainActivity activity;
    private final WebView webView;
    private final Handler mainHandler;

    public WebAppInterface(MainActivity activity, WebView webView) {
        this.activity = activity;
        this.webView = webView;
        this.mainHandler = new Handler(Looper.getMainLooper());
    }

    @JavascriptInterface
    public String httpGet(String urlString) {
        HttpURLConnection conn = null;
        try {
            URL url = new URL(urlString);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(8000);
            conn.setReadTimeout(8000);
            conn.setRequestProperty("Accept", "application/json");
            int responseCode = conn.getResponseCode();
            if (responseCode >= 200 && responseCode < 300) {
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = in.readLine()) != null) {
                    response.append(line);
                }
                in.close();
                return response.toString();
            } else {
                return null;
            }
        } catch (Exception e) {
            Log.e(TAG, "httpGet error: " + e.getMessage());
            return null;
        } finally {
            if (conn != null) conn.disconnect();
        }
    }

    @JavascriptInterface
    public String httpPut(String urlString, String jsonBody) {
        HttpURLConnection conn = null;
        try {
            URL url = new URL(urlString);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("PUT");
            conn.setConnectTimeout(8000);
            conn.setReadTimeout(8000);
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            conn.setRequestProperty("Accept", "application/json");
            conn.setDoOutput(true);
            byte[] outputBytes = jsonBody.getBytes(StandardCharsets.UTF_8);
            OutputStream os = conn.getOutputStream();
            os.write(outputBytes);
            os.flush();
            os.close();
            int responseCode = conn.getResponseCode();
            return (responseCode >= 200 && responseCode < 300) ? "OK" : null;
        } catch (Exception e) {
            Log.e(TAG, "httpPut error: " + e.getMessage());
            return null;
        } finally {
            if (conn != null) conn.disconnect();
        }
    }

    @JavascriptInterface
    public String httpDelete(String urlString) {
        HttpURLConnection conn = null;
        try {
            URL url = new URL(urlString);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("DELETE");
            conn.setConnectTimeout(8000);
            conn.setReadTimeout(8000);
            int responseCode = conn.getResponseCode();
            return (responseCode >= 200 && responseCode < 300) ? "OK" : null;
        } catch (Exception e) {
            Log.e(TAG, "httpDelete error: " + e.getMessage());
            return null;
        } finally {
            if (conn != null) conn.disconnect();
        }
    }

    @JavascriptInterface
    public void showToast(String message) {
        mainHandler.post(() -> 
            Toast.makeText(activity, message, Toast.LENGTH_SHORT).show()
        );
    }

    @JavascriptInterface
    public void shareText(String text) {
        mainHandler.post(() -> {
            try {
                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("text/plain");
                shareIntent.putExtra(Intent.EXTRA_TEXT, text);
                activity.startActivity(Intent.createChooser(shareIntent, "Share via"));
            } catch (Exception e) {
                Toast.makeText(activity, "Unable to share", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @JavascriptInterface
    public void openWhatsApp(String phoneNumber, String message) {
        mainHandler.post(() -> {
            try {
                String cleanNumber = phoneNumber.replaceAll("[^0-9]", "");
                if (cleanNumber.startsWith("0")) {
                    cleanNumber = "92" + cleanNumber.substring(1);
                }
                String url = "https://api.whatsapp.com/send?phone=" + cleanNumber + "&text=" + URLEncoder.encode(message, "UTF-8");
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                intent.setPackage("com.whatsapp");
                try {
                    activity.startActivity(intent);
                } catch (ActivityNotFoundException e1) {
                    try {
                        intent.setPackage("com.whatsapp.w4b");
                        activity.startActivity(intent);
                    } catch (ActivityNotFoundException e2) {
                        // Fallback to any app or browser
                        Intent fallbackIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        activity.startActivity(fallbackIntent);
                    }
                }
            } catch (Exception e) {
                Toast.makeText(activity, "Could not open WhatsApp: " + e.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    @JavascriptInterface
    public void callPhone(String phoneNumber) {
        mainHandler.post(() -> {
            try {
                Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + phoneNumber));
                activity.startActivity(intent);
            } catch (Exception e) {
                Toast.makeText(activity, "Unable to make phone call", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @JavascriptInterface
    public void printPage() {
        mainHandler.post(() -> {
            try {
                PrintManager printManager = (PrintManager) activity.getSystemService(Context.PRINT_SERVICE);
                String jobName = activity.getString(R.string.app_name) + " Receipt";
                PrintDocumentAdapter printAdapter = webView.createPrintDocumentAdapter(jobName);
                printManager.print(jobName, printAdapter, new PrintAttributes.Builder().build());
            } catch (Exception e) {
                Toast.makeText(activity, "Printing failed: " + e.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    @JavascriptInterface
    public void vibrate(long milliseconds) {
        mainHandler.post(() -> {
            try {
                android.os.Vibrator v = (android.os.Vibrator) activity.getSystemService(Context.VIBRATOR_SERVICE);
                if (v != null) {
                    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                        v.vibrate(android.os.VibrationEffect.createOneShot(milliseconds, android.os.VibrationEffect.DEFAULT_AMPLITUDE));
                    } else {
                        v.vibrate(milliseconds);
                    }
                }
            } catch (Exception e) {
                Log.e(TAG, "Vibrate error: " + e.getMessage());
            }
        });
    }

    @JavascriptInterface
    public String getAppVersion() {
        return "1.0.0";
    }
}
