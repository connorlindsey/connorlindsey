import styled from "styled-components"

const Experiences = () => {
  return (
    <section>
      <h2>Experiences</h2>
      <ul>
        <li>
          <h3>Ancestry</h3>
          <p>
            I led a cross-functional team in the research and design of a new system to redact
            images. The system is currently being implemented and will greatly reduce the cost and
            time to redact millions of images each year.
          </p>
          <img src={"/assets/ancestry.png"} alt='Ancestry Logo' />
        </li>
        <li>
          <h3>Maker Academy</h3>
          <p>
            Schools struggle to offer STEM courses primarily due to a lack of teachers with tech
            skills. Maker Academy aims to make STEM education accessible by providing resources like
            low-cost robotics kits and curriculum to schools. I focus on designing and developing
            our websites, curriculum, and Apollo robotics kit
          </p>
          <img src={"/assets/maker.png"} alt='Maker Academy Logo' />
        </li>
        <li>
          <h3>Scrimba</h3>
          <img src={"/assets/scrimba.jpeg"} alt='Scrimba Logo' />
        </li>
      </ul>
    </section>
  )
}

export default Experiences

const Experience = styled.div``
