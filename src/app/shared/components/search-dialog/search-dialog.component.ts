import {
    Component,
    HostListener,
    inject,
    Input,
    input,
    signal,
} from '@angular/core';
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

    ngOnInit() {
        window.addEventListener('keydown', this.handleKeyboardEvent);
        console.log('SearchDialogComponent initialized');
    }

    ngOnDestroy() {
        window.removeEventListener('keydown', this.handleKeyboardEvent);
        console.log('SearchDialogComponent destroyed');
    }

    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            event.preventDefault(); // Prevent default action if needed
            this.close();
        }
    }

    protected close() {
        this.dialogRef.close();
    }
}
