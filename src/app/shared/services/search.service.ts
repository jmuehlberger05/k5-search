import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SearchResultDTO } from '../dtos';

// const data: SearchResultGroup[] = [
//     {
//         id: 1,
//         title: 'Workflow',
//         results: [
//             {
//                 id: 'string',
//                 type: 'workflow',
//                 title: 'Rechnung erstellen für Lorem Ipsum',
//                 icon: 'SVG goes here?',
//                 options: [
//                     {
//                         id: 'string',
//                         title: 'Rabattart wählen',
//                         checked: true,
//                         url: 'url goes here',
//                     },
//                     {
//                         id: 'string',
//                         title: 'Zuschlag wählen',
//                         checked: true,
//                         url: 'url goes here',
//                     },
//                     {
//                         id: 'string',
//                         title: 'Sonderaktionen anzeigen',
//                         checked: false,
//                         url: 'url goes here',
//                     },
//                 ],
//             },
//             {
//                 id: 'string',
//                 type: 'workflow',
//                 title: 'Vorlagen für Eingangsrechnungen',
//                 icon: 'SVG goes here?',
//                 options: [
//                     {
//                         id: 'string',
//                         title: 'Rabattart wählen',
//                         checked: true,
//                         url: 'url goes here',
//                     },
//                     {
//                         id: 'string',
//                         title: 'Zuschlag wählen',
//                         checked: true,
//                         url: 'url goes here',
//                     },
//                     {
//                         id: 'string',
//                         title: 'Sonderaktionen anzeigen',
//                         checked: false,
//                         url: 'url goes here',
//                     },
//                 ],
//             },
//             {
//                 id: 'string',
//                 type: 'workflow',
//                 title: 'Rechnungsdetails eingeben',
//                 icon: 'SVG goes here?',
//                 options: [
//                     {
//                         id: 'string',
//                         title: 'Rabattart wählen',
//                         checked: true,
//                         url: 'url goes here',
//                     },
//                     {
//                         id: 'string',
//                         title: 'Zuschlag wählen',
//                         checked: true,
//                         url: 'url goes here',
//                     },
//                     {
//                         id: 'string',
//                         title: 'Sonderaktionen anzeigen',
//                         checked: false,
//                         url: 'url goes here',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 2,
//         title: 'Kontakte',
//         results: [
//             {
//                 id: 'string',
//                 type: 'contact',
//                 name: 'Joey Byden',
//                 address: 'Musterweg 1, 4040 Linz',
//                 url: 'url goes here',
//             },
//             {
//                 id: 'string',
//                 type: 'contact',
//                 name: 'Borat Obamna',
//                 address: 'Landstraße 71, 4040 Linz',
//                 url: 'url goes here',
//             },
//             {
//                 id: 'string',
//                 type: 'contact',
//                 name: 'Don Tromp',
//                 address: 'Domplatz 5, 4040 Linz',
//                 url: 'url goes here',
//             },
//         ],
//     },
// ];

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private readonly http = inject(HttpClient);

    public async getInitialData(): Promise<SearchResultDTO> {
        return await firstValueFrom(
            this.http.get<SearchResultDTO>(
                `https://localhost:7189/search/${'a'}`,
            ),
        );
    }

    public async getSearchData(query: string): Promise<SearchResultDTO> {
        // if (!query) {
        //     return Promise.resolve({
        //         contacts: [],
        //         workflows: [],
        //         tasks: [],
        //     });
        // }
        if (!query) {
            query = 'a';
        }
        return await firstValueFrom(
            this.http.get<SearchResultDTO>(
                `https://localhost:7189/search/${query}`,
            ),
        );
    }
}
