import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div style={{height:'50px',width:'100%', backgroundColor:'#FAAAAA'}}>
            <nav>
                <ul style={{listStyle:'none', display: 'flex', justifyContent: 'center', padding:'10px'}}>

                    <li>
                        <Link to='/'style={{textDecoration:'none', color:'#000000', margin:'10px'}}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'style={{textDecoration:'none', color:'#000000', margin:'10px'}}>About</Link>
                    </li>
                    <li>
                        <Link to='/user'style={{textDecoration:'none', color:'#000000', margin:'10px'}}>User Profile</Link>
                    </li>
                    <li>
                        <Link to='/notfound'style={{textDecoration:'none', color:'#000000', margin:'10px'}}>Not Found</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}