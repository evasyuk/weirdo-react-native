//
//  nativeCalculation.swift
//  nativeCalculation
//
//  Created by JennyZhmenny on 13.03.2022.
//
//  Inspired by https://around25.com/blog/how-to-write-native-modules-for-react-native/
//

import Foundation

@objc (NativeModuleManager)
class NativeModuleManager : NSObject {


  @objc
  static func requiresMainQueueSetup() -> Bool {
      return true
  }

  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
      return ["message": "Hello from native code"]
  }
  @objc
  func performCalculation(_ operation: String, _ operandA: Double, _ operandB: Double, _ callback: RCTResponseSenderBlock) -> Void {
    if (operation.elementsEqual("+")) {
      print("+", operandA + operandB)
      callback([NSNull(), operandA + operandB])
    } else if (operation.elementsEqual("-")) {
      print("-", operandA - operandB)
      callback([NSNull(), operandA - operandB])
    } else if (operation.elementsEqual("*")) {
      print("*", operandA * operandB)
      callback([NSNull(), operandA * operandB])
    } else if (operation.elementsEqual("/")) {
      print("/", operandA / operandB)
      if (operandB.isEqual(to: 0)) {
        callback([NSNull(), "NaN"])
      } else {
        callback([NSNull(), operandA / operandB])
      }
    }
  }

}
