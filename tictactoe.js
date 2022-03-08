import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CELL_SIZE = 30

const DEFAULT_STATE = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
]

const CellComponent = ({ cellStatus }) => {
  if (cellStatus === '-') {
    return <View style={styles.cellStyles} />
  }

  if (cellStatus === 'X') {
    return (
      <View style={styles.cellStyles}>
        <Text>X</Text>
      </View>
    )
  }

  if (cellStatus === 'O') {
    return (
      <View style={styles.cellStyles}>
        <Text>O</Text>
      </View>
    )
  }

  throw Error('unexpected value: ' + cellStatus)
}

const getNextCellStatus = (counter) => {
  return counter % 2 === 0 ? 'X' : 'O'
}

const HelloWorldApp = () => {
  let [step, setStep] = useState(0)
  let [columns, setColumns] = useState(DEFAULT_STATE) // boolean | null

  const onItemClick = (index, jindex) => () => {
    if (columns[index][jindex] !== '-') {
      return
    }

    const newState = columns.slice()
    newState[index][jindex] = getNextCellStatus(step + 1)
    setColumns(newState)
    setStep(step + 1)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Hello, tic tac toe!</Text>
      <View style={styles.gridStyle}>
        <GridComponent columns={columns} onItemClick={onItemClick} />
      </View>
    </View>
  );
};

const RowComponent = ({ row, onItemClick, rowId }) => {
  const rowViews = []
  for (let jindex = 0; jindex < row.length; jindex += 1) {
      rowViews.push(
        <TouchableOpacity onPress={onItemClick(rowId, jindex)} key={jindex}>
          <CellComponent cellStatus={row[jindex]} />
        </TouchableOpacity>
      )
  }

  return (
    <View style={styles.rowStyle}>
      {rowViews}
    </View>
  )
}

const GridComponent = ({ columns, onItemClick }) => {
  const result = []

  for (let index = 0; index < columns.length; index += 1) {
    result.push(<RowComponent row={columns[index]} onItemClick={onItemClick} rowId={index} key={index} />)
  }

  return result
}

const styles = StyleSheet.create({
  gridStyle: {
    width: '100%',
    height: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    borderColor: '#000000',
  },
  cellStyles: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HelloWorldApp;
