import { Component, inject, Input, input, signal } from '@angular/core';
import { DialogRef } from '../../services/dialog.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-dialog-backdrop',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="dialog-backdrop">
      <div class="dialog">
        <ng-content />
      </div>
    </div>
  `,
})
export class DialogBackdropComponent {
  // public width = input<string>('500px');
  @Input() public width = '500px';
}

@Component({
  selector: 'app-search-dialog',
  standalone: true,
  imports: [DialogBackdropComponent],
  templateUrl: './search-dialog.component.html',
})
export class SearchDialogComponent {
  private dialogRef = inject(DialogRef);
  protected close(): void {
    this.dialogRef.close();
  }
}
