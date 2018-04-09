import { SearchResult, ExtensionType, ResultSort } from "./types"

const filterRegEx = /@([a-zA-Z]+):\s?([a-zA-Z]+)/g
function parseQueryString(q: string): { text: string; type?: ExtensionType; sort: ResultSort } {
    if (!q) return { text: "", sort: ResultSort.stars }

    let type
    let sort = ResultSort.stars
    let text = q
    if (filterRegEx.test(q)) {
        text = q
            .replace(filterRegEx, (match, key, val) => {
                if (key === "type" && Object.values(ExtensionType).includes(val)) {
                    type = val
                } else if (key === "sort" && Object.values(ResultSort).includes(val)) {
                    sort = val
                }
                return ""
            })
            .trim()
    }

    return { type, text, sort }
}

export async function search(query: string): Promise<SearchResult> {
    return null
}

// Private exports for testing purpose only
export const __parseQueryString = parseQueryString
