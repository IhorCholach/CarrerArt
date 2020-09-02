import React from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import "react-dropdown/style.css";

const DropdownComponent = ({ options, type }) => {
  const history = useHistory();

  const setLocation = (location, e) => {
    if (!location.state) {
      location.state = {
        [type]: e,
      };
    } else {
      location.state = {
        ...location.state,
        [type]: e,
      };
    }

    if (location.pathname.length < 2) {
      location.pathname = `/${type}${e.value}`;
    } else if (location.pathname.includes(`/${type}`)) {
      let startIndex = location.pathname.indexOf(`/${type}`);
      let stopIndex = location.pathname.indexOf("/", startIndex + 1);
      let oldSubPath = location.pathname.slice(startIndex, stopIndex);

      location.pathname = location.pathname.replace(
        oldSubPath,
        `/${type}${e.value}`
      );
    } else {
      location.pathname = `${location.pathname}/${type}${e.value}`;
    }

    return location;
  };

  const onSelect = (e) => {
    history.push(setLocation(history.location, e));
  };

  const value = history.location.state
    ? history.location.state[type]
    : undefined;

  return (
    <Dropdown
      options={options}
      onChange={onSelect}
      value={value}
      placeholder="Select an option"
    ></Dropdown>
  );
};

export default DropdownComponent;
