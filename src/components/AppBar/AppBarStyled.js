import styled from "styled-components";

const AppBarWrapper = styled.div`
  .nav_list--main {
    list-style: none;
    display: flex;
    border-bottom: 1px solid rgb(117, 124, 221);
    padding-bottom: 20px;
  }

  .nav_list_item--main {
    margin-right: 20px;
    font-size: 25px;
    text-decoration: none;
  }

  .nav_link {
    text-decoration: none;
    color: black;
  }

  .nav_link--active {
    color: rgb(231, 104, 73);
  }
`;

export default AppBarWrapper;
