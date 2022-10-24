import * as React from 'react';
import './index.css'
interface ISeachInputProps {
}

const SearchInput: React.FunctionComponent<ISeachInputProps> = (props) => {
  return (
    <>
      <input placeholder='Search' className="search-input"/>
    </>
  );
};

export default SearchInput;
