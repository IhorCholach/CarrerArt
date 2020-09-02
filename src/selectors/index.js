import { createSelector } from "reselect";

const data = (state) => state.data.data;

const dataFormatter = (items) => {
  return items.reduce((acc, cur) => {
    let newItem = {
      value: cur.slug,
      label: cur.label,
    };
    return [...acc, newItem];
  }, []);
};

export const dataModified = createSelector(data, (items) => {
  return {
    terms: dataFormatter(items.terms) || [],
    brandsTerms: dataFormatter(items.brandsTerms) || [],
    styles: dataFormatter(items.styles) || [],
  };
});
