import image from "./assets/9.JPG";
function AboutMe() {
  return (
    <div className="homepage">
      <img src={image} alt="Profile-Pic" />
      <p>
        Madeleine O'Dea is a Sydney based web developer, Opera Singer and Cello
        Teacher. After graduating from Presbyterian Ladies' College Sydney in
        2014, she went on to complete a Bachelors of Music and Masters of Opera
        Performance at the Sydney Conservatorium of Music. She is currently
        studying Web Developement with Sydney University.
      </p>
    </div>
  );
}
export default AboutMe;
