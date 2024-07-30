import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-action-item',
    standalone: true,
    imports: [],
    templateUrl: './action-item.component.html',
    styleUrl: './action-item.component.scss',
})
export class ActionItemComponent {
    public title = input.required<string>();
    public icon = input<string>();

    protected isOpen = signal<boolean>(false);

    protected toggleAccordeon() {
        this.isOpen.update((isOpen) => !isOpen);
        console.log('Accordeon is open:', this.isOpen());
    }
}
