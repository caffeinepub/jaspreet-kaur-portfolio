import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInfo {
    name: string;
    email: string;
    linkedInUrl: string;
}
export interface VisitorMessage {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllVisitorMessages(): Promise<Array<VisitorMessage>>;
    getContactInfo(): Promise<ContactInfo | null>;
    setContactInfo(name: string, email: string, linkedInUrl: string): Promise<void>;
    submitVisitorMessage(name: string, email: string, message: string): Promise<bigint>;
}
