import { Outlet } from 'react-router';
import './Imfo'

function Imfo() {
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'row',height:'700px'}}>
                <div style={{width:'40%',height:'100%',backgroundColor:'gray'}}>
                    <Outlet/>
                </div>
                <div style={{width:'60%',height:'100%',backgroundColor:'blue'}}>
                    
                </div>
            </div>
        </div>
    )
}

export default Imfo;