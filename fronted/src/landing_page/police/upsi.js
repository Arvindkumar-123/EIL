





import { useNavigate } from 'react-router-dom';

 
function Upsi(){
   const router = useNavigate();  

    return(
        <div className="container">
            <div className="row text-center ms-5" >
                <div className="col-8 border mt-1 "><a className="p-0">Quiz1 <br/> Total question 80 <br/><button className="btn btn-success " onClick={() => router('/police/quiz')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz2 <br/> Total question 80 <br/><button className="btn btn-success " onClick={() => router('/police/quiz1')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz3 <br/> Total question 80 <br/><button className="btn btn-success " onClick={() => router('/police/quiz2')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz4 <br/> Total question 80 <br/><button className="btn btn-success " onClick={() => router('/police/quiz3')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz5 <br/> Total question 80 <br/><button className="btn btn-success " onClick={() => router('/police/quiz4')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz6 <br/> Total question 80 <br/><button className="btn btn-success " onClick={() => router('/police/quiz5')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz7 <br/> Total question 80 <br/><button className="btn btn-success ">Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz8 <br/> Total question 80 <br/><button className="btn btn-success ">Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz9 <br/> Total question 80 <br/><button className="btn btn-success ">Start</button></a></div>

            </div>
        </div>
    )
};

export default Upsi;