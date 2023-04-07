const InitialState = {
  meteo: {
    content: null,
  },
  meteoSettimana: {
    content: null,
  },
};
const mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "CURRENT_METEO":
      return {
        ...state,
        meteo: {
          ...state.meteo,
          content: action.payload,
        },
      };
    case "WEEK_WEATHER":
      return {
        ...state,
        meteoSettimana: {
          ...state.meteoSettimana,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
