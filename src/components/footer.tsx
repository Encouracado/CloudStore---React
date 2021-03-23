import React from 'react';
import {GiBastet} from 'react-icons/gi';

const Footer: React.FC = (props) =>{
    return (
        <div className="footer-decoration">
            <p className="footer-paragraph">Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.</p>
            <p className="footer-paragraph"> © Copyright 2020-2021 Todos os direitos reservados.</p>
            <p className="footer-companyName"><GiBastet></GiBastet> Best Cloud</p>
        </div>
    )
}

export default Footer;