//
// Calculate the sum of the data.
//
Blockly.JavaScript['stats_sum'] = (block) => {
  const argColumns = Blockly.JavaScript.valueToCode(block, 'Columns', Blockly.JavaScript.ORDER_NONE)
        .replace('row.', '')
  const code = `{ func: 'sum', column: '${argColumns}' }`
  return [code, Blockly.JavaScript.ORDER_NONE]
}