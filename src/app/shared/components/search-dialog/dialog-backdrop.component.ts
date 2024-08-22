import { Component, HostListener, inject, input } from '@angular/core';
import { DialogRef, DialogService } from '../../services/dialog.service';

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
    private readonly dialogRef = inject(DialogRef);
    private readonly dialogService = inject(DialogService);

    public level = input.required<number>();
    public width = input<string>('clamp(30rem, 60vw, 60rem)');

    @HostListener('window:keydown', ['$event'])
    public handleKeyboardEvent(event: KeyboardEvent) {
        if (
            event.key === 'Escape' &&
            this.level() === this.dialogService.modalStackCount()
        ) {
            event.preventDefault();
            this.dialogRef.close();
        }
    }

    // Close the dialog when clicking outside of it
    @HostListener('click', ['$event'])
    public handleClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const currentTarget = event.currentTarget as HTMLElement;
        if (currentTarget?.querySelector('.dialog-backdrop')! === target) {
            this.dialogRef.close();
        }
    }
}
