import { iso } from '../../__isograph/iso';
export const partial05Query = iso(`field Query.partial05Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            title
            __typename
            id
            comments {
              __typename
            }
          }
          __typename
        }
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial05Query/resolver_reader';
iso(`entrypoint Query.partial05Query`);
export * from '../../__isograph/Query/partial05Query/entrypoint';