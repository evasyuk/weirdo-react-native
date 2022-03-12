import { useEffect, useState } from "react";

import { List, TextInput } from 'react-native-paper';
import { GeneralText } from "@weirdo/ui-module/GeneralText";
import { GeneralLayout } from "@weirdo/ui-module/GeneralLayout";
import { Spacer } from "@weirdo/ui-module/Spacer";
import { Row } from "@weirdo/ui-module/Row";

type OperationType = '+' | '-' | '*' | '/'

const performCalculation = (operation: OperationType, operandA: number, operandB: number): number => {
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

const getIcon = (operation: OperationType) => {
  if (operation === '*') {
    return 'close-thick'
  }
  if (operation === '-') {
    return 'minus-box-multiple'
  }
  if (operation === '/') {
    return 'slash-forward-box'
  }
  if (operation === '+') {
    return 'plus-thick'
  }
  throw Error('unexpected operation: ' + operation)
}

const getTitle = (operation: OperationType) => {
  if (operation === '*') {
    return 'Multiply'
  }
  if (operation === '-') {
    return 'Minus'
  }
  if (operation === '/') {
    return 'Divide'
  }
  if (operation === '+') {
    return 'Add'
  }
  throw Error('unexpected operation: ' + operation)
}

const onLeft = (operation) => (props) => <List.Icon {...props} icon={getIcon(operation)} />

export const CalculationView = () => {
  const [operandA, setOperandA] = useState("0");
  const [operandB, setOperandB] = useState("0");
  const [operation, setOperation] = useState<OperationType>('+')

  const [calculationResult, setCalculationResult] = useState<number>()

  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    setCalculationResult(
      performCalculation(
        operation,
        Number.parseInt(operandA, 10),
        Number.parseInt(operandB, 10)),
    )
  }, [operation, operandA, operandB])

  const onClick = (operation) => () => {
    setOperation(operation)
    handlePress()
  }

  return (
    <GeneralLayout noScrollView>
      <Spacer size={20}>
        <GeneralText>Native calculation</GeneralText>
        <Spacer size={10} />
        <TextInput
          label="Operand A"
          value={operandA}
          keyboardType='numeric'
          onChangeText={(text) => setOperandA(text)}
        />
        <Spacer size={10} />
        <List.Accordion
          title={getTitle(operation)}
          expanded={expanded}
          onPress={handlePress}
          left={onLeft(operation)}>
          <List.Item title="Add" onPress={onClick('+')} left={onLeft('+')} />
          <List.Item title="Minus" onPress={onClick('-')} left={onLeft('-')} />
          <List.Item title="Multiply" onPress={onClick('*')} left={onLeft('*')} />
          <List.Item title="Divide" onPress={onClick('/')} left={onLeft('/')} />
        </List.Accordion>
        <Spacer size={10} />
        <TextInput
          label="Operand B"
          value={operandB}
          onChangeText={(text) => setOperandB(text)}
        />
        <Spacer size={20} />
        <Row>
          <GeneralText>CalculationResult:</GeneralText>
          <Spacer size={10} />
          <GeneralText>{`${calculationResult}`}</GeneralText>
        </Row>
      </Spacer>
    </GeneralLayout>
  )
}
