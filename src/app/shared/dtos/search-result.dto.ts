export type SearchResultGroup = {
    Id: number;
    Title: string;
    Results: ContactSearchResult[] | ActionSearchResult[];
};

export type ContactSearchResult = {
    Id: number;
    Type: 'contact';
    Name: string;
    Address: string;
    Url: string;
};

export type ActionSearchResult = {
    Id: number;
    Type: 'action';
    Title: string;
    Icon: string;
    Options: ActionSearchResultOption[];
};

export type ActionSearchResultOption = {
    Id: number;
    Title: string;
    Checked: boolean;
    Url: string;
};
