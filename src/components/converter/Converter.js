import React from "react";
import './Converter.scss';

export default function CoveterOne(props) {
    let inputOne = React.createRef()
    let inputTwo = React.createRef()
    let selectOne = React.createRef();
    let selectTwo = React.createRef();

    console.log(props)

    function recalculationInputOne(){
        if (selectOne.current.value === 'UAH') {
            if (selectTwo.current.value === 'USD') {
                inputTwo.current.value = (inputOne.current.value / props.corrency[25].rate).toFixed(2);
            }
            else if (selectTwo.current.value === 'EUR') {
                inputTwo.current.value = (inputOne.current.value / props.corrency[32].rate).toFixed(2);
            }
            else {
                inputTwo.current.value = inputOne.current.value;
            }
        }
        else if (selectOne.current.value === 'EUR') {
            if (selectTwo.current.value === 'USD') {
                inputTwo.current.value = (inputOne.current.value * 0.99).toFixed(2);
            }
            else if (selectTwo.current.value === 'UAH') {
                inputTwo.current.value = (inputOne.current.value * props.corrency[32].rate).toFixed(2);
            }
            else {
                inputTwo.current.value = inputOne.current.value;
            }
        }
        else if (selectOne.current.value === 'USD') {
            if (selectTwo.current.value === 'EUR') {
                inputTwo.current.value = (inputOne.current.value * 0.50).toFixed(2);
            }
            else if (selectTwo.current.value === 'UAH') {
                inputTwo.current.value = (inputOne.current.value * props.corrency[25].rate).toFixed(2);
            }
            else {
                inputTwo.current.value = inputOne.current.value;
            }
        }



        if (inputOne.current.value === '') {
            inputTwo.current.value = ''
        }
    }

    function recalculationInputTwo() {
        if (selectTwo.current.value === 'UAH') {
            console.log(1)
            if (selectOne.current.value === 'USD') {
                inputOne.current.value = (inputTwo.current.value / props.corrency[25].rate).toFixed(2)
                console.log(1)
            }
            else if (selectOne.current.value === 'EUR') {
                inputOne.current.value = (inputTwo.current.value / props.corrency[32].rate).toFixed(2)
                console.log(1)
            }
            else {
                inputOne.current.value = inputTwo.current.value
            }
        }
        else if (selectTwo.current.value === 'EUR') {
            if (selectOne.current.value === 'USD') {
                inputOne.current.value = (inputTwo.current.value * 0.99).toFixed(2);
            }
            else if (selectOne.current.value === 'UAH') {
                inputOne.current.value = (inputTwo.current.value / props.corrency[32].rate).toFixed(2);
            }
            else {
                inputOne.current.value = inputTwo.current.value;
            }
        }
        else if (selectTwo.current.value === 'USD') {
            if (selectOne.current.value === 'EUR') {
                inputOne.current.value = (inputTwo.current.value * 0.50).toFixed(2);
            }
            else if (selectOne.current.value === 'UAH') {
                inputOne.current.value = (inputTwo.current.value * props.corrency[25].rate).toFixed(2);
            }
            else {
                inputOne.current.value = inputTwo.current.value;
            }
        }

        if (inputTwo.current.value === '') {
            inputOne.current.value = '';
        }
    }

    
    return(
        <>
        <div className="wrapper">
            <input type="number" onInput={recalculationInputOne} ref={inputOne} autoFocus placeholder="Ведіть валюту" />
            <select name="select" id="select" onInput={recalculationInputTwo} ref={selectOne}  >
                <option value="UAH">UAH</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </div> 
        <div className="wrapper">
                <input type="number" onInput={recalculationInputTwo} ref={inputTwo} placeholder="Ведіть валюту" />
                <select name="select" id="select" 
                onInput={recalculationInputOne}
                 ref={selectTwo}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                </select>
            </div>
            </>
    )
}