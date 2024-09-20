import React from 'react'
import '../styles/designsystem.css';
import variableImg from '../images/VariableImg.png';
import device from '../images/ds-device.png';
import SubHeadline from "../components/SubHeadline"
import Textblock from "../components/Textblock"
import example from '../images/examplePrimary.jpg';
import pages from '../images/pages.jpg';
import rampe from '../images/rampe.jpg';
import structure from '../images/structure.jpg';
import styles from '../images/styles.jpg';
import button from '../images/button.jpg';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import BackToTop from "../components/BackToTop";

function DesignSystem() {
  const navigate = useNavigate();

  React.useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='designsystem'>
        <div className="ds-hero">
             <img className="ds-variable" alt="" src={variableImg}/>
             <img className="ds-device" alt="" src={device}/>
        </div>
        <div className='ds--content'>
          <section className="section--default">
            <div className="section--content">
              <h1>Erstellung eines Design Systems in Figma</h1>
              <div className="subsection">
                <SubHeadline text="Zusammenfassung" />
                <Textblock text="Während der Erstellung dieser Website kam die Idee, ein beispielhaftes Design System aufzubauen. Dieses Design System wurde in Figma erstellt und enthält alle Komponenten dieser Internetseite. Die Case Study zeigt die Grundlegende Organisation des Design Systems, inklusive Tokens, Layout, Typographie, Bilder, Icons, etc." />
                <p>Das Design System kann unter <a href='https://www.figma.com/design/ddsIIdEJtJser38nOvBO3n/Portfolio?node-id=12-10&node-type=canvas&t=2kSQWuLpocwhCYbv-0' target='_blank' rel="noopener noreferrer">diesem Link zur Figma Datei</a> eingesehen werden.</p>
              </div>
              <div className="subsection">
                <SubHeadline text="Rolle" />
                <Textblock text="Persönliches Projekt / UX Design / Web Entwicklung" />
              </div>
              <div className="subsection">
                <SubHeadline text="Methoden" />
                <Textblock text="Methoden: Aufbau Design System, Tokens, Spezifikation" />
                <Textblock text="Tools: Figma" />
                </div>
            </div>
          </section>
          
          <section className="section--alternation">
            <div className="section--content">
              <div className="subsection">
                <h2>Einführung</h2>
                <Textblock text="Ein Design System ist eine Sammlung von Richtlinien, Komponenten und weiteren Ressourcen, die verwendet werden, um eine konsistente Benutzererfahrung in digitalen Produkten zu gewährleisten. Es umfasst in der Regel visuelle Stile (Farben, Typografie, Abstände), Komponenten (Buttons, Formulare, Navigationsleisten) und Regeln für die Interaktion. Design Systems schaffen eine einheitliche Designsprache, die von Designern und Entwicklern gleichermaßen genutzt wird, um eine konsistente Gestaltung über verschiedene Plattformen und Produkte hinweg sicherzustellen. Damit bietet ein Design System die Grundlage, um digitale Produkte effizienter zu gestalten, die Benutzererfahrung zu verbessern und Teams in ihrer Zusammenarbeit zu unterstützen."/>
              </div>
            </div>
          </section>
        
          <section className="section--default">
            <div className="section--content">
              <div className="subsection">
                <h2>Aufbau des Design Systems (in Figma)</h2>
                <Textblock text="Grundsätzlich gibt es viele Möglichkeiten, wie ein Design System aufgezogen werden kann. Da es sich hier um ein kleines Projekt und dazu noch einen Show Case handelt, wurde sich auf eine Datei beschränkt. Bei größeren Projekten und Unternehmen, die ein konsistentes Design System über mehrere Anwendungen und Teams hinweg benötigen, ist ein Aufsplitten in mehrere Dateien durchaus zu empfehlen."/>
              </div>
              <div className="subsection">
                <SubHeadline text="Seitenaufteilung (Pages)" />
                <Textblock text="Für meinen Privaten Gebrauch benutze ich die Figma free Version, weshalb ich auf 3 Seiten pro Datei beschränkt bin. Auf der ersten Seite befinden sich die Screens und das Layout der Website. Die zweite Seite beinhaltet alle Ressourcen, welche für die Vollendung des Designs benötigt wurden. Die dritte Seite dient zur Spezifikation aller Komponenten, sowie zur Darstellung bestimmter Verhaltensweisen einzelner Elemente oder Funktionalitäten. "/>
                <div className='imgContainer end'>
                  <img alt="" style={{width: "100%", maxWidth: "491px"}} src={pages} />
                </div>
              </div>
              <div className="subsection">
                <SubHeadline text="Ressourcen & Design Tokens" />
                <Textblock text="Unter dem Begriff Ressourcen wurden in diesem Fall alle verwendeten Farben, Abstände, Typographien, Icons, Bilder und Logos zusammengefasst und dargestellt. Auch hier ist eine feinere Aufteilung Möglich und kann sinnvoll sein."/>
                <Textblock text="Design Tokens spielen bei dieser Aufteilung eine besondere Rolle. Seitdem es in Figma möglich ist Variablen für einige (leider nicht alle) Ressourcen zu verwenden, bietet das insbesondere für die Erstellung von Design Systemen in Figma eine besondere Flexibilität. Design-Tokens repräsentieren die kleinen, sich wiederholenden Designentscheidungen, die den visuellen Stil eines Designsystems ausmachen. Token ersetzen statische Werte, wie z. B. Hex-Codes für Farben, durch einen semantischen Namen."/>
                <Textblock text="Um die Design Tokens in Figma zu implementieren, habe ich folgende Variablenstruktur verwendet: "/>
                <Textblock text="Primitives: enthalten alle Farb-, Numerischen- und sonstigen Werte, welche in der Anwendung vorkommen. Für Farben wird eine Farbrampe mit 100er Abstufungen für die Namensgebung verwendet. Beispielhafter Aufbau:"/>
                <div className='imgContainer'>
                  <img alt="" style={{width: "100%"}} src={rampe} />
                </div>
                <Textblock text="Color/Numeric Tokens: Definieren eine neue abstrakte (semantische) Ebene. jeder Token, der für ein bestimmte Designentscheidung steht, referenziert auf einen Primitiven Wert. Dabei sollte vorallem darauf geachtet werden, welche Namensgebung verwendet wird. Ich habe mich für folgende Struktur entschieden:"/>
                <Textblock text="Es gibt vier Unterkategorien, “surface”, “border”, “text” und “icon”. Innerhalb jeder Unterkategorie gibt es weitere Rollen wie zum Beispiel “primary”, “secondary”, “success”, “error”, etc. Zu Jeder Rolle können dann Zustände dazukommen, wie “default”, “hover”, “pressed”, “focused”, etc. "/>
                <div className='imgContainer'>
                  <img alt="" style={{width: "100%", maxWidth: "554px"}} src={structure} />
                </div>
                <Textblock text="Bei der Anwendung auf eine Komponente, zum Beispiel ein PrimaryButton entsteht damit folgende Verknüpfung zwischen Primitive Values und Color Tokens."/>
                <div className='imgContainer'>
                  <img alt='' style={{width: "100%", maxWidth: "284px"}} src={example} />
                </div>
                <Textblock text="Wie bereits erwähnt, kann nicht alles in Variablen gespeichert werden. Für diese Fälle werden Styles verwendet. Dies ist beispielsweise für Shadows/Blurs, für Farbverläufe und für Text notwendig. Auch dort wird dieselbe Namensgebung verwendet, wie für die Tokens."/>
                <div className='imgContainer end'>
                  <img alt='' style={{width: "100%", maxWidth: "330px", border: "1px solid black"}} src={styles} />
                </div>
              </div >
            </div>
          </section>

          <section className="section--alternation">
            <div className="section--content">
              <div className="subsection">
                <h2>Komponenten Spezifizieren</h2>
                <Textblock text="Die Spezifikation einer UI-Komponente in Figma ist ein essenzieller Schritt zur Sicherstellung von Konsistenz und Effizienz im Designprozess. Bei der Erstellung eines Design Systems spielt die präzise Definition jeder einzelnen Komponente eine zentrale Rolle. Hier wird beschrieben, wie eine solche UI-Komponente spezifiziert wird:"/>
                <ol type="A">
                  <li>Grundstruktur und Layout: Die Basisstruktur der UI-Komponente wird in Figma angelegt, wobei Rahmen, Abstände und die Anordnung der Elemente innerhalb der Komponente festgelegt werden. Zudem werden die responsiven Eigenschaften definiert, um sicherzustellen, dass die Komponente sich an verschiedene Bildschirmgrößen anpasst. Hierbei kommen zuvor angelegte Variablen, wie etwa für den Border Radius, zum Einsatz. Wichtig ist auch eine Bauweise, die eine einfache Wiederverwendbarkeit in Figma ermöglicht.</li>
                  <li>Typografie und Farben: Die verwendeten Schriftarten, Schriftgrößen und -stile sowie die Farbpalette der Komponente orientieren sich an den vordefinierten Richtlinien des Design Systems. Diese Spezifikationen werden ebenfalls unter Verwendung zuvor angelegter Variablen (Tokens) vorgenommen, um eine konsistente visuelle Sprache zu gewährleisten.</li>
                  <li>Interaktive Zustände: Für eine optimale Nutzererfahrung werden verschiedene Zustände der UI-Komponente spezifiziert, darunter der Standardzustand, der Hover-Zustand, der aktive Zustand (active) und der deaktivierte Zustand (disabled). Diese Zustände werden in Figma durch Varianten abgebildet, um die unterschiedlichen Interaktionen klar zu definieren.</li>
                  <li>Komponentenspezifische Beschreibung, Regeln und Verhaltensweisen: Darüber hinaus werden spezifische Regeln und Verhaltensweisen der Komponente festgehalten. Hierbei kann es sich um Hinweise zur Verwendung in verschiedenen Kontexten handeln.</li>
                  <li>Für bestimmte Szenarien oder komplexere Interaktionen können weitere Beispiele erforderlich sein, wie zum Beispiel Animationen bei Interaktionen oder Overflow-States, um ein besseres Verständnis über das Verhalten der Komponente zu schaffen </li>
                </ol>
                <div className='imgContainer end'>
                  <img alt='' style={{width: "100%", maxWidth: "800px", border: "1px solid black"}} src={button} />
                </div>
              </div>
            </div>
          </section>
          
          <section className="section--default">
            <div className="section--content">
              <div className="subsection">
                <h2>Abschluss</h2>
                <p>
                  Wie bereits erwähnt, ist dies ein eher kleines Projekt und nur eine von vielen Möglichkeiten, 
                  wie ein Design System aufgezogen werden kann. Mein Ziel war es exemplarisch meine 
                  Herangehensweise an Design Systeme zu schildern. Während meiner Arbeit mit verschiedenen Kunden 
                  musste ich auch schon häufiger mit Design Systemen arbeiten, die anders aufgebaut waren.
                  Abschließend habe ich die Website mit React umgesetzt.
                </p>  
                <Button text="Zur Startseite" handleClick={()=>{
                  navigate("/")
                }}/>
              </div>
            </div>
          </section>

        </div>
        <BackToTop />
    </div>
  )
}

export default DesignSystem