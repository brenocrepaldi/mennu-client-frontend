import { useNavigate } from 'react-router-dom';
import { useMockUser } from '../../hooks/useMockUser';
import { useUserUtils } from '../../utils/userUtils';
import { useState } from 'react';

export const useProfileDetailsModel = () => {
	const navigate = useNavigate();
	const { user } = useMockUser();
	const { getUserNameInitials } = useUserUtils();
	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState(user?.name || '');
	const [editedEmail, setEditedEmail] = useState(user?.email || '');

	if (!user) {
		void navigate('not-found');
	}

	const handleSaveChanges = () => {
		// TODO: Implement save logic
		console.log('Saving changes:', { name: editedName, email: editedEmail });
		setIsEditing(false);
	};

	const handleCancel = () => {
		if (!user) return;
		setEditedName(user.name);
		setEditedEmail(user.email);
		setIsEditing(false);
	};

	return {
		user,
		getUserNameInitials,
		isEditing,
		setIsEditing,
		editedName,
		setEditedName,
		editedEmail,
		setEditedEmail,
		handleSaveChanges,
		handleCancel,
	};
};
