
export type Query__partial15Query__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly createdAt: string,
          readonly issues: {
            readonly nodes: (ReadonlyArray<({
              readonly title: string,
              readonly createdAt: string,
              readonly comments: {
                readonly totalCount: number,
                readonly __typename: 'IssueCommentConnection',
              },
              readonly __typename: 'Issue',
              readonly id: string,
            } | null)> | null),
            readonly __typename: 'IssueConnection',
          },
          readonly homepageUrl: (string | null),
          readonly __typename: 'Repository',
        } | null)> | null),
        readonly __typename: 'RepositoryConnection',
      },
      readonly __typename: 'Organization',
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
