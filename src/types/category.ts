export interface FullCategory {
    id:          number;
    name:        string;
    slug:        string;
    parent:      number;
    description: string;
    display?:     string;
    attributes?: any;
    highlights?:  number[];
}