const pages = (state = [], action) => {

	switch (action.type) {
		default:
			return [
				{
					id: 1,
					path: "/home",
					label: "Game",
					isActive: true, // Default page so this will start as true
				},
				{
					id: 2,
					path: "/about",
					label: "About",
					isActive: false,
				},
				{
					id: 3,
					path: "/instructions",
					label: "How to Play",
					isActive: false,
				},
				{
					id: 4,
					path: "/ranks",
					label: "Leaderboards",
					isActive: false,
				},
			];
		case '/home':
			return [
				{
					id: 1,
					path: "/home",
					label: "Game",
					isActive: true,
				},
				{
					id: 2,
					path: "/about",
					label: "About",
					isActive: false,
				},
				{
					id: 3,
					path: "/instructions",
					label: "How to Play",
					isActive: false,
				},
				{
					id: 4,
					path: "/ranks",
					label: "Leaderboards",
					isActive: false,
				},
			];
		case '/about':
			return [
				{
					id: 1,
					path: "/home",
					label: "Game",
					isActive: false,
				},
				{
					id: 2,
					path: "/about",
					label: "About",
					isActive: true,
				},
				{
					id: 3,
					path: "/instructions",
					label: "How to Play",
					isActive: false,
				},
				{
					id: 4,
					path: "/ranks",
					label: "Leaderboards",
					isActive: false,
				},
			];
		case '/instructions':
			return [
				{
					id: 1,
					path: "/home",
					label: "Game",
					isActive: false,
				},
				{
					id: 2,
					path: "/about",
					label: "About",
					isActive: false,
				},
				{
					id: 3,
					path: "/instructions",
					label: "How to Play",
					isActive: true,
				},
				{
					id: 4,
					path: "/ranks",
					label: "Leaderboards",
					isActive: false,
				},
			];
		case '/ranks':
			return [
				{
					id: 1,
					path: "/home",
					label: "Game",
					isActive: false,
				},
				{
					id: 2,
					path: "/about",
					label: "About",
					isActive: false,
				},
				{
					id: 3,
					path: "/instructions",
					label: "How to Play",
					isActive: false,
				},
				{
					id: 4,
					path: "/ranks",
					label: "Leaderboards",
					isActive: true,
				},
			];
	}
}

export default pages;