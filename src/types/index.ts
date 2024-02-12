export interface ICompany {
 id: number;
 name: string;
 address: string;
 isActive: boolean;
 members: IMember[];
}

export type IMember = {
 id: number;
 name: string;
 surname: string;
 position: string;
 isActive: boolean;
};

export type IDynamicMember = {
 id: number;
 name: { value: string; isDirty: boolean };
 surname: { value: string; isDirty: boolean };
 position: { value: string; isDirty: boolean };
};
