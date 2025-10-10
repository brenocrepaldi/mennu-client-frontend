export const useUserUtils = () => {
	function getUserNameInitials(name: string) {
		return name
			.split(' ')
			.map((n: string) => n[0])
			.join('')
			.substring(0, 2)
			.toUpperCase();
	}

	return { getUserNameInitials };
};
