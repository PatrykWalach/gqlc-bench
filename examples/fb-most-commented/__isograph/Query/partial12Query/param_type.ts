
export type Query__partial12Query__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly homepageUrl: (string | null),
          readonly createdAt: string,
          readonly issues: {
            readonly nodes: (ReadonlyArray<({
              readonly title: string,
              readonly comments: {
                readonly totalCount: number,
                readonly __typename: 'IssueCommentConnection',
              },
              readonly createdAt: string,
              readonly __typename: 'Issue',
              readonly id: string,
            } | null)> | null),
            readonly __typename: 'IssueConnection',
          },
          readonly __typename: 'Repository',
        } | null)> | null),
        readonly __typename: 'RepositoryConnection',
      },
      readonly __typename: 'Organization',
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
