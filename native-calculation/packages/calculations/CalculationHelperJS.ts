import { OperationType } from "@weirdo/types";

export const performCalculation = (operation: OperationType, operandA: number, operandB: number): number => {
  if (operation === '+') {
    return operandA + operandB
  } else if (operation === '-') {
    return operandA - operandB
  } else if (operation === '*') {
    return operandA * operandB
  } else if (operation === '/') {
    return operandA / operandB
  } else {
    throw Error('unexpected operation: ' + operation)
  }
}
