export default class ApiClent {
    public static get = <T>(query: string): Promise<T> => {
        return fetch(query)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }

                    throw new Error(`Error running query: ${query}`);
                })
                .then(data => data)
                .catch(err => {
                    console.error(err);
                });
    }

    public static post = <T, B = null>(query: string, body: B): Promise<T> => {
        return fetch(query, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Error running query: ${query}`);
            })
            .then(data => data)
            .catch(err => {
                console.error(err);
            });
    }
}