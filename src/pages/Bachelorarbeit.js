import React from "react"
import '../styles/textStyles.css';
import '../styles/bachelorarbeit.css';
import device from '../images/device.png';
import vsCodeLogo from '../images/visualStudioIcon.png';
import myCode from '../images/myCode.png';
import SubHeadline from "../components/SubHeadline"
import Textblock from "../components/Textblock"
import TableRow from "../components/TableRow";
import kellyStarret from "../images/kelly-starret.webp"
import Carousel from "../components/Carousel";
import KPI from "../components/KPI";
import PrimaryButton from "../components/PrimaryButton";

export default function Bachelorarbeit() {
    // Carousel data
    const carousel1Data = [
        {
            url: "bachelorarbeit/Iteration1-1.jpg",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration1-2.jpg",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration1-3.jpg",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration1-4.jpg",
            desc: "Dashboard"   
        }
    ]

    const carousel2Data = [
        {
            url: "bachelorarbeit/Iteration3-1.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration3-2.png",
            desc: "Dashboard"   
        },
        
        {url: "bachelorarbeit/Iteration3-3.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration3-4.png",
            desc: "Dashboard"   
        },
    ]

    const carousel3Data = [
        {
            url: "bachelorarbeit/Iteration4-1.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration4-2.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration4-3.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration4-4.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration4-5.png",
            desc: "Dashboard"   
        },
        {
            url: "bachelorarbeit/Iteration4-6.png",
            desc: "Dashboard"   
        },
    ]
    // Download function for the primaryButton
    function downloadBachelorarbeit(){
        const filePath = "BA.pdf";
        const a = document.createElement("a");
        a.href = filePath;
        a.download = "Bachelorarbeit_MaikBartels.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Scroll to top
    React.useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="bachelorarbeit">
            <div className="hero">
                <img className="hero--device" alt="" src={device}/>
            </div>
            <div className="bachelor--content">    

                <section className="section--default">
                    <div className="section--content">
                        <h1>Entwicklung einer Anwendung zur Förderung von Bewegungspausen bei sitzender Tätigkeit</h1>
                        <div className="subsection">
                            <SubHeadline text="Zusammenfassung" />
                            <Textblock text="Ich habe im Rahmen meiner Bachelorarbeit eine Google Chrome Erweiterung entwickelt,
                             welche zu bestimmten Zeitpunkten den Arbeitsfluss des Nutzers
                             unterbricht, um gezielt Pausen in den Arbeitsalltag einzubinden." />
                        </div>
                        <div className="subsection">
                            <SubHeadline text="Rolle" />
                            <Textblock text="Student / UX Design / Web Entwicklung" />
                        </div>
                        <div className="subsection">
                            <SubHeadline text="Methoden" />
                            <Textblock text="Methoden: Literaturrecherche, Online Umfragen, 
                                Personas, Szenarien, Sketching, digitale Wireframes, Evaluation (Fragebögen)" />
                            <Textblock text="Tools: LimeSurvey, Figma, Visual Studio Code, GitHub, HTML, CSS, JavaScript, D3.js " />
                        </div>
                    </div>
                </section>

                <section className="section--alternation">
                    <div className="section--content">
                        <h2>Hintergrund</h2>
                        <div className="subsection background">
                            <Textblock text="Ich war lange Zeit auf der Suche nach einem Thema für meine
                             Bachelorarbeit und habe vieles überlegt, nichts sprach mich jedoch so richtig an.
                             Einige Zeit später las ich in einem Buch eine spannende Geschichte.
                             Collage Footballer klagten über Rückenschmerzen, obwohl sie die besten Athleten
                             ihres Jahrgangs sind. Grund dafür waren extrem lange Zeiten, welche diese jungen 
                             Männer mit spielen von Videospielen verbrachten. Um nicht dieselben gesundheitlichen probleme 
                             wie diese Sportler zu bekommen schlug Kelly Starret, Autor des Buches 
                             “Sitzen ist das neue Rauchen” vor, sich einen Handytimer oder eine Stoppuhr zu stellen, um die 
                             eigene Sitzzeit im Blick zu behalten. Dies brachte mich auf die Idee, eine bessere Methode dafür 
                             zu finden." />
                             <img className="kelly" src={kellyStarret} />
                        </div>
                    </div>
                </section>

                <section className="section--default">
                    <div className="section--content">
                        <div className="subsection">
                            <h2>Analyse</h2>
                            <Textblock text="Zum Beginn der Bachelorarbeit wurde eine Analyse durchgeführt. 
                                Dazu wurden wissenschaftliche Librarys und Suchmaschienen wie Scopus, 
                                ACM Digital Library und Google Scholar nach Anwendungen mit ähnlichem Anwendungszweck durchsucht. 
                                Zusätzlich wurde eine online Umfrage an der Universität zu Lübeck durchgeführt, 
                                um weitere Informationen über Bedürfnisse, Ziele und aktuelles 
                                Verhalten der Nutzer zu erhalten."/>
                        </div>
                        <div className="subsection">
                            <SubHeadline text="Teilnehmerinformation der Umfrage" />
                            <Textblock text="Bei der Umfrage haben 104 Teilnehmer teilgenommen, davon waren 85 männlich, 15 weiblich und 4 divers." />
                        </div>
                        <div className="subsection">
                            <SubHeadline text="Zielgruppe" />
                            <Textblock text="Als besonders betroffene Personengruppe, konnten Menschen mit sitzender Tätigkeit 
                                identifiziert werden. Die Zielgruppe umfasste somit alle Menschen die einem Bürojob oder einer 
                                Studentischen Tätigkeit im Büro oder im Homeoffice (Lernzeiten bei Studenten) nachgehen." />
                        </div>
                        <div className="subsection">
                            <SubHeadline text="Anforderungen an die Anwendung" />
                            <Textblock text="Basierend auf den Ergebnissen der beiden Analysemethoden konnten 
                                Anforderungen definiert werden, welche eine Anwendung erfüllen muss." />
                            <div className="table">
                                <TableRow isHeader={true} text={["Problem", "Anforderung"]} alternation={false} isEnd={false} />
                                <TableRow isHeader={false} text={["Pausen machen wird vergessen.", "An Pausen erinnern. Dabei auf den Moment der Erinnerung achten"]} alternation={false} isEnd={false}/>
                                <TableRow isHeader={false} text={["Pausen werden nicht durchgeführt, aufgrund von fehlender Motivation.", "Mechanismen einbauen, die Motivation fördern können."]} alternation={true} isEnd={false}/>
                                <TableRow isHeader={false} text={["Die Erinnerung darf nicht aversiv sein", "Diskrete, unauffällige und leicht zu ignorierende Anwendung schaffen."]} alternation={false} isEnd={false}/>
                                <TableRow isHeader={false} text={["Hierarchien und soziale Aspekte können Bewegungspausen verhindern.", "Bewegungspausen unauffällig in den Arbeitsalltag integrieren."]} alternation={true} isEnd={false}/>
                                <TableRow isHeader={false} text={["Wahrgenommener Mangel von Kontrolle über die Pausen verhindert eine Durchführung", "Personalisierbare Anwendung bieten, den Nutzer eigene Ziele definieren und die Pause selbst aktiv starten lassen."]} alternation={false} isEnd={false}/>
                                <TableRow isHeader={false} text={["Arbeitsumgebung und Zeit, sowie Displaygrößen können variieren.", "Displaygrößen beachten (responsive), Arbeitszeiten vom Nutzer festlegen lassen."]} alternation={true} isEnd={false}/>
                                <TableRow isHeader={false} text={["Gemeinschaftsbüros mit mehreren Kollegen. Niemand darf gestört werden.", "Optionale Audionutzung anbieten"]} alternation={false} isEnd={false}/>
                                <TableRow isHeader={false} text={["Wissen über negative Konsequenzen ist unbekannt.", "Bewusstsein über negative Konsequenzen schaffen."]} alternation={true} isEnd={true}/>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className="section--alternation">
                    <div className="section--content">
                        <h2>Konzeption</h2>
                        <div className="subsection">
                            <SubHeadline text="Technisches System" />
                            <Textblock text="Ich habe mich dazu entschieden ein Google Chrome Plugin zu entwickeln, 
                                um möglichst vielen Nutzern Zugang zu der Anwendung zu gewähren. Ebenfalls konnte 
                                herausgefunden werden, dass der Browser im Arbeitsalltag eine immer wichtigere Rolle 
                                spielt und in nahezu allen Berufen stark genutzt wird. " />
                        </div> 
                        <div className="subsection">
                            <SubHeadline text="Grundidee" />
                            <Textblock text="Ich konnte herausfinden, dass abrupte und aufdringliche Unterbrechungen 
                                nach Ablauf einer bestimmten Zeit bei einem Großteil der Teilnehmer (nicht bei 
                                allen, einige fanden diese Vorgehensweise auch gut) nicht zum Durchführen einer 
                                Bewegungspause führen wird. Aus diesem Grund war die Grundidee, immer wenn der 
                                Nutzer einen neuen Tab (im Browser) öffnet, ein Dashboard anzuzeigen, welches aktuelle 
                                Statistiken zu dem Sitzverhalten des Tages bereithält, mit dem Ziel, dass dadurch 
                                eigenständig eine Pause durchgeführt wird. Weiterhin gibt es eine klassische Zeitbasierte 
                                Erinnerung. Die Einstellungen erlauben dem Nutzer, das Plugin zu konfigurieren. " />
                                
                            <Textblock text="Insgesamt gibt es somit 4 Komponenten des Plugins: Dashboard, 
                                Zeitbasierte Erinnerung, Einstellungen und Popup (Chrome Einstiegspunkt) " />
                        </div>

                        <div className="subsection">
                            <SubHeadline text="Erste Iteration" />
                            <Textblock text="In einer ersten Iteration wurden Skizzen erstellt, um Entwürfe der 
                                Idee, der Informationsdarstellung sowie der Navigation festzuhalten. 
                                Anschließend wurden Personen aus der Zielgruppe unter Vorlage der Skizzen zu der 
                                Idee befragt und um Feedback gebeten. Diese Vorgehensweise wurde in jeder 
                                Iteration wiederholt, um noch während des Designprozesses Feedback des Nutzers 
                                einbeziehen zu können." />
                            <Carousel data={carousel1Data} />
                        </div>

                        <div className="subsection">
                            <SubHeadline text="Zweite/Dritte Iteration" />
                            <Textblock text="Während der zweiten und dritten Iteration wurden Wireframes in Grauabstufungen 
                                mit dem Programm Figma erstellt. Ziel der Wireframes war es Verbesserungen einzuarbeiten 
                                und erneut bewerten zu lassen, ohne dass die Testpersonen dabei über visuelle Details 
                                diskutieren, sondern das Konzept und die Inhalte der Anwendung bewerten." />
                            <Carousel data={carousel2Data} />
                        </div>

                        <div className="subsection">
                            <SubHeadline text="Vierte (finale) Iteration" />
                            <Textblock text="Erst in der finalen vierten Iteration wurde die Anwendung visuell ausgestaltet. 
                                Dazu wurde eine Farbpalette definiert, Schriftarten wurden festgelegt, ein 
                                Logo wurde erstellt und weitere Ressourcen wurden festgehalten. " />
                            <Carousel data={carousel3Data} />
                        </div>
                          
                          
                    </div>
                </section>

                <section className="section--default">
                    <div className="section--content">
                        <h2>Implementierung</h2>
                        <div className="subsection bachelorarbeit--implementierung1">
                            <Textblock text="Der Prototyp aus der vierten Iteration wurde mit Verwendung von 
                                HTML, CSS, JavaScript und dem Framework D3.js implementiert. Es musste auf die 
                                Systemarchitektur einer Google Chrome Erweiterung geachtet werden, um ein 
                                lauffähiges Plugin entwickeln zu können. Eine Besonderheit die es bei der 
                                Implementierung gab, war das Einbinden eines Daten Trackings, welches Eingaben der 
                                Nutzer bei Verwendung der Anwendung speichert, um in einer abschließenden Evaluation 
                                den Erfolg der Anwendung bewerten zu können." />
                                <div style={({position: "relative"})}>
                                    <img src={myCode} className="bachelorarbeit--myCodeImg" />
                                    <img src={vsCodeLogo} className="bachelorarbeit--vsCodeImg" />
                                </div>
                            
                        </div>


                    </div>
                </section>

                <section className="section--alternation">
                    <div className="section--content">
                        <h2>Evaluation</h2>
                        <div className="subsection">
                            <Textblock text="Abschließend wurde eine Evaluation durchgeführt, um Usability 
                                Probleme zu finden und den Erfolg der Anwendung zu bewerten. 
                                Es konnten sieben Teilnehmer gefunden werden welche das Plugin über einen 
                                Zeitraum von einer Woche bei ihrer Arbeit genutzt haben." />
                        </div>
                        <div className="subsection">
                            <SubHeadline text="Ergebnisse" />
                            <Textblock text="Die Anwendung konnte zu mehr Bewegung, sowie zu mehr Zufriedenheit 
                                bezüglich des Sitzverhaltens beitragen. Ein SUS-Score verdeutlicht, dass eine 
                                solide, aber verbessungswürdige Software vorliegt (mehr Infos in der Bachelorarbeit)." />
                            <div className="bachelorarbeit--kpis">
                                <KPI kpi="33%" text="mehr Bewegung" />
                                <KPI kpi="20%" text="mehr Zufriedenheit" />
                                <KPI kpi="68.8" text="SUS-Score" />
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className="section--default">
                    <div className="section--content">
                        <div className="subsection">
                            <h2>Schlusswort</h2>
                            <Textblock text="Vielen Dank für das Interesse an meiner Arbeit! Auf dieser Seite wurde meine 
                                Bachelorarbeit stark zusammengefasst und sich auf die zentralen Ergebnisse konzentriert. 
                                Die Bachelorarbeit enthält viele weitere Methoden wie beispielsweise Personas, Szenarien oder 
                                Nudging (Methodik, um das ausführen einer Handlung wahrscheinlicher zu machen). 
                                Interessiert dich eines davon oder möchtest du die komplette Bachelorarbeit lesen, kannst du 
                                diese herunterladen." />
                        </div>
                            <PrimaryButton text="Bachelorarbeit herunterladen" handleClick={downloadBachelorarbeit}/>
                    </div>
                </section>
            </div>
        </div>
    )
}