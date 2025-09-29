import { useProfileModel } from './profile.model';
import { ProfileView } from './profile.view';

export function ProfilePage() {
	const methods = useProfileModel();
	return <ProfileView {...methods} />;
}
