import { ConfirmDialog } from './confirm';
import { DynamicDialog } from './dynamic';
import { FormDialogs } from './form';

export const Dialogs = [
    ...FormDialogs,
    ConfirmDialog,
    DynamicDialog
];

export * from './confirm';
export * from './dynamic';
export * from './form';
