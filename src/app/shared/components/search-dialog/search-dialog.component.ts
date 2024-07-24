import { Component, inject, Input, input, signal } from '@angular/core';
import { DialogRef } from '../../services/dialog.service';
import { NgStyle } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';

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
    public width = input<string>('500px');
}

@Component({
    selector: 'app-search-dialog',
    standalone: true,
    imports: [DialogBackdropComponent, SearchInputComponent],
    templateUrl: './search-dialog.component.html',
})
export class SearchDialogComponent {
    private readonly dialogRef = inject(DialogRef);

    protected close() {
        this.dialogRef.close();
    }
}
