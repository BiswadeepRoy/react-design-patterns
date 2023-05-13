import { Modal } from './Modal';
import { NumberedList } from './NumberedList';
import { RegularList } from './RegularList';
import { SplitScreen } from './SplitScreen';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargeProductListItem } from './products/LargeProductListItem';
import { SmallProductListItem } from './products/SmallProductListItem';

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

const LeftHandComponent = ({ name }) => {
  return <h2 style={{ backgroundColor: 'red' }}>{name}</h2>
}

const RightHandComponent = ({ message }) => {
  return <h2 style={{ backgroundColor: 'blue' }}>{message}</h2>
}


function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceType="person"
        itemComponent={SmallPersonListItem}
      />
      <SplitScreen
        leftWeight={1}
        rightWeight={1} >
        <NumberedList
          items={products}
          resourceType="product"
          itemComponent={SmallProductListItem}
        />
        <NumberedList
          items={products}
          resourceType="product"
          itemComponent={LargeProductListItem}
        />
      </SplitScreen>
      <Modal>
        <RegularList
          items={people}
          resourceType="person"
          itemComponent={LargePersonListItem}
        />
      </Modal>
    </>
  );
}

export default App;
