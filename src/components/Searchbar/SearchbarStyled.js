import styled from "styled-components";

const SearchbarWrapper = styled.div`
  .search-input {
    margin-right: 10px;
    height: 40px;
    width: 400px;
    font-size: 25px;
  }

  .submit-btn {
    cursor: pointer;
    height: 40px;
    width: 100px;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
  }

  .submit-btn:hover {
    color: rgb(231, 104, 73);
  }
`;

export default SearchbarWrapper;
