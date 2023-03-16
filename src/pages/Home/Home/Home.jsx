import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

export default function Home() {
     return (
          <div>
               <Banner />
               <InfoCards />
               <Services />
               <MakeAppointment />
          </div>
     );
}
