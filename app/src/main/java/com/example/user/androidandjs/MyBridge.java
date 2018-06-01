package com.example.user.androidandjs;

import android.content.Context;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

/**
 * Created by zitan on 2018/5/2.
 */

public class MyBridge {
    private Context context;
    public MyBridge(Context context) {
        this.context=context;
    }

    @JavascriptInterface
    public void showMsg(String msg){
        Toast.makeText(context,msg,Toast.LENGTH_SHORT).show();
    }

    @JavascriptInterface
    public void toastMessage(String message) {
        Log.i("toastMessage" , "传递过来的值是： "+message);
    }
    @JavascriptInterface
    public String getMessage(String s){
        return s+"world !";
    }
}
