export const useRegexValidations = () => {
	const nameRegex = new RegExp(/^[a-zA-ZÀ-ÿ]+\s+[a-zA-ZÀ-ÿ\s]+$/);
	const emailRegex = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	const passwordRegex = new RegExp(/^.{6,}$/);

	return { emailRegex, passwordRegex, nameRegex };
};
