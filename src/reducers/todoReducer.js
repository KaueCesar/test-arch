export function todoReducer(state, { type, id, title, description }) {
  switch (type) {
    case "add":
      return [...state, { id, title, description }];
    default:
      throw new Error();
  }
}
