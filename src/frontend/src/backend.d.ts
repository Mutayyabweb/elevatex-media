import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    /**
     * / Submit a contact form and send the data to info@elevatexmedia.com.
     * / Returns #ok(confirmationMessage) on success or #err(errorMessage) on failure.
     */
    submitContactForm(name: string, email: string, phone: string, company: string, service: string, message: string): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
