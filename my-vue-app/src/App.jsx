import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';


function App() {
  const firstName = "hamid"

  return (
    <>
    <div className=" d-flex justify-content-center align-items-center">
     <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
        <Description />
        </Card.Text>
        <Button variant="primary"><Price /></Button>
        {firstName? (
          <p>hello {firstName}</p>
        ):(<p>hello there </p> )

        }
      </Card.Body>
     </Card>
    </div> 
    </>
  )
}

export default App
