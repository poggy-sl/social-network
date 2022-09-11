import preloader from '../../../assets/images/loading.svg';
import s from '../Paginator/Paginator.module.css';

let Preloader = (props) => {
    return <div className={s.paginatorStyle}>
        <img className={s.preloaderImg} src={preloader}/>
    </div>
}

export default Preloader;