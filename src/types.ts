// Extension holds the information identifying an extension
export interface Extension {
    id: string
    type: ExtensionType
    name: string
    description: string
}

export enum ExtensionType {
    plugin = "plugin",
    theme = "theme",
}

export interface SearchResult {
    results: Array<Extension>
    fetchMore: () => Promise<SearchResult>
}

export enum ResultSort {
    stars = "stars",
    new = "new",
}
