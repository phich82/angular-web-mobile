import { Injectable, ErrorHandler } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log('error', error);
    }

}
