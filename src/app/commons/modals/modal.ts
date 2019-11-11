
export abstract class Modal {
    abstract show(header: string, title: string, body: any): void;
    abstract hide(): void;
}
