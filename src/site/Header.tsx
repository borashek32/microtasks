import React from "react";

type HeaderType = {
    title: string
}

export const Header = (props: HeaderType) => {
    return (
        <div>
            <h1 className="header">{props.title}</h1>
        </div>
    );
}