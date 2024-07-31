import { Component, input, signal } from '@angular/core';
import { ActionSearchResult } from '../../../dtos';

@Component({
    selector: 'app-search-action-item',
    standalone: true,
    imports: [],
    templateUrl: './search-action-item.component.html',
    styleUrl: './search-action-item.component.scss',
})
export class SearchActionItemComponent {
    public action = input.required<ActionSearchResult>();

    protected isOpen = signal<boolean>(false);

    protected toggleAccordeon() {
        this.isOpen.update((isOpen) => !isOpen);
        console.log('Accordeon is open:', this.isOpen());
    }
}
