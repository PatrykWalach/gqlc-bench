export default 'query partial15Query {\
  organization____login___s_facebook: organization(login: "facebook") {\
    __typename,\
    id,\
    repositories____first___l_50: repositories(first: 50) {\
      __typename,\
      nodes {\
        __typename,\
        id,\
        createdAt,\
        homepageUrl,\
        issues____first___l_50____states___l_null____orderBy___o_field__l_null_direction__l_null_c: issues(first: 50, states: null, orderBy: { field: null, direction: null }) {\
          __typename,\
          nodes {\
            __typename,\
            id,\
            comments {\
              __typename,\
              totalCount,\
            },\
            createdAt,\
            title,\
          },\
        },\
      },\
    },\
  },\
}';