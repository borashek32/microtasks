import React, {useState} from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/students/NewComponent";
import {Money} from "../../Money";

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

export type FilterType = "ALL" | "RUB" | "DOLLAR"

function App() {
    return (
        <div className="wrapper">
            <Header title={"Hello World!!"} />
            <div className="main">
                <div className="container">
                    <Body titleForBody={"Title for body"} />
                    <NewComponent topCars={topCars} />
                    {/*<Money money={currentMoney} />*/}
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