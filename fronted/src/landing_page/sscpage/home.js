import React from "react";

function Home() {
    return (
        <div className="contaniner text-center mt-5" style={{color:"whitesmoke"}}>
            <p>SSC भारत सरकार की सबसे बड़ी भर्ती संस्था है जो 10वीं, 12वीं और ग्रेजुएट स्तर के उम्मीदवारों के लिए विभिन्न परीक्षाएँ आयोजित करती है। इसमें <br/> <a href="">CGL</a>,<a href="">CHSL</a>,<a href="">CPO</a>,<a href="">MTS</a>,<a href="">JE</a>  जैसी परीक्षाएँ शामिल हैं। आवेदन प्रक्रिया पूरी तरह ऑनलाइन है और चयन बहु-स्तरीय परीक्षा प्रणाली से होता है।

</p>
            <h1>Free MOCK TEXT SCC</h1>
            <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12 border text-center  mt-2" style={{background:"brown",height:'50px'}}>
                    <h2 className="text-center mt-2">SSC GD</h2>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 border   mt-2" style={{background:"brown",height:'50px'}}>
                    <h2 className="mt-2">SSC MTS</h2>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 border   mt-2" style={{background:"brown",height:'50px'}}>
                    <h2 className="mt-2">SSC CHSL</h2>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 border   mt-2" style={{background:"brown",height:'50px'}}>
                    <h2 className="mt-2">SSC CGL</h2>
                </div>
            </div>

        </div>
    );
}

export default Home;