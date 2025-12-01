import { ProfileAddressesView } from './profile-addresses.view';
import { useProfileAddressesModel } from './profile-addresses.model';

export function ProfileAddressesPage() {
	const methods = useProfileAddressesModel();
	return <ProfileAddressesView {...methods} />;
}
