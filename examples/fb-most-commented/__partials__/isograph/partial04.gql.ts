import { iso } from '../../__isograph/iso';
export const partial04Query = iso(`field Query.partial04Query {
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
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial04Query/resolver_reader';
iso(`entrypoint Query.partial04Query`);
export * from '../../__isograph/Query/partial04Query/entrypoint';