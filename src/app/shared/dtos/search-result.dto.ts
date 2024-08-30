import { IconName } from '../components/icons/icon.component';

// export type SearchResultGroup = {
//     id: number;
//     title: string;
//     results: ContactSearchResult[] | ActionSearchResult[];
// };

// export type ContactSearchResult = {
//     id: string;
//     type: 'contact';
//     name: string;
//     address: string;
//     url: string;
// };

// export type ActionSearchResult = {
//     id: string;
//     type: 'workflow';
//     title: string;
//     icon: string;
//     options: ActionSearchResultOption[];
// };

// export type ActionSearchResultOption = {
//     id: string;
//     title: string;
//     checked: boolean;
//     url: string;
// };

// DTOs

export type SearchResultDTO = {
    contacts: ContactSearchResultDTO[];
    workflows: WorkflowSearchResultDTO[];
    tasks: TaskSearchResultDTO[];
};

export type ContactSearchResultDTO = {
    id: string;
    type: 'contact';
    name: string;
    address: string;
    url: string;
};

export type WorkflowSearchResultDTO = {
    id: string;
    type: 'workflow';
    title: string;
    icon: string;
    options: WorkflowSearchResultOptionDTO[];
};

export type WorkflowSearchResultOptionDTO = {
    id: string;
    title: string;
    checked: boolean;
    url: string;
};

export type TaskSearchResultDTO = {
    id: string;
    type: 'task';
    title: string;
    icon: IconName;
    url: string;
};
