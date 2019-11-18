import { ViewContainerRef } from "@angular/core";

export abstract class Modal {
    abstract show(header?: any, title?: string | ViewContainerRef, body?: any): void;
    abstract hide(): void;
}
