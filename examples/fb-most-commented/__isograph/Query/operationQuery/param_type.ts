
export type Query__operationQuery__param = {
  readonly data: {
    readonly organization: ({
      readonly __typename: 'Organization',
      readonly repositories: {
        readonly __typename: 'RepositoryConnection',
        readonly nodes: (ReadonlyArray<({
          readonly __typename: 'Repository',
          readonly createdAt: string,
          readonly homepageUrl: (string | null),
          readonly issues: {
            readonly __typename: 'IssueConnection',
            readonly nodes: (ReadonlyArray<({
              readonly __typename: 'Issue',
              readonly createdAt: string,
              readonly id: string,
              readonly title: string,
              readonly comments: {
                readonly __typename: 'IssueCommentConnection',
                readonly totalCount: number,
              },
            } | null)> | null),
          },
        } | null)> | null),
      },
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
