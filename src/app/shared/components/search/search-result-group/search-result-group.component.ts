import { Component, input } from '@angular/core';

@Component({
    selector: 'app-search-result-group',
    standalone: true,
    imports: [],
    template: `
        <div class="grid mt-4">
            <h2 class="text-sm px-4 py-2">{{ title() }}</h2>
            <div class="flex flex-col">
                <ng-content />
            </div>
        </div>
    `,
})
export class SearchResultGroupComponent {
    public title = input<string>();
}
