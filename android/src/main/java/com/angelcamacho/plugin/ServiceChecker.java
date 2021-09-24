package com.angelcamacho.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import android.content.Context;
import android.util.Log;

import com.google.android.gms.common.GoogleApiAvailability;
import com.huawei.hms.api.ConnectionResult;
import com.huawei.hms.api.HuaweiApiAvailability;

@NativePlugin
public class ServiceChecker extends Plugin {

    @PluginMethod
    public void isHMSAvailable(PluginCall call) {
        boolean result = false;
        JSObject ret = new JSObject();
        Context context = getContext();
        try {
            if (HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(context) == ConnectionResult.SUCCESS) {
                result = true;
                Log.d("CHECKER LOG", result+"");
            } else {
                result = false;
                Log.d("CHECKER LOG", result+"");
            }
            ret.put("value", result);
            call.success(ret);
        } catch (Exception error) {
            Log.d("CHECKER LOG", error.toString());
            ret.put("value", false);
            call.success(ret);
        }
    }

    @PluginMethod
    public void isGMSAvailable(PluginCall call) {
        boolean result = false;
        JSObject ret = new JSObject();
        Context context = getContext();
        try{
            if (GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(context) == com.google.android.gms.common.ConnectionResult.SUCCESS) {
               result=true;
            } else {
                result=false;
            }
            Log.d("CHECKER LOG", result+"");
            ret.put("value", result);
            call.success(ret);
        } catch (Exception error){
            Log.d("CHECKER LOG", error.toString());
            ret.put("value", false+"");
            call.success(ret);
        }
    }
}
