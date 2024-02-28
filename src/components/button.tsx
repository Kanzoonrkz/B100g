import React from "react";

enum ButtonStyle {
	Primary = "primary",
	Secondary = "secondary",
}

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const createButton = <S extends ButtonStyle>(
	style: S
): React.FC<ButtonProps> => {
	const buttonStyles = {
		[ButtonStyle.Primary]: "bg-dark text-light ",
		[ButtonStyle.Secondary]: "bg-transparent border-dark text-dark border ",
	};

	return ({ children, onClick, className }) => (
		<button
			className={
				"text-xl py-2 px-6 rounded-lg " + buttonStyles[style] + className
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

const Button = {
	Primary: createButton(ButtonStyle.Primary),
	Secondary: createButton(ButtonStyle.Secondary),
};

export default Button;
