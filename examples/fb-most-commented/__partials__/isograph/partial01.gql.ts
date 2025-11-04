import { iso } from '../../__isograph/iso';
export const partial01Query = iso(`field Query.partial01Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            title
            __typename
            id
            comments {
              __typename
            }
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial01Query/resolver_reader';
iso(`entrypoint Query.partial01Query`);
export * from '../../__isograph/Query/partial01Query/entrypoint';