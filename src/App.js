// import logo from './logo.svg';
import './App.css';
import {CodingQuiz, WeatherDashboard, PasswordGenerator} from "../assets/index.js";
function App() {
  return (
    <div className="App">
       <ul>
      <li id= "Link 1">
      <a href="#Picture of Myself">Picture of Myself</a></li>

      <li id= "Link 2">
      <a href="#Picture of Philadelphia">Picture of Birthplace</a></li>

              <li id= "Link 3">
      <a href="#Picture of Overbrook High School">Picture of Overbrook High School</a></li>

              <li id= "Link 4">
      <a href="#Picture of UPENN Logo">Picture of UPENN Logo</a></li>    
    </ul>

    <summary>
      <section class="content">
        <summary id="Picture of Myself" class="Myself">
          <h2>Me</h2>
          <img id={"Myself"} src={"https://lh3.googleusercontent.com/Xe0eETpC0kWjJXdGfJ9S_N_e47L2zsIo-z2euIGJI14jC-bzsj0dMWmrd6cS3F6Y0rhP3wlsAIn-OPZ7StgHSSB4fNixSovgKIJuG7md6jiCQRQEOpDIPLoOSA4gqX7MgS-nc1W01df2ZWfiXZoU-_IuBKzeJXdMmldv4s8OlK4xV9nblPeXB6lAMMoxCpdM2AExqYM4MZp5zlY54HZa_HU_kYbNH_nGqvU-u1oBr2IldboNYfplfnOSsFbvMDwPNcXL3vTGwuJyB_hqol7Xp1GKBWOknXhcq2rxhLa-3azXXpFnDfYprBIg3ny_x4smtU6POdC67If-Hzb3K2GkauRQiRQ5RAd3cSD6nXLa06E8Imvs2NrxGdxiBBiAGn9o46UTHPL9rFV_tObjAO5uPg_F6o1BPhCxvCCEnZlzpIzvFTHqQLMOhiJmHDQ-jTPpLQKL49xVMVTE_78RHKbgCsu7xw25SJMsKaFmKQUHk_uEthNnkm7Qvrb8H8jm5yFmuu8DZ3_0wcd_p64E4LMhV0WHM1OVbddCPk-j4wFggFFv6nI8wJUOCGhNMI6NPwJrfGhz9ON1Kn23q-v641_1xVxTAZeXij9__9WbSg5wmxFpw-N9tRP3pGUpeI1nEDMg9NShth5jNkFZrKOWkxPAvF-M8zkf_yPX-qKFiDfgp5W8PA7EW_MMwF1Gt8WhOvYf22nfOfORjgD-Y5sn4lZeuers=w469-h625-no?authuser=0"} alt= {"Myself"} class={"float-left"} />
          <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.</p>
      </summary>
    </section>
    </summary>
    <summary id="Picture of Philadelphia" class="Birthplace">
        <h2>Where It All Started</h2>
        <img src={"https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/05/philadelphia-virtual-experiences.jpg"} alt= {"Philadelpehia"} class={"float-left"} />
        <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.</p>
    </summary>
    <summary id="Picture of Overbrook High School" class="Education">
      <h2>Education</h2>
      <img src={"https://media.phillyvoice.com/media/images/Screen_Shot_2015-07-06_at_4.44.23_.2e16d0ba.fill-735x490.png"} alt= {"Overbrook High School"} class= {"float-left"} />
      <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.</p>
  </summary>
  <summary id="Picture of UPENN Logo" class=" A New Chapter">
    <h2>A New Chapter</h2>
    <img src={"https://external-preview.redd.it/apVv0sqc7Wb9WpOW_E5nrgG8vuaKSMeoEoFRBQKT8dI.jpg?width=1024&auto=webp&s=aa05dc8ecb8cc8eb2d984bb5a27bc90086edb08c"} alt= {"UPENN Logo"} class= {"float-left"} />
    <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.</p>
  </summary>
  <div id="Work">
      <h1 id="WorkHeader">Work</h1>
    
      <a href="https://github.com/McGhee01/CodingEX">
        <img id="Project1" src= {CodingQuiz} />
      </a>
      

      <img id="Project2" src= {WeatherDashboard} href = "url webpage of deployed link" alt = {"WeatherDashboard"}/>
      <img id="Project3" src= {PasswordGenerator} href = "url webpage of deployed link" alt = {"PasswordGenerator"}/>
    </div>
    </div>
  );
}

export default App;
