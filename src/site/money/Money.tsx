import React, {useState} from "react";
import {Button} from "../../components/Button";
import {money} from "../../App";
// import

type MoneyType = {
    money: Array<BanknoteType>
}

type BanknoteType = {
    banknote: string,
    value: number,
    number: string
}

export type FilterType = "ALL" | "RUB" | "DOLLAR"

export const Money = (props: MoneyType) => {
    const [filter, setFilter] = useState<FilterType>("ALL");

    const filterClickHandler = (nameBtn: FilterType) => {
        setFilter(nameBtn);
    }

    let currentMoney = money;

    if (filter === "DOLLAR") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "DOLLAR");
    }
    if (filter === "RUB") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "RUB");
    }


    return (
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
    );
}