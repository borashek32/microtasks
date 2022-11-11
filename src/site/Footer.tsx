import React from "react";

type FooterType = {
    titleForFooter: string
}

export const Footer = (props: FooterType) => {
    return (
        <div className="footer">
            <div className="container">
                <div>{props.titleForFooter}</div>
            </div>
        </div>
    );
}