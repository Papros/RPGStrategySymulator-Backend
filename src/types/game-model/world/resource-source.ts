import { ResourceType } from '../enums/resource.enum';

export interface IResourceSource {
  id: string; // Kingdom unique ID
  type: ResourceType;
  isInfinite: boolean;
  amount: number;
  productionSpeed: number;
}
