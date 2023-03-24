import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AddReservations from '../pages/addreservations'
import AllReservations from '../pages/allreservations'
import MyReservations from '../pages/myreservations'
import OffHourReservations from '../pages/offhourreservations'
import Profile from '../pages/profile'

const NavPage = () => {
  return (
    <React.Fragment>
        <section>
            <Routes>
                
                <Route path="/add" element={<AddReservations/>}/>
                <Route path="/all" element={<AllReservations/>}/>
                <Route path="/my" element={<MyReservations/>}/>
                <Route path="/offhour" element={<OffHourReservations/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </section>
    </React.Fragment>

  )
}

export default NavPage