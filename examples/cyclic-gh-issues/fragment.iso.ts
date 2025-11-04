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
iso(`entrypoint Query.fragmentOwnerQuery`);
export const fragmentOwnerQuery = iso(`field Query.fragmentOwnerQuery {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        fragmentRepository
      }
    }
  }
}`)(({ data }) => data);