import {useNavigate} from 'react-router-dom';

export const NotFound = () => {
    const back = useNavigate();
    const goBack = () => {
        back(-1);
    }
    return (
        <div>
            <h1>Not Found</h1>  
            <h3>i guess</h3>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}