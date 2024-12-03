import sit from '../../public/images/sit.gif';
import door from '../../public/images/door.gif'

const onButtonClick = () => {
  const pdfUrl = "zade_resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "public/images/zade_resume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);}

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <img src={sit}/>

        <div className="resume">
          <p>Download My Resume</p>
          <p>Click on the Door!</p>
          <div className="btnDiv">
          <button onClick={onButtonClick}>
          <img src={door}/>
          </button>   

        </div>

          {/* <Link to="assets/zade_resume.pdf" target="blank" download></Link> */}

          <ul>
            <p>Front-end Proficiences</p>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <p>Back-end Proficiencies</p>
            <li>
              NodeJS
            </li>
            <li>
              APIs
            </li>
          </ul>

        </div>

    </div>
  );
}
