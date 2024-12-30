import { FC } from "react";
import config from "../config";

export const HelloComponent: FC = () => {
    return (
    <>
        <h2>React ready to use!</h2>
        <p>Env vars working: {config.API_BASE} </p>
    </>
    )
}