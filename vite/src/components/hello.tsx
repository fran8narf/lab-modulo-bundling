import { FC } from "react";

export const HelloComponent: FC = () => {
    return (
    <>
        <h2>React ready to use!</h2>
        <p>Env vars working: {import.meta.env.VITE_API_BASE} </p>
    </>
    )
}