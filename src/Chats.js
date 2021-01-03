import React from 'react'
import Chat from './Chat'
import './Chats.css'


const Chats = () => {
    return (
        <div className="chats">
            <Chat 
              name="Laurent Caballero"
              message="YO how's it going?"
              timestamp="40 seconds ago"
              profilePic="https://i.ibb.co/QjyzXNR/l.jpg"
            />
            <Chat 
              name="Juan Fuentes"
              message="I really liked your profile!"
              timestamp="35 minutes ago" 
              profilePic="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.0-9/126931336_420440099087706_7788850346834726105_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=4vbYuuKHVFcAX-hGz4_&_nc_ht=scontent.fbga2-1.fna&oh=6291842d3dadfb3d1ce31e080d396bb6&oe=601472AD"
            />
            <Chat 
              name="Juan Pablo Viviescas"
              message="Hi buddy, how are you doing?"
              timestamp="3 hours ago"
              profilePic="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.0-0/p526x296/130006918_10224132174037070_4681326754709529691_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=DeNBs6sh5icAX-T2ZJc&_nc_ht=scontent.fbga2-1.fna&tp=6&oh=df4bf179acea8e50e40d8404c8375fa9&oe=6015B38C"
            />
            <Chat 
              name="Sandra Lòpez"
              message="Hola!"
              timestamp="1 week ago"
              profilePic="https://pbs.twimg.com/profile_images/690750147400105985/L_DZvn7Y.jpg"
            />

        </div>
    )
}

export default Chats
