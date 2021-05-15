import imageInSrc from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';
import './App.css';
import styles from './mystyle.module.css';


function App() {
  return (  
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

 <h1 className={styles.title}>Your name here</h1>
<br/>
 <img src={imageInSrc} className="image"/>
<br/>
 

 <img src="/imageInPublic.png" className="image" />
 <div>
 <video width="320" height="240" controls>

<source src={myVideo} type="video/mp4" />

</video>
</div>
</div>
  );
}

export default App;
