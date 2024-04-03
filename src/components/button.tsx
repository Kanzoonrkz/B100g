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

	function Button({ children, onClick, className }: ButtonProps) {
		return (
			<button
				className={
					"text-lg py-2 px-4 rounded-lg " + buttonStyles[style] + className
				}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}

	Button.displayName =
		style === ButtonStyle.Primary ? "PrimaryButton" : "SecondaryButton";

	return Button;
};

const Button = {
	Primary: createButton(ButtonStyle.Primary),
	Secondary: createButton(ButtonStyle.Secondary),
};

export default Button;
