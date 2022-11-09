import React from 'react';
import {Form, Row, Col} from 'react-bootstrap'

function MetaTagForm({metaTagsCollections, setMetaTagsCollections}) {
  const handleInputChange = (name, value) => {
    // let newTags = {...metaTagsCollections};
    // console.log(newTags);
    // newTags[name] = value;
    // console.log(newTags[name]);
    // console.log(newTags);
    // setMetaTagsCollections(newTags);

    // setMetaTagsCollections((prevState) => {
    //     return {
    //         ...prevState,
    //         [name]: value
    //     }
    // });
    setMetaTagsCollections({...metaTagsCollections, [name]: value});
  }
  return (
    <Form>
        <Row>
            <Col xs={12} md={6}>
                <Form.Group row className='mb-3' controlId='formbasicEmail'>
                    <Form.Label>Website Name or Page Title</Form.Label>
                    <Form.Control 
                        type='text' 
                        name='title'
                        placeholder='Enter a website or title' 
                        onChange= {(e) => handleInputChange('title', e.target.value)} 
                    />
                </Form.Group>
            </Col>
            <Col xs={12} md={6}>
                <Form.Group row className='mb-3' controlId='formbasicEmail'>
                    <Form.Label>Website Address</Form.Label>
                    <Form.Control 
                        type='url' 
                        name='url'
                        placeholder='Enter a website url' 
                        onChange= {(e) => handleInputChange('url', e.target.value)} 
                    />
                </Form.Group>
            </Col>
            <Col xs={12} md={12}>
                <Form.Group row className='mb-3' controlId='formbasicEmail'>
                    <Form.Label>Website Meta Description</Form.Label>
                    <Form.Control 
                        as='textarea'
                        type='text' 
                        name='description'
                        placeholder='Enter a website meta description' 
                        onChange= {(e) => handleInputChange('description', e.target.value)} 
                    />
                </Form.Group>
            </Col>
            <Col xs={12} md={6}>
                <Form.Group row className='mb-3' controlId='formbasicEmail'>
                    <Form.Label>Website Meta Keywords</Form.Label>
                    <Form.Control 
                        as='textarea'
                        type='text' 
                        name='keywords'
                        placeholder='Enter a website meta keywords' 
                        onChange= {(e) => handleInputChange('keywords', e.target.value)} 
                    />
                </Form.Group>
            </Col>
            <Col xs={12} md={6}>
                <Form.Group row className controlId='formbasicEmail'>
                    <Form.Label>Website URL</Form.Label>
                    <Form.Control
                        type='url'
                        name='imageUrl'
                        placeholder='Enter the url of logo'
                        onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                    />
                </Form.Group>
            </Col>
            <Col xs={12} md={6}>
                <Form.Group row className controlId='formbasicEmail'>
                    <Form.Label>Author of Website</Form.Label>
                    <Form.Control
                        type='text'
                        name='author'
                        placeholder='Enter author name'
                        onChange={(e) => handleInputChange('author', e.target.value)}
                    />
                </Form.Group>
            </Col>
        </Row>
    </Form>
  );
}
export default MetaTagForm;
