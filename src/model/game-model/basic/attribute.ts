import { ProtectionLevel } from "@app/model/server";

export interface Attribute {
    name: string; // Attribute name
    protection: ProtectionLevel; // Visibility of attribute for users
}