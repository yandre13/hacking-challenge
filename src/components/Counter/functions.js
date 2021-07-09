function updateCounter({count, type, quantity, setCount}) {
  if (count === 12500 && type === 'add') {
    setCount(count + quantity)
  } else if (count === 16500 && type === 'rest') {
    setCount(count - quantity)
  } else if (count > 12500 && count < 16500) {
    setCount(type === 'add' ? count + quantity : count - quantity)
  }
}

export {updateCounter}
