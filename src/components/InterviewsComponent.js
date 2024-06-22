import React from 'react'

function Interviews (){
    return(
        <div>
            <section className="interviewspage">
                <h2>This Week's Interviews</h2>
                <div class="interview_card">
                    <h3>Harvey</h3>
                    <iframe src="https:/www.youtube.com/embed/7ahgosTZJHg"> </iframe>
                </div>
                <div class="interview_card">
                    <h3>Jamela's stunts</h3>
                    <iframe src="https:/www.youtube.com/embed/7ahgosTZJHg"> </iframe>
                </div>
                <div class="interview_card">
                    <h3>Smith's recent injury</h3>
                    <iframe src="https:/www.youtube.com/embed/7ahgosTZJHg"> </iframe>
                </div>
                <div class="interview_card">
                    <h3>Laurie's famous one-liner</h3>
                    <iframe src="https:/www.youtube.com/embed/7ahgosTZJHg"> </iframe>
                </div>
            </section>
        </div>
    )
}

export default Interviews