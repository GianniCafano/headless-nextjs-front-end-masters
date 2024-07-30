export const contentGqlFetcher = async (gqlQuery: string, variables: {}) => {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/:${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({gqlQuery, variables})

    })
}