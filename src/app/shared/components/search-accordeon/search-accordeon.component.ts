import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-search-accordeon',
    standalone: true,
    imports: [],
    templateUrl: './search-accordeon.component.html',
    styleUrls: ['./search-accordeon.component.scss'],
})
export class SearchAccordeonComponent {
    protected isOpen = signal<boolean>(false);

    protected toggleAccordeon() {
        this.isOpen.update((isOpen) => !isOpen);
        console.log('Accordeon is open:', this.isOpen());
    }

    /**
     * TODO: Fix the Bug that the UI does not update when inside the Modal
     * TODO: Implement a way to dynamically generate the SearchContent from the JSON
     *
     * TODO: Intuitive Keyboard Navigation
     * TODO: Fix that checkboxes can be tabbed to when accordeon is closed
     *
     * TODO: Implement Dynamic Logic to determine the Height of the Accordeon
     *
     */
}
