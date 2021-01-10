import React,{useState} from 'react'
import {Badge, Button,ListGroup,Table,Tab,Row,Col,Nav,Container} from 'react-bootstrap'

 function Names() {
    const names =['Mouhamed Ben zaied','Oussama Maaref','Ashwek Werghi','Ines Essetti','Med Aziz Driss','Ilyes Cheikh','Med Aziz Ben dhiab','Med Nader hachana','Mootaz ouledissa','Syrine Hammami','Manel Grira'];
    const [statei, setstatei] = useState()
    const [state, setstate] = useState()
    const [present,setpresent]=useState([])
    const [absent,setabsent]=useState([])
    const [excusé,setexcusé]=useState([])
    const [tous,settous]=useState([])
    {/*Satet i est un compteur i , state affiche n[i] , present,absent,excusé sont des tableaux a remplir , tous c'est un tableau des objets*/}
    return (
        <Container>
               <div className='Display'>
               <h1 className='title'>{state}</h1>
               {/* Ce button remplace le button commencer il permet la mise a zero de l'appel*/}
               <Button variant ='outline-dark' size ='sm' ClassName='bi' onClick={ele=>{setstatei(0);setstate(names[0]);setpresent([]);setabsent([]);setexcusé([]);settous([])}}>Init</Button>
               </div>
               <div className='buttons'>
            <Button size='lg' className='b1' onClick={ele=>{if(statei<names.length){setstatei(statei+1); setstate(names[statei + 1]); setabsent([...absent,...[names[statei ]]]);settous([...tous,...[{nomt:names[statei],statet:'Absent'}]])}}}>Absent</Button>
            <Button size='lg'className='b1' onClick={ele=>{if(statei<names.length){setstatei(statei+1); setstate(names[statei + 1]); setpresent([...present,...[names[statei ]]]); settous([...tous,...[{nomt:names[statei],statet:'Present'}]])}}}>Present</Button>
            <Button size='lg' className='b1' onClick={ele=>{if(statei<names.length){setstatei(statei+1); setstate(names[statei + 1]); setexcusé([...excusé,...[names[statei ]]]); settous([...tous,...[{nomt:names[statei],statet:'Excusé'}]])}}}>Excusé</Button>  
            </div>
           {/* Le code d'organisateur de table contient dans chaque (content) un tableau des personnes obtenu d'apres bootstrap*/}
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tous</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Presents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Absents</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                     <th>Tous</th>
                                    </tr>
                                 </thead>
                                <tbody>
                                
                                     {tous.map(elt=><tr colSpan="2"> <td>{elt.nomt}</td><td>{elt.statet}</td></tr>)}
                                
                                </tbody>
                            </Table>  
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Presents</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {present.map(elt=><tr colSpan="2"> <td>{elt}</td></tr>)}
                                    
                                </tbody>
                            </Table>  
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Table striped bordered hover variant="dark">
                                    <thead>
                                     <tr>
                                        <th>Absents</th>
                                    </tr>
                                    </thead>
                                <tbody>
                                    
                                    {absent.map(elt=><tr colSpan="2"> <td>{elt}</td></tr>)}
                                    
                                </tbody>
                            </Table>  
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>   
                    
        </Container>
        
    )
}
export default Names ;

