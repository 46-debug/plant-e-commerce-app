import React, { useState } from 'react'

const Blogs = () => {

    const [exp1, setExp1] = useState("nowrap");
    const [exp2, setExp2] = useState("nowrap");
    const [exp3, setExp3] = useState("nowrap");
    const [exp4, setExp4] = useState("nowrap");
    const [exp5, setExp5] = useState("nowrap");
    const [exp6, setExp6] = useState("nowrap");

    const zx = {
        textWrap: { exp1 }
    }

    return (
        <div className='blog_main'>
            <h1>Blogs</h1>
            <div id='div'>

                <div className='blog_div'>
                    <div className='b_img'>
                        <img src="https://blog.zulily.com/wp-content/uploads/2020/09/1080x1080_indoorplants_IG-1024x1024.jpg" />
                    </div>
                    <div className='info'>
                        <h3 style={{ textWrap: exp1 }} >Plants care routine</h3>
                        <p style={{ textWrap: exp1 }}>A consistent plant care routine involves several key tasks: watering, sunlight exposure, pruning, fertilizing, and 
                        monitoring for pests or diseases. It's important to water plants according to their specific needs, ensuring they're neither overwatered nor 
                        underwatered. Providing adequate sunlight is crucial, as different plants have varying light requirements. Regular pruning helps maintain plant
                         health and shape. Fertilizing supplies essential nutrients for growth, but should be done sparingly to avoid nutrient imbalances. Monitoring 
                         for pests and diseases allows for early detection and treatment, preserving plant vitality. Adhering to this routine fosters healthy, thriving
                          plants in your home or garden.</p>
                        <div>
                            <button onClick={() => setExp1(exp1 === "nowrap" ? "wrap" : "nowrap")}> {exp1 === "nowrap" ? "Expand" : "Less"}</button>
                        </div>
                    </div>
                </div>

                <div className='blog_div'>
                    <div className='b_img'>
                        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/GettyImages-696251125_header-1024x575.jpg" />
                    </div>
                    <div className='info'>
                        <h3 style={{ textWrap: exp2 }} >What is The benifits of Aelo Vera ?</h3>
                        <p style={{ textWrap: exp2 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div>
                            <button onClick={() => setExp2(exp2 === "nowrap" ? "wrap" : "nowrap")}> {exp2 === "nowrap" ? "Expand" : "Less"}</button>
                        </div>
                    </div>
                </div>

                <div className='blog_div'>
                    <div className='b_img'>
                        <img src="https://m.media-amazon.com/images/I/71mkBooXMuL._AC_UF1000,1000_QL80_.jpg" />
                    </div>
                    <div className='info'>
                        <h3 style={{ textWrap: exp3 }} >Real Gardeners Start from Seeds</h3>
                        <p style={{ textWrap: exp3 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div>
                            <button onClick={() => setExp3(exp3 === "nowrap" ? "wrap" : "nowrap")}> {exp3 === "nowrap" ? "Expand" : "Less"}</button>
                        </div>
                    </div>
                </div>

                <div className='blog_div'>
                    <div className='b_img'>
                        <img src="https://wholeisticliving.com/wp-content/uploads/2022/04/Types-of-Herbs-for-Leaky-Gut.jpg" />
                    </div>
                    <div className='info'>
                        <h3 style={{ textWrap: exp4 }} >Herbs for Gut Health </h3>
                        <p style={{ textWrap: exp4 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div>
                            <button onClick={() => setExp4(exp4 === "nowrap" ? "wrap" : "nowrap")}> {exp4 === "nowrap" ? "Expand" : "Less"}</button>
                        </div>
                    </div>
                </div>

                <div className='blog_div'>
                    <div className='b_img'>
                        <img src="https://www.thespruce.com/thmb/qSOwB7-bKJnlIzyAd19_7qjTOgM=/6250x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-HOME-7-best-places-to-buy-plants-online-4588886-final-01-d5a1796fd50349fda5cfdf70ac7db862.jpg" />
                    </div>
                    <div className='info'>
                        <h3 style={{ textWrap: exp5 }} >Which Plant Should I Buy?</h3>
                        <p style={{ textWrap: exp5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div>
                            <button onClick={() => setExp5(exp5 === "nowrap" ? "wrap" : "nowrap")}> {exp5 === "nowrap" ? "Expand" : "Less"}</button>
                        </div>
                    </div>
                </div>

                <div className='blog_div'>
                    <div className='b_img'>
                        <img src="https://www.verywellhealth.com/thmb/SE5lUYICUdWR4OqlN3wzd7DhAm0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VWH-Paige-McLaughlin-Natura-Pain-Relief-Herbs-Standard-20f690ae9d3a4fe994f76e24cf66343c.jpg" />
                    </div>
                    <div className='info'>
                        <h3 style={{ textWrap: exp6 }} >Herbs for Pain</h3>
                        <p style={{ textWrap: exp6 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div>
                            <button onClick={() => setExp6(exp6 === "nowrap" ? "wrap" : "nowrap")}> {exp6 === "nowrap" ? "Expand" : "Less"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;