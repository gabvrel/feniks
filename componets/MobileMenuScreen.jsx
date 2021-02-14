import React from 'react';
import styles from "../styles/FirstSection.module.scss";

const MobileMenuSection = ({data, openMenu}) => {
    const tst = (label) => {
        var elmnt = document.getElementById(label);
        elmnt.scrollIntoView();
        openMenu();
    }
    return(
        <div className={styles.menuScreen} id='menuScreen'>
            <ul>
                {data?.map(el=><li key={el.title}>
                    <a onClick={()=>tst(el.label)}>{el.title}</a>
                </li>)}
            </ul>
        </div>
    )
}

export default MobileMenuSection;