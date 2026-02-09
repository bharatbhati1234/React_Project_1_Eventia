
import AboutBackgroundImage from '../../assets/showcase-5.webp';

const Schedule=()=>{

    return(
        <>
            <section className="pt-[200px] pb-[70px] relative" style={{
                          backgroundImage: `url(${AboutBackgroundImage})`,
                          backgroundSize: `cover`,
                          backgroundPosition: `center`,
                          //  backgroundRepeat:`no-repeat`,
          
                      }}>
                          {/* Black overlay on image */}
                          <div className="absolute inset-0 bg-black/60"></div>
          
                          <div className="max-w-[1320px] mx-auto px-[12px] flex flex-col items-center relative z-10">
                              <h1 className="text-[42px] font-[700] mb-[10px] text-white">Schedule</h1>
                              <p className="mb-[16px] text-[16px] text-white text-center">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                              <div className="">
                                  <a href="" className="text-[#22d3ee] text-[16px]">Home </a>
                                  <span className="text-white text-[16px]"> / Schedule</span>
                              </div>
                          </div>
                      </section>


                      
        </>
    )
}


export default Schedule;