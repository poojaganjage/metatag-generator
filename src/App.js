import {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import MetaTagForm from './components/MetaTagForm';
import GenerateMetaTag from './components/GenerateMetaTag';
import {generateMetaTags} from './generator/Generator';

function App() {
  const [metaTags, setMetaTags] = useState('');
  const [metaTagsCollections, setMetaTagsCollections] = useState({
    title: '',
    description: '',
    keywords: '',
    url: '',
    imageUrl: '',
    author: '',
  });

  useEffect(() => {
    console.log("MetaTags");
    setMetaTags(generateMetaTags(metaTagsCollections));
  }, [metaTagsCollections]);
  return (
    <div className="App Contanier">
      <title>Meta Tag Generator</title>
      <Card style={{width: '100%'}}>
        <Card.Body>
          <h1 className='meta-tag-title'>Meta Tag Generator</h1>
          <MetaTagForm 
            metaTagsCollections={metaTagsCollections} 
            setMetaTagsCollections={setMetaTagsCollections}
          />
          <GenerateMetaTag metaTags={metaTags} />
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
