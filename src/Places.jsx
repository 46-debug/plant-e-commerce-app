import React from 'react'

const Places = () => {
    return (
        <div className='place_main' >
            <h1>Select your Place</h1>

            <div id='divs'>
                <div className='img_div'>
                    <div className='hover_info'>
                        <h1>Kitchen</h1>
                    </div>
                    <img src='https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D' />
                </div>

                <div className='img_div'>
                    <div className='hover_info'>
                        <h1>Desktop Corner</h1>
                    </div>
                    <img src='https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2t0b3AlMjBwbGFudHN8ZW58MHx8MHx8fDA%3D' />
                </div>

                <div className='img_div'>
                    <div className='hover_info'>
                        <h1>Office</h1>
                    </div>
                    <img src='https://images.unsplash.com/photo-1556559322-b5071efadc88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwcGxhbnRzfGVufDB8fDB8fHww' />
                </div>

                <div className='img_div'>
                    <div className='hover_info'>
                        <h1>Bed Side</h1>
                    </div>
                    <img src='https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkJTIwcGxhbnRzfGVufDB8fDB8fHww' />
                </div>

                <div className='img_div'>
                    <div className='hover_info'>
                        <h1>Prayer Station</h1>
                    </div>
                    <img src='https://plus.unsplash.com/premium_photo-1689870830599-a5034253027a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByYXllciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D' />
                </div>
            </div>
        </div>
    )
}

export default Places;