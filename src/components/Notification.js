import React, { useState } from 'react';
import styled from 'styled-components'
function Notification(){
    const [showNot, setShowNot] = useState(true);

    const handleRemoveNot = () => {
        setShowNot(false);
    };
    const Not = styled.div`
        display: flex;
        justify-content: center;
        gap: 2rem;
        background-color: #000000;
        color: #fff;
        padding: 10px 0px;
    `
    const Button= styled.button`
        background: none;
        border: none;
    `;
    return (
        <Not>
            <p>This Project was made by <a href="https://github.com/amza-web">Amza Omiteru</a> and designed by <a href="https://www.codewell.cc/challenges/yelpcamp-by-colt-steele--6144c7c8a383e41090a3d84b">Codewell</a></p>
            <Button onClick={handleRemoveNot}>
                <img src="/img/Close.svg" alt="Close Button" />
            </Button>
        </Not>
    )
}
export default Notification;