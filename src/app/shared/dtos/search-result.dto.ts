export type SearchResultGroup = {
    id: number;
    title: string;
    results: ContactSearchResult[] | ActionSearchResult[];
};

export type ContactSearchResult = {
    id: number;
    type: 'contact';
    name: string;
    address: string;
    url: string;
};

export type ActionSearchResult = {
    id: number;
    type: 'action';
    title: string;
    icon: string;
    options: ActionSearchResultOption[];
};

export type ActionSearchResultOption = {
    id: number;
    title: string;
    checked: boolean;
    url: string;
};
