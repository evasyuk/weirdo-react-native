package com.calculationmodule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class ReactOneCustomMethod extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    ReactOneCustomMethod(ReactApplicationContext context) {
       super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ReactOneCustomMethod";
    }

    @ReactMethod
    public void performCalculation(String operation, double operandA, double operandB, Promise response) {
        try {
           if ("+".equals(operation)) {
               response.resolve(operandA + operandB);
             } else if ("-".equals(operation)) {
               response.resolve(operandA - operandB);
             } else if ("*".equals(operation)) {
               response.resolve(operandA * operandB);
             } else if ("/".equals(operation)) {
               if (operandB == 0) {
                 response.resolve("NaN");
               }
               response.resolve(operandA / operandB);
             } else {
               response.reject("400", "unexpected operation:" + operation);
             }
        } catch (Exception e) {
            response.reject("Error", e);
        }
    }
}
