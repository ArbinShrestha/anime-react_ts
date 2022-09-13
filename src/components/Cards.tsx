import { Card, Button} from 'react-bootstrap'

type ChildrenProps = {
    children: React.ReactNode
}

const Cards = ({children}:ChildrenProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        {children}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards