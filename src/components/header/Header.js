import React from 'react';
import './Header.scss'

export default function Header(props) {

    return (
        <header className='header'>
            <div className="header__container _container">{
                props.corrency.map(item => {
                    if (item.cc === 'USD') {
                        return <div className="header__item header-item">
                            <div className="header-item__label">{item.txt}</div>
                            <span>-</span>
                            <div className="header-item__value">{item.rate.toFixed(1)}</div>
                        </div>
                    }
                    if (item.cc === 'EUR') {
                        return <div className="header__item header-item">
                            <div className="header-item__label">{item.txt}</div>
                            <span>-</span>
                            <div className="header-item__value">{item.rate.toFixed(1)}</div>
                        </div>
                    }
                })
            }
            </div>
        </header>
    )
}