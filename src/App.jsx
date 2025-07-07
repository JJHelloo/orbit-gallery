// src/App.jsx
import InfiniteMenu from './InfiniteMenu';

const items = Array.from({ length: 40 }, (_, i) => ({
  image: `/imgs/image${i + 1}.jpg`,
  link: '#',
  title: `Photo ${i + 1}`,
  description: `A special moment`
}));

function App() {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <InfiniteMenu items={items} />
    </div>
  );
}

export default App;
