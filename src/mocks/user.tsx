import { Building2, Home } from 'lucide-react';
import { IUser } from '../types/user';
import { IUserAddress } from '../types/user';

export const user: IUser = {
	id: 'd02abaa0-7c42-409f-a50b-6ecb1ef26444',
	name: 'Breno Gaia',
	email: 'brenogaia@gmail.com',
	role: 'CUSTOMER',
};

export const mockAddresses: IUserAddress[] = [
	{
		id: 1,
		type: 'Casa',
		icon: <Home className="w-5 h-5" />,
		address: 'Rua das Flores, 123',
		street: 'Rua das Flores',
		number: '123',
		neighborhood: 'Centro',
		city: 'São Paulo - SP',
		zipCode: '01234-567',
	},
	{
		id: 2,
		type: 'Trabalho',
		icon: <Building2 className="w-5 h-5" />,
		address: 'Av. Paulista, 1000',
		street: 'Av. Paulista',
		number: '1000',
		complement: 'Sala 200',
		neighborhood: 'Bela Vista',
		city: 'São Paulo - SP',
		zipCode: '01310-100',
	},
];
