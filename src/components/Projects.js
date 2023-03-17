import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
// import projImg2 from '../assets/img/project-img2.png';
// import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg11 from '../assets/img/project-img11.png';
import projImg12 from '../assets/img/codex.png';
import projImg13 from '../assets/img/restaurant-ui.png';
import projImg14 from '../assets/img/bank-app1.png';



export const Projects = () => {

    const projects = [
        {
            title: "GPT3",
            description: "",
            imgUrl: projImg9,
            link: "https://williamsgelo.github.io/gpt3",
        },
        {
            title: "AI-BOT",
            description: "",
            imgUrl: projImg12,
            link: "https://codex-bot-iota.vercel.app",
        },
        {
            title: "Restaurant-UI",
            description: "",
            imgUrl: projImg13,
            link: "https://williamsgelo.github.io/restaurant-ui",
        },
        {
            title: "Stripe Menu",
            description: "",
            imgUrl: projImg5,
            link: "https://williamsgelo.github.io/stripe-menu",
        },
        {
            title: "Bank App",
            description: "",
            imgUrl: projImg14,
            link: "https://mordern-bank-ten.vercel.app"
        },
        {
            title: "Hacker News",
            description: "",
            imgUrl: projImg7,
            link: "https://williamsgelo.github.io/hacker-news",
        },
        {
            title: "Movie UI",
            description: "",
            imgUrl: projImg1,
            link: "https://williamsgelo.github.io/movieapp",
        },
        {
            title: "Restaurant Menu",
            description: "",
            imgUrl: projImg11,
            link: "https://williamsgelo.github.io/restaurant-menu",
        },
        {
            title: "Memory Game",
            description: "",
            imgUrl: projImg4,
            link: "https://williamsgelo.github.io/magic-memory",
        },
        {
            title: "Quiz App",
            description: "",
            imgUrl: projImg10,
            link: "https://williamsgelo.github.io/quizapp",
        }

    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>This is projects that I have individually worked on and with some team members.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab 1
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Tab 2
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab 3
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    I upload new projcts every week, contact me if you urgently need to see more of my work!
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    I upload new projcts every week contact me if you urgently need to see more of my work!
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
        </section>
    )
}