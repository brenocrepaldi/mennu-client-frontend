// User-related data structures

export interface IUser {
	id: string;
	name: string;
	email: string;
	role: UserRole;
}

type UserRole =
	| 'SUPER_ADMIN' // Administrator (general)
	| 'ESTABLISHMENT_ADMIN' // Establishment (local)
	| 'ESTABLISHMENT_USER' // User (local employee)
	| 'CUSTOMER'; // User (consuming customer)
