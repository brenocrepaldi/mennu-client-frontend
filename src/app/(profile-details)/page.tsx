import { useProfileDetailsModel } from './profile-details.model';
import { ProfileDetailsView } from './profile-details.view';

export function ProfileDetailsPage() {
	const methods = useProfileDetailsModel();
	return <ProfileDetailsView {...methods} />;
}
