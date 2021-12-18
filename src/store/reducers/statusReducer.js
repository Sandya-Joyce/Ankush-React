import { uuid } from "../../components/Helpers/js/js-helpers";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, { uuid: uuid(), status: action.payload }];
    default:
      return state;
  }
};

export default reducer;
