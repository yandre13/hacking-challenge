export const initialState = {
  placa: '',
  user: {},
  amount: 35,
  sum: 14300,
  car: {},
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'updateState':
      return {
        ...action.payload,
      }
    case 'setPlaca':
      return {
        ...state,
        placa: action.payload,
      }
    case 'setUser':
      return {
        ...state,
        user: action.payload,
      }
    case 'setCar':
      return {
        ...state,
        car: action.payload,
      }
    case 'updateAmount':
      return {
        ...state,
        amount: action.payload,
      }

    case 'updateSum':
      return {
        ...state,
        sum: action.payload,
      }

    default:
      return state
  }
}
