package com.example.user.androidandjs;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.Button;

import com.google.gson.Gson;

public class MainActivity extends AppCompatActivity {

    private WebView webView;

    // private String url="http://10.40.20.64:8888/html/html/borrowRecordone.html";
    // private String url="http://10.40.20.110:8080/fenqi-majia-web/1.4.4/html/borrowRecordone.html";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.web);
        webView.setWebChromeClient(new WebChromeClient());
        webView.getSettings().setJavaScriptEnabled(true);
        webView.addJavascriptInterface(new MyBridge(this), "bridge");
         webView.loadUrl("file:///android_asset/javascript.html");
      //  webView.loadUrl("file:///android_asset/borrowRecordone.html");
        //  webView.loadUrl(url);


        Button btn = findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // webView.loadUrl("javascript:callJS()");
                Person person = new Person();
                person.setName("zitan");
                person.setAge(27);
                person.setBoy(true);
                String s = new Gson().toJson(person);
//                webView.loadUrl("javascript:jsGetMessageFromNative(" + 123 + ")");
                webView.loadUrl("javascript:callJS()");

            }
        });


    }
}
