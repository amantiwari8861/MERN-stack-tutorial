import Article from "./Article";
import Aside from "./Aside";
const Main=()=>{
    return <main className="bg-primary"  style={{height:"75vh",color:"whitesmoke"}}>
        <h1>Hello i am Main Body {2+5}  !!</h1>
    <div className="container-fluid">
        <div className="row">
            <div className="col-9 ps-3 pe-3">
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            </div>
            <div  className="col-3" style={{height:"60vh",backgroundColor:"yellowgreen"}}>
                <Aside/>
            </div>
        </div>
        
    </div>


    </main>
}

export default Main