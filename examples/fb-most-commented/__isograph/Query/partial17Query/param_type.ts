
export type Query__partial17Query__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly issues: {
            readonly nodes: (ReadonlyArray<({
              readonly comments: {
                readonly totalCount: number,
                readonly __typename: 'IssueCommentConnection',
              },
              readonly title: string,
              readonly createdAt: string,
              readonly __typename: 'Issue',
              readonly id: string,
            } | null)> | null),
            readonly __typename: 'IssueConnection',
          },
          readonly createdAt: string,
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
