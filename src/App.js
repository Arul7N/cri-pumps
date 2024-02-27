import './App.css';
import Award from './assets/1.png';
import Stage from './assets/2.png';
import Pumps from './assets/3.png';


function App() {
  return (
    
    <div className='full-body'>
    
    <div className='main-body'>
      <div className='award-logo'><img className='image-1' src={Award} alt="" /></div>
      <div>
        <div className='para-head'><p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p></div>
        <div className='para-body'><p>
          <li>
            C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy. <br></br>
          </li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.     
          </li>
          </p>
        </div>
        <div className='stage-img'><img className='image-2' src={Stage} alt="" /></div>
        <div className='para-foot'><p>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p></div>
      </div>
    </div>
    
    <div className='bottom'>
      <div className='bottom-note'><p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
      </p></div>

      <div className='pump-img'><img className='image-3' src={Pumps} alt="" /></div>

      <div className='bottom-note'><p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p></div>

      <hr className='line' />

      <div className='bottom-note'><p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p></div>
    
      <div className='bottom-note'><p>CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</p></div>
    
    </div>

    <div/>
    </div>
  );
}

export default App;
