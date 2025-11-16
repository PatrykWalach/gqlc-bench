// TODO: Remove once we upgrade to typescript 2.9
declare module '*.json' {
  const jsonDocument: object;
  export default jsonDocument;
}

declare module '*.gql' {
  const graphqlDocument: string;
  export default graphqlDocument;
}
