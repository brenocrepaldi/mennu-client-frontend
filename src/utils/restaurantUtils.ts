import { IOperatingHours } from '../types';

/**
 * Determines if a restaurant is currently open based on its operating hours.
 * @param operatingHours - The restaurant's schedule for each day of the week.
 * @returns {boolean} - True if the restaurant is open, false otherwise.
 */
export const isRestaurantOpen = (operatingHours: IOperatingHours[]): boolean => {
	const now = new Date();

	// Get the current day of the week in the same format as the JSON
	const dayOfWeek = now
		.toLocaleString('pt-BR', { weekday: 'long' })
		.toLowerCase();

	// Find the schedule for the current day
	const todaySchedule = operatingHours.find((day) => day.day === dayOfWeek);

	// If there is no schedule for today or it's closed, return false
	if (
		!todaySchedule ||
		todaySchedule.open === null ||
		todaySchedule.close === null
	) {
		return false;
	}

	// Convert current time to minutes since midnight
	const currentTime = now.getHours() * 60 + now.getMinutes();

	// Helper function to convert time string (hh:mm) into minutes
	const timeToMinutes = (time: string) => {
		const [hour, minute] = time.split(':').map(Number);
		return hour * 60 + (minute || 0);
	};

	// Convert opening and closing times
	const openTime = timeToMinutes(todaySchedule.open);
	let closeTime = timeToMinutes(todaySchedule.close);

	// If closing time is "00:00", treat it as the end of the day
	if (todaySchedule.close === '00:00') {
		closeTime = 24 * 60; // 1440 minutes (midnight)
	}

	// Check if the restaurant is currently open
	return currentTime >= openTime && currentTime < closeTime;
};
