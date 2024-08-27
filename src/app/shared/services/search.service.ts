import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SearchResultGroup } from '../dtos';

const data: SearchResultGroup[] = [
    {
        Id: 1,
        Title: 'Workflow',
        Results: [
            {
                Id: 1,
                Type: 'action',
                Title: 'Rechnung erstellen für Lorem Ipsum',
                Icon: 'SVG goes here?',
                Options: [
                    {
                        Id: 1,
                        Title: 'Rabattart wählen',
                        Checked: true,
                        Url: 'Url goes here',
                    },
                    {
                        Id: 2,
                        Title: 'Zuschlag wählen',
                        Checked: true,
                        Url: 'Url goes here',
                    },
                    {
                        Id: 3,
                        Title: 'Sonderaktionen anzeigen',
                        Checked: false,
                        Url: 'Url goes here',
                    },
                ],
            },
            {
                Id: 1,
                Type: 'action',
                Title: 'Vorlagen für Eingangsrechnungen',
                Icon: 'SVG goes here?',
                Options: [
                    {
                        Id: 1,
                        Title: 'Rabattart wählen',
                        Checked: true,
                        Url: 'Url goes here',
                    },
                    {
                        Id: 2,
                        Title: 'Zuschlag wählen',
                        Checked: true,
                        Url: 'Url goes here',
                    },
                    {
                        Id: 3,
                        Title: 'Sonderaktionen anzeigen',
                        Checked: false,
                        Url: 'Url goes here',
                    },
                ],
            },
            {
                Id: 1,
                Type: 'action',
                Title: 'Rechnungsdetails eingeben',
                Icon: 'SVG goes here?',
                Options: [
                    {
                        Id: 1,
                        Title: 'Rabattart wählen',
                        Checked: true,
                        Url: 'Url goes here',
                    },
                    {
                        Id: 2,
                        Title: 'Zuschlag wählen',
                        Checked: true,
                        Url: 'Url goes here',
                    },
                    {
                        Id: 3,
                        Title: 'Sonderaktionen anzeigen',
                        Checked: false,
                        Url: 'Url goes here',
                    },
                ],
            },
        ],
    },
    {
        Id: 2,
        Title: 'Kontakte',
        Results: [
            {
                Id: 1,
                Type: 'contact',
                Name: 'Joey Byden',
                Address: 'Musterweg 1, 4040 Linz',
                Url: 'Url goes here',
            },
            {
                Id: 1,
                Type: 'contact',
                Name: 'Borat Obamna',
                Address: 'Landstraße 71, 4040 Linz',
                Url: 'Url goes here',
            },
            {
                Id: 1,
                Type: 'contact',
                Name: 'Don Tromp',
                Address: 'Domplatz 5, 4040 Linz',
                Url: 'Url goes here',
            },
        ],
    },
];

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private readonly http = inject(HttpClient);

    public async getData(): Promise<SearchResultGroup[]> {
        return Promise.resolve(data);

        return firstValueFrom(
            this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
        );
    }
}
