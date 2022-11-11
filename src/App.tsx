import React, {useState} from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/students/NewComponent";
import {Money} from "./site/money/Money";

export type TopCarsType = Array<TopCarType>

export type TopCarType = {
    manufacturer: string,
    model: string
}

export const topCars = [
    {
        manufacturer: 'BMW',
        model: 'm5cs'
    },
    {
        manufacturer: 'Mercedes',
        model: 'e63s'
    },
    {
        manufacturer: 'Audi',
        model: 'rs6'
    }
]

export const money = [
    { banknote: 'DOLLAR', value: 100, number: ' a1234567890' },
    { banknote: 'DOLLAR', value: 50, number: ' z1234567890' },
    { banknote: 'RUB', value: 100, number: ' w1234567890' },
    { banknote: 'DOLLAR', value: 100, number: ' e1234567890' },
    { banknote: 'DOLLAR', value: 50, number: ' c1234567890' },
    { banknote: 'RUB', value: 100, number: ' r1234567890' },
    { banknote: 'DOLLAR', value: 50, number: ' x1234567890' },
    { banknote: 'RUB', value: 50, number: ' v1234567890' },
];

function App() {
    return (
        <div className="wrapper">
            <Header title={"Hello World!!"} />
            <div className="main">
                <div className="container">
                    <Body titleForBody={"Title for body"} />
                    <NewComponent topCars={topCars} />
                    <Money money={money} />
                </div>
            </div>
            <Footer titleForFooter={"Footer"} />
        </div>
    );
}

export default App;










// export type StudentsType = {
//     students: Array<StudentType>
//     // другой синтаксис типизации, как правильно, скажет тимлид
//     // students: StudentType[]
// }
//
// export type StudentType = {
//     id: number,
//     firstname: string,
//     age: number
// }
//
// export const students = [
//     {
//         id: 1,
//         firstname: "Mary",
//         age: 23
//     },
//     {
//         id: 2,
//         firstname: "Ann",
//         age: 24
//     },
//     {
//         id: 3,
//         firstname: "Alex",
//         age: 25
//     }
// ]