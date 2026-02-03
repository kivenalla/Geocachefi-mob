import { ReactNode } from "react";
import styles from "./ButtonPrimary.module.scss";

interface Props{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: ReactNode
}

const Button = ({
    onClick,
    children
}: Props) => {
    return (
        <button onClick={onClick} className={styles["gc-button gc-button-primary"]}>{children}</button>
    );
};

export default Button;
