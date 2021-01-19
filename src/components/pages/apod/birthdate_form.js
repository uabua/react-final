import React from 'react';

const BirthdateForm = (props) => {
    return <form className="">
            <div>
                <h3 style={{textAlign: "center"}}>Here you can see APoD on your birthday or any date!</h3>
            </div>
            <div className="form-group w-200 m-auto">
                <label htmlFor="birthdate">Choose the date</label>
                <input type="date" className="form-control" id="birthdate" min="1995-06-16" 
                    max={new Date().toISOString().split("T")[0]} required/>
            </div>
            <div className="w-800" style={{textAlign: "center"}}>
                <h5>* If you do not pick any date and click the button below, you will see today's APoD.</h5>
            </div>
            <div className="w-200 m-auto" style={{textAlign: "center"}}>
                <button className="btn btn-lg active" type="button" onClick={() => props.callback(document.querySelector("#birthdate").value)}>See APoD🚀</button>
            </div>
     </form>;
}

export default BirthdateForm;