import React from "react";
import styles from '../scss/list.module.scss';

const List = ({extrClass, icoImg, icoAlt = "icon", para, title, productImg, prtAlt = "product images"}) => {
    return(
        <>
            <div className={`${styles.sldItem} ${extrClass}`}>
                <div className={styles.sldInnr}>
                    <div className={styles.sldTxt}>
                        <span className={styles.sldIco}>
                            <img src={icoImg} alt={icoAlt} />
                        </span>
                        <p className={styles.top}>
                            {para}
                        </p>
                        <p className={styles.bot}>
                            {title}
                        </p>
                    </div>
                    <div className={styles.sldImg}>
                        <img src={productImg} alt={prtAlt} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;