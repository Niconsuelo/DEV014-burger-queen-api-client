import style from '../styles/BannerNumberClient.module.scss'
import React from 'react';

interface BannerNumberClientProps{
    tableNumber?: string;
}



const BannerNumberClient: React.FC<BannerNumberClientProps> = ({tableNumber}) => {
    return (

<section className={style.numberClientContainer}>
<p className={style.textOrderTableClient}>Nº CLIENTE:</p>
<p className={style.textOrderTable}>{tableNumber}</p>
</section>

);
};

export default BannerNumberClient;