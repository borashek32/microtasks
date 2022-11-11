import React from 'react';
import {NewComponent} from "./students/NewComponent";

type BodyProps = {
    titleForBody: string
}

export const Body = (props: BodyProps) => {
    return (
        <>
            <h3>{props.titleForBody}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias aspernatur atque beatae consectetur, cupiditate dolores enim error illum iusto maiores neque odit officiis quasi qui quibusdam repellendus vel! A ab alias blanditiis dolor, dolore eligendi, explicabo impedit ipsum iste laboriosam molestias quaerat reiciendis veritatis? Ad aspernatur blanditiis, cumque deserunt, ea eum expedita facilis necessitatibus nemo nisi numquam perspiciatis quis sequi tempora veritatis! Dicta et laborum molestias natus praesentium quam, voluptates? Commodi deleniti ex pariatur praesentium repudiandae tempore temporibus! Alias at autem, enim fuga illum iste laborum necessitatibus quaerat voluptatem voluptatum. Accusamus deleniti in magnam quidem quis sapiente similique?</p>
        </>
    );
}