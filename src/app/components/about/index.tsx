import Image from "next/image";

function About() {
  return (
    <div id="about" className="">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <p>WHO I AM?</p>
          <p>My name is Khoa Nguyen. I am professional and enthusiastic engineer in my daily life. I am a quick learner with a self-learning attitude. I love to lean and explore new technologies and am passionate about problem solving. I love almost all the stacks of web application development, AI and love to make the web and AI more open to the world. I am available for any kind of job opportunity that suits my skills and interest</p>
        </div>

        <div id="image-class">
          <Image src="/profile.jpg" width={280} height={280} alt="profile"/>
        </div>
      </div>
    </div>
  );
}

export default About;