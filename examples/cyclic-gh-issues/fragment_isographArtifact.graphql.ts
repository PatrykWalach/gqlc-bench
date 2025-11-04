import iso from '@iso';
export const fragmentRepository = iso(`field Repository.fragmentRepository {
  __typename
  id
  createdAt
  homepageUrl
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
}`)(({ data }) => data);
export * from './__isograph/Repository/fragmentRepository/resolver_reader';