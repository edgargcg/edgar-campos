import { MenuOption } from "../interfaces/MenuOption";

export const getMenuOptions = (): MenuOption[] => [
	{
		id: "intro",
		name: "Intro",
	},
	{
		id: "tech",
		name: "Tecnologías",
	},
	{
		id: "exp",
		name: "Experiencia",
	},
	{
		id: "repos",
		name: "Repositorios",
	},
];
