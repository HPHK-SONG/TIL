const CHANGE_THEME = "theme/CHANGE_THEME";

export const changeTheme = color => ({ type: CHANGE_THEME, theme: color });

const initialState = {
  theme: "transparent"
};

export default function theme(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
}
