import { MenuOption } from "../interfaces/MenuOption";

export const getMenuOptions = (): MenuOption[] => [
	{
		id: "intro",
		name: "Intro",
	},
	{
		id: "tech",
		name: "Skills",
	},
	{
		id: "exp",
		name: "Experience",
	},
	{
		id: "repos",
		name: "Repositories",
	},
];
