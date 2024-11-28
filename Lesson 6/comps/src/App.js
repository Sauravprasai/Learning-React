import Accordion from "./components/Accordion";

function App() {
  const items= [
    {
      id: 'fadfa412',
      lable: 'Can I use react on a project',
      content: 'You can use React on any project that you want to.You can use React on any project that you want to.You can use React on any project that you want to.'
    },
    {
      id: '3124afc',
      lable: 'Can I use Javascript on a project',
      content: 'You can use React on any project that you want to.You can use React on any project that you want to.You can use React on any project that you want to.'
    },
    {
      id: 'da345312f',
      lable: 'Can I use CSS on a project',
      content: 'You can use React on any project that you want to.You can use React on any project that you want to.You can use React on any project that you want to.'
    }
  ]

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default App;
