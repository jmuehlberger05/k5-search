import { Component, input } from '@angular/core';

@Component({
    selector: 'app-dialog-backdrop',
    standalone: true,
    imports: [],
    styles: `
        .dialog {
        height: clamp(30rem, 60vh, 60rem);

        @apply bg-white;
        @apply rounded-xl;
        @apply overflow-hidden;
        }

        .dialog-backdrop {
        @apply fixed;
        @apply inset-0;

        @apply grid;
        @apply place-items-center;

        background-color: rgba(0, 0, 0, 0.4);
        }
  `,
    template: `
        <div class="dialog-backdrop">
            <div class="dialog" [style.width]="width()">
                <ng-content />
            </div>
        </div>
    `,
})
export class DialogBackdropComponent {
    public width = input<string>('clamp(30rem, 60vw, 60rem)');
}
