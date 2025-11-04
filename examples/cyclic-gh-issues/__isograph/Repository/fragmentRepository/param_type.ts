
export type Repository__fragmentRepository__param = {
  readonly data: {
    readonly __typename: 'Repository',
    readonly id: string,
    readonly createdAt: string,
    readonly homepageUrl: (string | null),
    readonly issues: {
      readonly __typename: 'IssueConnection',
      readonly nodes: (ReadonlyArray<({
        readonly __typename: 'Issue',
        readonly id: string,
        readonly createdAt: string,
        readonly title: string,
        readonly repository: {
          readonly __typename: 'Repository',
          readonly id: string,
        },
      } | null)> | null),
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
