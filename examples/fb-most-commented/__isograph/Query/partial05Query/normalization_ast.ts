import type {NormalizationAst} from '@isograph/react';
const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "organization",
      arguments: [
        [
          "login",
          { kind: "String", value: "facebook" },
        ],
      ],
      concreteType: "Organization",
      selections: [
        {
          kind: "Scalar",
          fieldName: "__typename",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "id",
          arguments: null,
        },
        {
          kind: "Linked",
          fieldName: "repositories",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 50 },
            ],
          ],
          concreteType: "RepositoryConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "__typename",
              arguments: null,
            },
            {
              kind: "Linked",
              fieldName: "nodes",
              arguments: null,
              concreteType: "Repository",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "__typename",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "id",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "createdAt",
                  arguments: null,
                },
                {
                  kind: "Linked",
                  fieldName: "issues",
                  arguments: [
                    [
                      "first",
                      { kind: "Literal", value: 50 },
                    ],

                    [
                      "states",
                      { kind: "Literal", value: null },
                    ],

                    [
                      "orderBy",
                      {
                        kind: "Object",
                        value: [
                          [
                            "field",
                            { kind: "Literal", value: null },
                          ],

                          [
                            "direction",
                            { kind: "Literal", value: null },
                          ],

                        ]
                      },
                    ],
                  ],
                  concreteType: "IssueConnection",
                  selections: [
                    {
                      kind: "Scalar",
                      fieldName: "__typename",
                      arguments: null,
                    },
                    {
                      kind: "Linked",
                      fieldName: "nodes",
                      arguments: null,
                      concreteType: "Issue",
                      selections: [
                        {
                          kind: "Scalar",
                          fieldName: "__typename",
                          arguments: null,
                        },
                        {
                          kind: "Scalar",
                          fieldName: "id",
                          arguments: null,
                        },
                        {
                          kind: "Linked",
                          fieldName: "comments",
                          arguments: null,
                          concreteType: "IssueCommentConnection",
                          selections: [
                            {
                              kind: "Scalar",
                              fieldName: "__typename",
                              arguments: null,
                            },
                          ],
                        },
                        {
                          kind: "Scalar",
                          fieldName: "createdAt",
                          arguments: null,
                        },
                        {
                          kind: "Scalar",
                          fieldName: "title",
                          arguments: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default normalizationAst;
