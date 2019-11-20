const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });

const initialState = {
  number: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        number: state.number + 1
      };
    case MINUS:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
}
