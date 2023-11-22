// creates a query string from query object


export interface queryObjectInt {
    page: number,
    text: string,
    department?: string[]
}

export function readQueryProperty(property: string, queryObject: Record<string, string | number | boolean>) {
    return queryObject[property]
};
export function updateQueryProperty(property: string, value: string | number, queryObject: Record<string, string | number | boolean>) {
    let update = {}
    if (property && value) update = { [property]: value }
    return { ...queryObject, ...update }
};

export function createQueryString(queryObject: Record<string, string | number | boolean>) {
    const str: string[] = [];
    for (const prop in queryObject)
        if (queryObject.hasOwnProperty(prop)) {
            str.push(`${encodeURIComponent(prop)}=${encodeURIComponent(queryObject[prop])}`);
        }
    return str.join("&");
};

// turns query string back into an object
export function queryStringToObject(queryString: string) {
    let queryObject = {}
    const URLSearchParamsObj = new URLSearchParams(queryString);
    for (const [key, value] of URLSearchParamsObj) {
        queryObject[key] = value
    }
    return queryObject;
};