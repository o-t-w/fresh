import { Head } from "$fresh/runtime.ts";
import articles from './articles.json' assert {type: "json"};

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
       <link rel="stylesheet" href="styles.css" />
       <meta name="theme-color" 
      content="rgb(86, 81, 255)" />

<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/svg+xml" href="/icon.svg"/>
<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
<link rel="manifest" href="/manifest.webmanifest"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
<link href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Redacted+Script:wght@300;400;700&display=swap" rel="stylesheet"/>

{/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet"/> */}

      </Head>
    <div class="vh opening figjam">
    <svg style="position: absolute; inset: 0; margin: auto;" width="600" height="164" viewBox="0 0 600 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1007394_25387)">
<rect x="7.99119" y="7.99119" width="584.017" height="148.41" stroke="var(--purple)" stroke-width="2.28324"/>
<path d="M1.14162 1.14162H17.1243V17.1243H1.14162V1.14162Z" fill="white" stroke="var(--purple)" stroke-width="2.28324" stroke-linecap="square"/>
<path d="M1.14162 147.269H17.1243V163.251H1.14162V147.269Z" fill="white" stroke="var(--purple)" stroke-width="2.28324" stroke-linecap="square"/>
<path d="M582.876 1.14162H598.859V17.1243H582.876V1.14162Z" fill="white" stroke="var(--purple)" stroke-width="2.28324" stroke-linecap="square"/>
<path d="M582.876 147.269H598.859V163.251H582.876V147.269Z" fill="white" stroke="var(--purple)" stroke-width="2.28324" stroke-linecap="square"/>
</g>
<defs>
<clipPath id="clip0_1007394_25387">
<rect width="600" height="164" fill="white"/>
</clipPath>
</defs>
</svg>




        <h1 style="z-index: 2;" class="nabla">Ollie williams</h1>
    </div>


    <div className="vh">
    <ul class="multi-col-two-col">
    {articles.map(article => <li><a href={article.url}>{article.title}</a></li>)}
            </ul>
    </div>

<div class="comic-sans">
    <h2>TALK ABOUT USER FLOWS AND DESIGN PROCESS</h2>
    <p>TALK ABOUT HOW EVERY DESIGN STARTS WITH A GOOGLE DOC</p>
    <p>On a highly technical product, design is always a collaborative process. Every design starts as a shareable text document.</p>
   <img src="userflow.png" alt=""/>
   <div class="postit"></div>
</div>

<div>
  <div class="wireframes">
    <h2 class="hand-written" style="font-weight: normal; font-size: 28px; margin-bottom: 12px;">Wireframes</h2>
    <p class="redacted">At giffgaff and Gradle I've been responsible for building and maintaining design systems in Figma. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic vel consectetur, corporis ad molestias quis culpa explicabo ipsa modi ipsam labore? Molestiae dignissimos at consectetur iure, repellat asperiores obcaecati sequi.</p>
    </div>
    <img class="push-down" src="placeholder.svg" alt=""/>
</div>

<div class="vh visible-grid">
  <div class="item"></div>
  <img class="show-gap" src="measure.svg" alt=""/>
  <div class="item"></div>
  <div></div>
  <div class="item"></div>
  <div></div>
  <div class="item"></div>
  <div></div>
  <div class="item"></div>
  <div></div>
  <div class="item"></div>
  <div class="design-systems">
    <h2 style="font-weight: normal; font-size: 28px; margin-bottom: 12px;">Design systems</h2>
    <p>At <a href="https://giffgaff.design">giffgaff</a> and Gradle I've been responsible for building and maintaining design systems in Figma.</p>
    <img src="colorswatch.svg" alt=""/>
  </div>
</div>

    </>
  );
}
