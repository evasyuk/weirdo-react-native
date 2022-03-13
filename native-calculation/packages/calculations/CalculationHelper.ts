import { NativeModules } from 'react-native';
import { OperationType } from "@weirdo/types";

const { ReactOneCustomMethod } = NativeModules;

type ReactOneCustomMethod = (operation: OperationType, operandA: number, operandB: number) => Promise<number>

export const performNativeCalculation: ReactOneCustomMethod =
  async (operation: OperationType, operandA: number, operandB: number): Promise<number> => {
    return ReactOneCustomMethod.performCalculation(operation, operandA, operandB)
      .then((nativeResult: number | "NaN") => {
        console.log('nativeResult', nativeResult)

        return nativeResult
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
