export default 'query partial13Query {\
  organization____login___s_facebook: organization(login: "facebook") {\
    __typename,\
    id,\
    repositories____first___l_10: repositories(first: 10) {\
      __typename,\
      nodes {\
        __typename,\
        id,\
        createdAt,\
        homepageUrl,\
        issues____first___l_10____states___l_null: issues(first: 10, states: null) {\
          __typename,\
          nodes {\
            __typename,\
            id,\
            createdAt,\
            repository {\
              __typename,\
              id,\
            },\
            title,\
          },\
        },\
      },\
    },\
  },\
}';