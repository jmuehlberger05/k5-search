import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SearchResultGroup } from '../dtos';

const data: SearchResultGroup[] = [
    {
        id: 1,
        title: 'Workflow',
        results: [
            {
                id: 1,
                type: 'action',
                title: 'Rechnung erstellen für Lorem Ipsum',
                icon: 'SVG goes here?',
                options: [
                    {
                        id: 1,
                        title: 'Rabattart wählen',
                        checked: true,
                        url: 'URL goes here',
                    },
                    {
                        id: 2,
                        title: 'Zuschlag wählen',
                        checked: true,
                        url: 'URL goes here',
                    },
                    {
                        id: 3,
                        title: 'Sonderaktionen anzeigen',
                        checked: false,
                        url: 'URL goes here',
                    },
                ],
            },
            {
                id: 1,
                type: 'action',
                title: 'Vorlagen für Eingangsrechnungen',
                icon: 'SVG goes here?',
                options: [
                    {
                        id: 1,
                        title: 'Rabattart wählen',
                        checked: true,
                        url: 'URL goes here',
                    },
                    {
                        id: 2,
                        title: 'Zuschlag wählen',
                        checked: true,
                        url: 'URL goes here',
                    },
                    {
                        id: 3,
                        title: 'Sonderaktionen anzeigen',
                        checked: false,
                        url: 'URL goes here',
                    },
                ],
            },
            {
                id: 1,
                type: 'action',
                title: 'Rechnungsdetails eingeben',
                icon: 'SVG goes here?',
                options: [
                    {
                        id: 1,
                        title: 'Rabattart wählen',
                        checked: true,
                        url: 'URL goes here',
                    },
                    {
                        id: 2,
                        title: 'Zuschlag wählen',
                        checked: true,
                        url: 'URL goes here',
                    },
                    {
                        id: 3,
                        title: 'Sonderaktionen anzeigen',
                        checked: false,
                        url: 'URL goes here',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'Kontakte',
        results: [
            {
                id: 1,
                type: 'contact',
                name: 'Joey Byden',
                address: 'Musterweg 1, 4040 Linz',
                url: 'URL goes here',
            },
            {
                id: 1,
                type: 'contact',
                name: 'Borat Obamna',
                address: 'Landstraße 71, 4040 Linz',
                url: 'URL goes here',
            },
            {
                id: 1,
                type: 'contact',
                name: 'Don Tromp',
                address: 'Domplatz 5, 4040 Linz',
                url: 'URL goes here',
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
