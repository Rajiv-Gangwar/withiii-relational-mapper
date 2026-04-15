/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 
  | 'Withiii Host' 
  | 'Withii Host' 
  | 'Facilitator' 
  | 'Organization Admin' 
  | 'Department Lead' 
  | 'Team Lead' 
  | 'Individual User' 
  | 'Individual'
  | 'Guest';

export type MapType = 'Individual' | 'Team' | 'Organization';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string; // This seems to be used as Organization in some places
  departmentName?: string;
  title?: string;
  avatar?: string;
}

export interface Relationship {
  fromId: string;
  toId: string;
  current: number; // -2 to 2
  goal: number;   // -2 to 2
  comment?: string;
  lastUpdated: string;
}

export interface RelationalMap {
  id: string;
  name: string;
  type: MapType;
  organizationName?: string;
  description?: string;
  ownerId?: string; // For individual maps
  category?: 'Personal' | 'Work' | 'Others'; // For individual maps
  orgMapType?: 'Team' | 'Department'; // For organization maps
  mode?: 'Online' | 'Offline';
  facilitatorName?: string;
  deadline?: string;
  participants: string[]; // User IDs
  viewers?: number;
  includeIdeal: boolean;
  status: 'Draft' | 'Active' | 'Completed' | 'awaiting-rating';
  createdAt: string;
  participationRate: number;
  owner?: string;
  coOwned?: boolean;
  participated?: boolean;
  shared?: boolean;
}

export interface PermissionGroup {
  id: string;
  name: string;
  permissions: {
    id: string;
    label: string;
    enabled: boolean;
  }[];
}
