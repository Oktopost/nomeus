export function describeUser({}, user) {
	const name = user.name.trim();

	if (!name) {
		return 'Unknown';
	}

	return name;
}
