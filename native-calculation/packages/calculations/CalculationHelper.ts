import { NativeModules } from 'react-native';
import { OperationType } from "@weirdo/types";

const { NativeModuleManager } = NativeModules;

type CalculationFuncType = (operation: OperationType, operandA: number, operandB: number) => Promise<number>

export const performNativeCalculation: CalculationFuncType =
  async (operation: OperationType, operandA: number, operandB: number): Promise<any> => {
    return new Promise((acc) => {
      NativeModuleManager.performCalculation(operation, operandA, operandB, (err: any, nativeResult: number | "NaN") => {
        console.log('nativeResult', err, nativeResult)

        acc(nativeResult)
      })
    })
  }
