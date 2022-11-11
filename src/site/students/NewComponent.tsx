import React, {useState} from "react"
import {TopCarType} from "../../App";
import {Button} from "../../components/Button";

type NewComponentType = {
    topCars: Array<TopCarType>
}

type FilterType = "ALL" | "RUB" | "DOLLAR"

export const NewComponent = (props: NewComponentType) => {
    // const myFirstSubscriber1 = () => {
    //     console.log("hello I am the first");
    // }
    // const myFirstSubscriber2 = () => {
    //     console.log("hello I am the second");
    // }
    const onClickHandler = (model: string) => {
        console.log(model)
    }
    // const foo1 = () => {
    //     console.log("100200");
    // }
    // const foo2 = (item: number) => {
    //     console.log(item);
    // }
    // let a = 1;

    let [a, setA] = useState(1);
    const plusHandler = () => {
        setA(++a);
        console.log(a);
    }
    const nullHandler = () => {
        setA(0);
        console.log(a);
    }
    // debugger;
    const [money, setMoney] = useState([
        { banknote: 'DOLLAR', value: 100, number: ' a1234567890' },
        { banknote: 'DOLLAR', value: 50, number: ' z1234567890' },
        { banknote: 'RUB', value: 100, number: ' w1234567890' },
        { banknote: 'DOLLAR', value: 100, number: ' e1234567890' },
        { banknote: 'DOLLAR', value: 50, number: ' c1234567890' },
        { banknote: 'RUB', value: 100, number: ' r1234567890' },
        { banknote: 'DOLLAR', value: 50, number: ' x1234567890' },
        { banknote: 'RUB', value: 50, number: ' v1234567890' },
    ]);

    const [filter, setFilter] = useState<FilterType>("ALL");
    // setFilter(filter);

    let currentMoney = money;

    if (filter === "DOLLAR") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "DOLLAR");
    }
    if (filter === "RUB") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "RUB");
    }

    // let currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "RUB");

    const filterClickHandler = (nameBtn: FilterType) => {
        setFilter(nameBtn);
        // console.log(nameBtn);
    }

    return (
        <div>
            <div>
                <h3>Top Cars</h3>
                <table id={"customers"}>
                    <tr>
                        <th>№</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Buttons</th>
                    </tr>
                    {props.topCars.map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                                <td>
                                    <Button
                                        title={"Model"}
                                        // для передачи функции в props по клику
                                        callBack={() => onClickHandler(el.model)}
                                    />
                                    <Button
                                        title={"I am a stupid Button"}
                                        callBack={() => console.log("I am a stupid Button")}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </table>
                <h1>{a}</h1>
                <Button title={"plus"} callBack={plusHandler} />
                <Button title={"null"} callBack={nullHandler} />
                {/*<button onClick={foo1}>btn1</button>*/}
                {/*<button onClick={() => foo2(100200)}>btn2</button>*/}
            </div>
            <div>
                <h3>Banknotes</h3>
                <table id={"customers"}>
                    <tr>
                        <th>№</th>
                        <th>banknotes</th>
                        <th>value</th>
                        <th>number</th>
                    </tr>
                    {currentMoney.map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{el.banknote}</td>
                                <td>{el.value}</td>
                                <td>{el.number}</td>
                            </tr>
                        );
                    })}
                </table>
                <br/>
                <br/>
                <Button title={"ALL"} callBack={() => filterClickHandler("ALL")} />
                <Button title={"RUB"} callBack={() => filterClickHandler("RUB")} />
                <Button title={"DOLLAR"} callBack={() => filterClickHandler("DOLLAR")} />
                <br/>
                <br/>
            </div>
        </div>
    );
}