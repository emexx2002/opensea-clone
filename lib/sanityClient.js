import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "1j943yzt",
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: "skn1v8tPotuvdJnFone9uhgNO7gLUEYjISZcH9y4mml7pygbVIYIVZdC3FZrp0s7SJsbeEQGoYM67R8M3lALGZga7BElGEhNpTP1AESSOsjJoX3vW2EarAOhLbQnqI8EX3ljhRBHAhWZsYUV90p4lzncXvEBUcHaxUKW0vuIT6vLIG9XQUjo",
    useCdn: false,

})