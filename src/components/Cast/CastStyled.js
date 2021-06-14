import styled from "styled-components";

const CastWrapper = styled.div`
  .cast-list {
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .castImg {
    max-height: 450px;
  }

  .cast-list-item {
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(100% / 4 - 40px);
  }
`;

export default CastWrapper;
