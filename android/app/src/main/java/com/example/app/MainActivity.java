package com.example.app; 

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.fisumobi.wifistatus.WifiStatusPlugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        
        super.onCreate(savedInstanceState);

        // 2. Rekisteröidään plugin vasta alustuksen jälkeen
        registerPlugin(WifiStatusPlugin.class);
    }
}
