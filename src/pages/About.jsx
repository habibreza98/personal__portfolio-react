import image_one from '../assets/about_pic-1.jpg'
import image_two from '../assets/about_pic-2.jpg'

export default function About() {
  return (
    <div className="page">
      <div className="about_contents">
        <div className="images_area">
          <div className="img-one">
            <img src={image_one} alt="image" />
          </div>
          <div className="img_two">
            <img src={image_two} alt="image" />
          </div>
        </div>
        <div className="text_area">
          <h3>About <span>Me</span></h3>
          <span>This is what we are, and what <br /> we can do </span>
          <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dolore qui <br /> possimus in repellendus, vitae natus iusto a recusandae hic!</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, corrupti. Molestiae, <br /> animi vel commodi autem sint illum reiciendis porro, impedit praesentium iste ut nostrum <br /> quasi neque? Sapiente dolor voluptas laboriosam itaque rem, quibusdam repellendus <br /> magnam error voluptates accusantium enim amet libero temporibus hic quae dolorem <br />
           </p>
           <div className="btn">
            <div className="left_btn">Read More</div>
           </div>
        </div>
      </div>
    </div>
  );
}
