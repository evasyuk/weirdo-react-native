package com.calculationmodule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class NativeModuleManager extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    NativeModuleManager(ReactApplicationContext context) {
       super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "NativeModuleManager";
    }

    @ReactMethod
    public void performCalculation(String operation, double operandA, double operandB, Callback callback) {
        if ("+".equals(operation)) {
            callback.invoke(null, operandA + operandB);
        } else if ("-".equals(operation)) {
            callback.invoke(null, operandA - operandB);
        } else if ("*".equals(operation)) {
            callback.invoke(null, operandA * operandB);
        } else if ("/".equals(operation)) {
            if (operandB == 0) {
                callback.invoke(null, "NaN");
            } else {
                callback.invoke(null, operandA / operandB);
            }
        }
    }
}
