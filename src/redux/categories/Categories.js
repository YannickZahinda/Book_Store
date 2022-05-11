const CHECK_STATUS = 'BookStore/Categories/CHECK_STATUS';
export const checkAction = () => ({ type: CHECK_STATUS });

const CategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { type: 'UNDER_CONSTRUCTION' };
    default:
      return state;
  }
};

export default CategoriesReducer;
