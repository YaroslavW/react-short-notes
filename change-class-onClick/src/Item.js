import React from 'react';

const Item = (props) => {

    const handleClick = (e) =>{
        clearClass();
        let el = e.target;
        el.classList.add('active');
    }
const clearClass = () => {
    const elAactive = document.querySelectorAll('.active');
    elAactive.forEach(el => {
        el.classList.remove('active');
    })
}
    const part = props.data.map((item, index) => (
        <div key={index} onClick={handleClick}>{item}</div>
    ));
    return (
        <>
        {part}
        </>
    )
};
export default Item;