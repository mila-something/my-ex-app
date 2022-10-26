export const Footer = () => {
    const date = new Date().getFullYear();
    return (
            <div style={{height:'30px', backgroundColor:'#DBCBAA'}}>
                <p>{date}</p>
            </div>
    )
}