import { ProtectionLevel } from "../enums/protection-level.enum";

export interface Attribute {
    name: string; // Attribute name
    protection: ProtectionLevel; // Visibility of attribute for users
}