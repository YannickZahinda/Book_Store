const CATEGORIES_STATUS = 'bookstore/categories/CATEGORY_STATUS';

export const caretgoriesStatusAction = () => ({
  type: CATEGORIES_STATUS,
});

const categoriesReducer = (state = '', action) => {
  const msg = 'Under construction';
  switch (action.type) {
    case CATEGORIES_STATUS:
      return msg;
    default:
      return state;
  }
};

export default categoriesReducer;
