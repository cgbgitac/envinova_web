import { StaticImageData } from 'next/image';
// home 1
import icon_1 from '@/assets/images/icon/envi/safe-charging.png';
import icon_2 from '@/assets/images/icon/envi/light.png';
import icon_3 from '@/assets/images/icon/envi/wifi.png';
import icon_4 from '@/assets/images/icon/envi/cctv-camera.png';
// home 2
import icon_5 from '@/assets/images/icon/envi/digital-screen.png';
import icon_6 from '@/assets/images/icon/envi/billboard.png';
import icon_7 from '@/assets/images/icon/envi/audio-speaker.png';
// home 3
import icon_9 from '@/assets/images/icon/envi/sitting.png';
import icon_8 from '@/assets/images/icon/envi/healthcare-facilities.png';
import icon_10 from '@/assets/images/icon/envi/sos.png';
import icon_11 from '@/assets/images/icon/envi/vending-zone.png';
import icon_12 from '@/assets/images/icon/envi/ev-charging.png';
import icon_24 from '@/assets/images/icon/icon_34.png';

// home 4
import icon_13 from '@/assets/images/icon/icon_41.svg';




// data type
interface IService {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
    page: string;
}

const feature_data:IService[] = [
  // home Staring ----------------------------------------------------------
  {
    id:1,
    icon:icon_1,
    title:'Safe Charging Ports for Mobile & Laptop',
    desc:'Fast and reliable charging ports.',
    page:'home'
  },
  {
    id:2,
    icon:icon_2,
    title:'Lights',
    desc:'Bright and energy-efficient lighting.',
    page:'home'
  },
  {
    id:3,
    icon:icon_3,
    title:'Wi-Fi',
    desc:'Seamless and high-speed connectivity',
    page:'home'
  },
  {
    id:4,
    icon:icon_4,
    title:'CCTV',
    desc:'Secure and reliable surveillance.',
    page:'home'
  },
  {
    id:5,
    icon:icon_5,
    title:'Digital Screen',
    desc:'Vivid and ultra-clear display',
    page:'home'
  },
  {
    id:6,
    icon:icon_6,
    title:'Billboard',
    desc:' Impactful and eye-catching advertising.',
    page:'home'
  },
  {
    id:7,
    icon:icon_7,
    title:'Audio Speaker',
    desc:'Dynamic and high-quality audio.',
    page:'home'
  },
  {
    id:8,
    icon:icon_8,
    title:'Sitting Area',
    desc:'Comfortable and stylish seating.',
    page:'home'
  },
  {
    id:9,
    icon:icon_9,
    title:'Healthcare Facilities',
    desc:'Advanced care with modern facilities.',
    page:'home'
  },
  {
    id:10,
    icon:icon_10,
    title:'Security SOS',
    desc:'Instant alerts for emergency security',
    page:'home'
  },
  {
    id:11,
    icon:icon_11,
    title:'Vending Zone',
    desc:'Convenient and automated refreshments',
    page:'home'
  },
  {
    id:12,
    icon:icon_12,
    title:'EV Charging',
    desc:'Fast and efficient EV charging',
    page:'home'
  },
  // home End ------------------------------------------------------------------------------------
  // home 2 staring ------------------------------------------------------------------------------------
]

export default feature_data;