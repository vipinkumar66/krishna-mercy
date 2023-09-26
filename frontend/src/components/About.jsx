import React from 'react'
import prabhupad from '../assets/images/prabhupad.jpg'


const About = () => {

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
    <section id="About">
      <div className='container flex flex-row md:flex-col max-w-7xl p-2 mt-2 mx-auto items-center space-y-1'>
        <h1 className='dark:text-white text-3xl md:text-6xl mt-2 font-bold'>
            <span className='text-orange-400'>A</span>bout <span className='text-orange-400'>U</span>s
        </h1>
        <div className=' flex  items-center space-x-4 h-[100vh]'>
            <div className='w-1/3 '>
                <img src={prabhupad} alt="" className='rounded-full h-[70vh] shadow-lg shadow-slate-500 '/>
            </div>
            <div className='flex flex-col w-2/3 items-center text-center space-y-2'>
                {!hindi ?
                <h1 className='dark:text-slate-300 text-lg font-semibold'>
                    Krishna Mercy, an online sanctuary of spiritual wisdom and divine grace, pays homage to the venerable His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the illustrious founder-acharya of the International Society for Krishna Consciousness. Within the hallowed realm of this digital haven, we journey through the sacred annals of the Brahma-Madhva-Gaudiya sampradaya, guided by the luminous teachings of this bona fide spiritual luminary.
                    <br />
                    <br />

                    His Divine Grace Swami Prabhupada, a beacon of spiritual enlightenment, unfailingly imparts the timeless message of the Lord through his profound wisdom. His profound influence has traversed the globe, initiating countless souls into the sublime path of devotion. Eminent spiritual authorities have extolled the authenticity of his literary works, bestowing upon them the highest accolades.
                    <br />
                    <br />

                    At Krishna Mercy, we invite you to immerse yourself in the ethereal resonance of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada's teachings, as we strive to illuminate the path to transcendence and grace, uniting souls in the pursuit of spiritual enlightenment and divine mercy.
                </h1>:
                <h1 className='dark:text-slate-300 text-lg font-[550]'>
                    कृष्णा मर्सी, आध्यात्मिक ज्ञान और दैवीय कृपा का एक ऑनलाइन अभयारण्य, इंटरनेशनल सोसाइटी फॉर कृष्णा कॉन्शसनेस के प्रतिष्ठित संस्थापक-आचार्य, आदरणीय परम पूज्य ए.सी. भक्तिवेदांत स्वामी प्रभुपाद को श्रद्धांजलि अर्पित करता है। इस डिजिटल हेवन के पवित्र दायरे में, हम इस प्रामाणिक आध्यात्मिक प्रकाशमान की चमकदार शिक्षाओं द्वारा निर्देशित, ब्रह्मा-माधव-गौड़ीय संप्रदाय के पवित्र इतिहास के माध्यम से यात्रा करते हैं।
                    <br />
                    <br />
                    आध्यात्मिक ज्ञान के प्रतीक, उनके दिव्य अनुग्रह स्वामी प्रभुपाद, अपने गहन ज्ञान के माध्यम से भगवान का कालातीत संदेश देते हैं। उनके गहन प्रभाव ने दुनिया भर में अनगिनत आत्माओं को भक्ति के उत्कृष्ट मार्ग की ओर अग्रसर किया है। प्रख्यात आध्यात्मिक अधिकारियों ने उनके साहित्यिक कार्यों की प्रामाणिकता की प्रशंसा की है और उन्हें सर्वोच्च प्रशंसा प्रदान की है।
                    <br />
                    <br />
                    कृष्णा मर्सी में, हम आपको उनकी दिव्य कृपा ए.सी. भक्तिवेदांत स्वामी प्रभुपाद की शिक्षाओं की ईथर प्रतिध्वनि में डूबने के लिए आमंत्रित करते हैं, क्योंकि हम आध्यात्मिक ज्ञान और दिव्य दया की खोज में आत्माओं को एकजुट करते हुए, पारगमन और अनुग्रह के मार्ग को रोशन करने का प्रयास करते हैं।
                </h1>}
                <button className='bg-blue-700 rounded text-white font-base w-32 mt-2 p-2'
            onClick={toggleHindi}>{buttonText}</button>
            </div>
        </div>

      </div>
    </section>
  )
}

export default About
