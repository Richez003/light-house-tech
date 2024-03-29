import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'
const Contact = () => {
  return (
    <section className="innerWidth flexCenter c-container">
        <div className=" flexColCenter c-left">
          <span className='primaryText'>Easy to contact us</span>
          <span className='secondaryText'>We are always ready to help by providing the best services,<br/> we believe a good place to live can make your life better </span>

          <div className="flexColCenter contactModes ">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColCenter details">
                    <span className='primaryText'>Call</span><span className='secondaryText'>07084578491</span>
                  </div>
                </div>
                  <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColCenter details">
                    <span className='primaryText'>Chat</span><span className='secondaryText'>07084578491</span>
                  </div>
                </div>
                  <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            
                        <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColCenter details">
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>07084578491</span>
                  </div>
                </div>
                  <div className="flexCenter button">Video Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColCenter details">
                    <span className='primaryText'>message</span><span className='secondaryText'>07084578491</span>
                  </div>
                </div>
                  <div onClick={handleClick}className="flexCenter button">message Now</div>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Contact

function handleClick (){
  window.location.href = "../Blog"
}