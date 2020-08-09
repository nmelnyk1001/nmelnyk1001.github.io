import React from "react"

function ContactMe(props){
    const textStyle={
        display: "inline",
        position: "absolute",
        padding: "2em 2em"
    }

    return(
        <div style={{padding:20}}>
            <div className="card" style={{padding:10}}>
                <span className="card-title">Nathan Melnyk</span>
                <p>Phone Number: +1(631)452-4263</p>
                <p>East Setauket, New York</p>
            </div>

            <div className="card" style={{padding:10, position:"relative"}}>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github logo" height="100" width="100" style={{display:"inline"}}/>
                <p style={textStyle}>https://github.com/nmelnyk1001</p>
            </div>

            <div className="card" style={{padding:10, position:"relative"}}>
                <img src="https://image.flaticon.com/icons/svg/281/281769.svg" alt="gmail logo" height="100" width="100" style={{display:"inline"}}/>
                <p style={textStyle}>nmelnyk1001@gmail.com</p>
                {/*<textarea style={{display:"inline", width:"auto", height:"auto"}}></textarea>*/}
            </div>
        </div>
    )
}

export default ContactMe