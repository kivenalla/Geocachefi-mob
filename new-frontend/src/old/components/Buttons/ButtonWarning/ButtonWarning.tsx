import { ReactNode } from "react";
import styles from "./ButtonWarning.module.scss";

interface Props{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: ReactNode
}

const ButtonWarning = ({
    onClick,
    children
}: Props) => {
    return (
        <button onClick={onClick} className={styles["gc-button gc-button-warning"]}>{children}</button>
    );
};

export default ButtonWarning;
