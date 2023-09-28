import React from 'react'
import krishna from '../assets/images/krishnaa.png'

const Hero = () => {

    const [hindi, setHindi] = React.useState(false)
    const [buttonText, setButtonText] = React.useState("हिंदी में पढ़ें")

    const toggleHindi = () =>{
        if (hindi === true){
            setHindi(false);
            setButtonText("हिंदी में पढ़ें")
        }else{
            setHindi(true);
            setButtonText("Read in English")
        }
    }

  return (
    <section id='hero-main'>

      <div className=' container flex mx-auto space-x-2 max-w-7xl h-[100vh] items-center xl:max-w-9xl'>
        <div className='flex flex-col w-1/2 space-y-2'>
            <h1 className='dark:text-slate-200 text-2xl font-bold l'>
            ॐ नमो भगवते वासुदेवाय <br />
            जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञ: स्वराट् <br />
            तेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरय: । <br />
            तेजोवारिमृदां यथा विनिमयो यत्र त्रिसर्गोऽमृषा <br />
            धाम्ना स्वेन सदा निरस्तकुहकं सत्यं परं धीमहि ॥ १ ॥<br />
            </h1>
            {
                !hindi ?
                <h1 className='dark:text-slate-300 text-base font-semibold italic'>
                    O my Lord, Śrī Kṛṣṇa, <span className='text-blue-700'>son of Vasudeva,</span> O all-pervading Personality of Godhead, I offer my respectful obeisances unto You. I meditate upon Lord Śrī Kṛṣṇa because <span className='text-blue-700'>He is the Absolute Truth and the primeval cause of all causes of the creation, sustenance and destruction of the manifested universes</span>. He is directly and indirectly conscious of all manifestations, and He is independent because there is no other cause beyond Him. It is He only who first imparted the Vedic knowledge unto the heart of Brahmājī, the original living being. By Him even the great sages and demigods are placed into illusion, as one is bewildered by the illusory representations of water seen in fire, or land seen on water. Only because of Him do the material universes, temporarily manifested by the reactions of the three modes of nature, appear factual, although they are unreal. I therefore meditate upon Him, Lord Śrī Kṛṣṇa, who is eternally existent in the transcendental abode, which is forever free from the illusory representations of the material world. <span className='text-orange-600'>I meditate upon Him, for He is the Absolute Truth.</span>
                </h1> :
                    <h1  className='dark:text-slate-300 text-base font-semibold italic'>
                        हे प्रभु, <span className='text-blue-700'>हे वसुदेव-पुत्र श्रीकृष्ण</span>, हे सर्वव्यापी भगवान्, मैं आपको सादर नमस्कार करता हूँ। मैं भगवान् श्रीकृष्ण का ध्यान करता हूँ, क्योंकि <span className='text-blue-400'>वे परम सत्य हैं और व्यक्त ब्रह्माण्डों की उत्पत्ति, पालन तथा संहार के समस्त कारणों के आदि कारण हैं। </span>वे प्रत्यक्ष तथा अप्रत्यक्ष रूप से सारे जगत से अवगत रहते हैं और वे परम स्वतंत्र हैं, क्योंकि उनसे परे अन्य कोई कारण है ही नहीं। उन्होंने ही सर्वप्रथम आदि जीव ब्रह्माजी के हृदय में वैदिक ज्ञान प्रदान किया। उन्हीं के कारण बड़े-बड़े मुनि तथा देवता उसी तरह मोह में पड़ जाते हैं, जिस प्रकार अग्नि में जल या जल में स्थल देखकर कोई माया के द्वारा मोहग्रस्त हो जाता है। उन्हीं के कारण ये सारे भौतिक ब्रह्माण्ड, जो प्रकृति के तीन गुणों की प्रतिक्रिया के कारण अस्थायी रूप से प्रकट होते हैं, वास्तविक लगते हैं जबकि ये अवास्तविक होते हैं। अत: मैं उन भगवान् श्रीकृष्ण का ध्यान करता हूँ, जो भौतिक जगत के भ्रामक रूपों से सर्वथा मुक्त अपने दिव्य धाम में निरन्तर वास करते हैं। <span className='text-orange-600'>मैं उनका ध्यान करता हूँ, क्योंकि वे ही परम सत्य हैं।</span>
                    </h1 >
            }

            <button className='bg-blue-700 rounded text-white font-base w-32 mt-2 p-2'
            onClick={toggleHindi}>{buttonText}</button>
        </div>
        <div className='w-1/2'>
            <img src={krishna} alt="" className='h-[80vh] rounded-lg mx-auto
            shadow-lg shadow-yellow-200'/>
        </div>
      </div>
    </section>
  )
}

export default Hero