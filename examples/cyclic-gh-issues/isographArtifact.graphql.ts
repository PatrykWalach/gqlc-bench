import iso from '@iso';
export const operationXQuery = iso(`field Query.operationXQuery {
  organization(login: "facebook") {
    operationXOrg
  }
}`)(({ data }) => data);
export * from './__isograph/Query/operationXQuery/resolver_reader';
iso(`entrypoint Query.operationXQuery`);
export * from './__isograph/Query/operationXQuery/entrypoint';
export const operationXOrg = iso(`field Organization.operationXOrg {
  __typename
  id
  repositories(first: 10) {
    __typename
    nodes {
      __typename
      id
      createdAt
      operationXHomepage
      issues(first: 10, states: null) {
        __typename
        nodes {
          __typename
          id
          createdAt
          title
          repository {
            __typename
            id
          }
        }
      }
    }
  }
}`)(({ data }) => data);
export * from './__isograph/Organization/operationXOrg/resolver_reader';
export const operationXHomepage = iso(`field Repository.operationXHomepage {
  homepageUrl
}`)(({ data }) => data);
export * from './__isograph/Repository/operationXHomepage/resolver_reader';