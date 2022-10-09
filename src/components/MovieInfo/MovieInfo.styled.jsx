import styled from '@emotion/styled';
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CardImgWrapper = styled.div`
  flex-basis: 200px;
`;
export const CardDetails = styled.div`
  flex-basis: calc(100% - 220px);
  padding: 10px;
`;
export const CardTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const CardScore = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const CardOverview = styled.div`
  h2 {
    margin-top: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
  p:last-of-type {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const CardGenres = styled.div``;
export const CardGenresLabel = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
`;
export const CardGenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  li {
    padding-right: 10px;
  }
`;
