import { Link } from "waku";
import React from "react";

export const Header = () => {
	return (
		<header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0">
			<h2 className="text-2xl font-bold tracking-tight">
				<Link to="/">React Tokyo</Link>
			</h2>
		</header>
	);
};
