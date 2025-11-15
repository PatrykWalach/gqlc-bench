import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__partial14Query__param } from './param_type';
import { Query__partial14Query__output_type } from './output_type';
import { partial14Query as resolver } from '../../../__partials__/isograph/partial14.gql';

const readerAst: ReaderAst<Query__partial14Query__param> = [
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
                kind: "Linked",
                fieldName: "issues",
                alias: null,
                arguments: [
                  [
                    "first",
                    { kind: "Literal", value: 10 },
                  ],

                  [
                    "states",
                    { kind: "Literal", value: null },
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
                        kind: "Scalar",
                        fieldName: "title",
                        alias: null,
                        arguments: null,
                        isUpdatable: false,
                      },
                      {
                        kind: "Scalar",
                        fieldName: "createdAt",
                        alias: null,
                        arguments: null,
                        isUpdatable: false,
                      },
                      {
                        kind: "Scalar",
                        fieldName: "__typename",
                        alias: null,
                        arguments: null,
                        isUpdatable: false,
                      },
                      {
                        kind: "Scalar",
                        fieldName: "id",
                        alias: null,
                        arguments: null,
                        isUpdatable: false,
                      },
                      {
                        kind: "Linked",
                        fieldName: "repository",
                        alias: null,
                        arguments: null,
                        condition: null,
                        isUpdatable: false,
                        refetchQueryIndex: null,
                        selections: [
                          {
                            kind: "Scalar",
                            fieldName: "__typename",
                            alias: null,
                            arguments: null,
                            isUpdatable: false,
                          },
                          {
                            kind: "Scalar",
                            fieldName: "id",
                            alias: null,
                            arguments: null,
                            isUpdatable: false,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: "Scalar",
                    fieldName: "__typename",
                    alias: null,
                    arguments: null,
                    isUpdatable: false,
                  },
                ],
              },
              {
                kind: "Scalar",
                fieldName: "homepageUrl",
                alias: null,
                arguments: null,
                isUpdatable: false,
              },
              {
                kind: "Scalar",
                fieldName: "createdAt",
                alias: null,
                arguments: null,
                isUpdatable: false,
              },
              {
                kind: "Scalar",
                fieldName: "__typename",
                alias: null,
                arguments: null,
                isUpdatable: false,
              },
              {
                kind: "Scalar",
                fieldName: "id",
                alias: null,
                arguments: null,
                isUpdatable: false,
              },
            ],
          },
          {
            kind: "Scalar",
            fieldName: "__typename",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
        ],
      },
      {
        kind: "Scalar",
        fieldName: "__typename",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Scalar",
        fieldName: "id",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Query__partial14Query__param,
  Query__partial14Query__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Query.partial14Query",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
