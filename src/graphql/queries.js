/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getESM = /* GraphQL */ `
  query GetESM($PK: String!, $SK: String!) {
    getESM(PK: $PK, SK: $SK) {
      Data
      PK
      SK
    }
  }
`;
export const listESMS = /* GraphQL */ `
  query ListESMS(
    $filter: TableESMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listESMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Data
        PK
        SK
      }
      nextToken
    }
  }
`;
export const queryESMSByGSI2 = /* GraphQL */ `
  query QueryESMSByGSI2($SK: String!, $first: Int, $after: String) {
    queryESMSByGSI2(SK: $SK, first: $first, after: $after) {
      items {
        Data
        PK
        SK
      }
      nextToken
    }
  }
`;
export const queryESMSByGSI1 = /* GraphQL */ `
  query QueryESMSByGSI1($SK: String!, $first: Int, $after: String) {
    queryESMSByGSI1(SK: $SK, first: $first, after: $after) {
      items {
        Data
        PK
        SK
      }
      nextToken
    }
  }
`;
