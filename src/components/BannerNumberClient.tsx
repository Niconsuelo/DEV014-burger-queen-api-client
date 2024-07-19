import style from '../styles/BannerNumberClient.module.scss'

const BannerNumberClient: React.FC = () => {
    return (

<section className={style.numberClientContainer}>
<p className={style.textOrderTableClient}>Nº CLIENTE:</p>
<p className={style.textOrderTable}> MESA 01</p>
</section>

);
};

export default BannerNumberClient;