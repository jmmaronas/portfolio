import { Card, Col, Row } from 'react-bootstrap/';

const proyects = [
    {
        id: "c1",
        title: "Desarrollo Web",
        description: "En este curso aprendi, HTML, CSS, SASS, GIT, GITHUB, Bootstrap, diesño responsive y flex box",
        image: "./images/DesarroladorWeb.png"
    },
    {
        id: "c2",
        title: "Javascript",
        description: "En este curso aprendi, Javascript Vanilla, JQuery, asinconismo con Fetch, manipulacion del DOM y Eventos",
        image: "./images/Javascript.png"
    },
    {
        id: "c3",
        title: "React Js",
        description: "En este curso aprendi, React Js, React-Router-DOM, Firebase, Firestore, instalacion de librerias y dependencias y deploy en Netlify",
        image: "./images/ReactJs.png"
    },
    {
        id: "c4",
        title: "Job Ready Alkemy",
        description: "En esta capacitacion, trabajamos en un equipo de 7 persona, con metodologias agiles(SCRUM, Jira) y trabajo colaborativo(Github), utilizamos para el front principalmente ReactJs y para el Back NodeJs, se realizo un trabajo completo Api Rest, validacion de usuario, DB con Sequelize, etc",
        image: "./images/alkemy.jpg"
    },
    {
        id: "c5",
        title: "EF Set",
        description: "Standard English Test",
        image: "./images/EF-SET- Certificate.jpg"
    },
]

function Courses() {
    return (
        <div className="container-fluid px-4 py-5">
            <h1 className='text-center my-5'>Certificados</h1>
            <Row xs={2} md={4} className="g-4">
                {proyects.map((proyect, idx) => (
                    <Col key={idx} style={{height:"520px"}}>
                        <Card className='h-100 shadow'>
                            <Card.Img style={{ maxHeight: "22rem", objectFit: "fill" }} variant="top" src={proyect.image} />
                            <Card.Body>
                                <Card.Title>{proyect.title}</Card.Title>
                                <Card.Text>
                                    {proyect.description}
                                </Card.Text>
                                <Card.Subtitle><a href={proyect.linkUrl}>{proyect.linkUrl}</a></Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Courses;
