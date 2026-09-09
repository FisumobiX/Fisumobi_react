package com.fisumobi.wifistatus;

import android.content.Context;
import android.location.LocationManager;
import android.net.wifi.WifiManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod; // <--- TÄMÄ (ilman .annotation)
import com.getcapacitor.annotation.CapacitorPlugin; // Tämä pysyy ennallaan


@CapacitorPlugin(name = "WifiStatus")
public class WifiStatusPlugin extends Plugin {

    @PluginMethod
    public void isWifiEnabled(PluginCall call) {
        WifiManager wifi = (WifiManager) getContext().getApplicationContext().getSystemService(Context.WIFI_SERVICE);
        boolean enabled = wifi.isWifiEnabled();
        
        // Käytetään virhetasoa (e), jotta se erottuu Logcatissa punaisena
        android.util.Log.e("FISUMOBI", "JAVA VASTAA: " + enabled);

        JSObject ret = new JSObject();
        ret.put("enabled", enabled);
        call.resolve(ret);
    }


    @PluginMethod
    public void isGpsEnabled(PluginCall call) {
        LocationManager lm = (LocationManager) getContext().getSystemService(Context.LOCATION_SERVICE);
        boolean enabled = lm.isProviderEnabled(LocationManager.GPS_PROVIDER);

        JSObject ret = new JSObject();
        ret.put("enabled", enabled);
        call.resolve(ret);
    }
}
