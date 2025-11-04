import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__fragmentOwnerQuery__param } from './param_type';
import { Query__fragmentOwnerQuery__output_type } from './output_type';
import { fragmentOwnerQuery as resolver } from '../../../fragment.iso';
import Repository__fragmentRepository__resolver_reader from '../../Repository/fragmentRepository/resolver_reader';

const readerAst: ReaderAst<Query__fragmentOwnerQuery__param> = [
  {
    kind: "Linked",
    fieldName: "organization",
    alias: null,
    arguments: [
      [
        "login",
        { kind: "String", value: "facebook" },
      ],
    ],
    condition: null,
    isUpdatable: false,
    refetchQueryIndex: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "repositories",
        alias: null,
        arguments: [
          [
            "first",
            { kind: "Literal", value: 10 },
          ],
        ],
        condition: null,
        isUpdatable: false,
        refetchQueryIndex: null,
        selections: [
          {
            kind: "Linked",
            fieldName: "nodes",
            alias: null,
            arguments: null,
            condition: null,
            isUpdatable: false,
            refetchQueryIndex: null,
            selections: [
              {
                kind: "Resolver",
                alias: "fragmentRepository",
                arguments: null,
                readerArtifact: Repository__fragmentRepository__resolver_reader,
                usedRefetchQueries: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Query__fragmentOwnerQuery__param,
  Query__fragmentOwnerQuery__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Query.fragmentOwnerQuery",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
