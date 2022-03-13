//
//  NativeModuleManager.m
//  nativeCalculation
//
//  Created by JennyZhmenny on 13.03.2022.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NativeModuleManager, NSObject)

RCT_EXTERN_METHOD(performCalculation:(NSString)operation :(double)operandA :(double)operandB :(RCTResponseSenderBlock)callback)

// sick!
//RCT_EXTERN_METHOD(performCalculation:(NSString)operation (NSNumber)operandA (NSNumber)operandB (RCTPromiseResolveBlock)resolve (RCTPromiseRejectBlock)reject)

@end
