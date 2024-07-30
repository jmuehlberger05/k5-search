import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private readonly http = inject(HttpClient);

    public async getData(): Promise<any> {
        return firstValueFrom(
            this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
        );
    }
}
