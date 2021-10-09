import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='error-page'>
            <ErrorMessage/>
            <p className='error-page__text'>Page doesn't exist</p>
            <Link className='error-page__link' to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;