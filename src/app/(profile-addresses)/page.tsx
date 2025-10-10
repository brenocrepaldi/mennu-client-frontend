import { useProfileAddressesModel } from './profile-addresses.model';
import { ProfileAddressesView } from './profile-addresses.view';

export function ProfileAddressesPage() {
	const methods = useProfileAddressesModel();
	return <ProfileAddressesView {...methods} />;
}
