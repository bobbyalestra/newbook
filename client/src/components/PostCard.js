import React from 'react';
import {Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import moment from 'moment'
import { Link } from 'react-router-dom' 
function PostCard( { body, createdAt, id, username, LikeCount, commentCount, likes } )
{
    function likePost(){
        console.log('Like Post')
    }
  function commentOnPost(){
      console.log('Commet posr')
  }
    
    return (
        <Card f luid>
     <Card.Content>
         <Image floated='right' size='mini' src ='/images/avatar/large/molly.png' />
        <Card.Header>{ username} </Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body} </Card.Description>
     </Card.Content>

     <Card.Content extra>
      
       <Button as='div' labelPosition='right' onClick={likePost}>
        <Button color='black'>
            <Icon name ='heart' />
        </Button>
        <Label as='a' basic color='black' pointing='left'>
            {LikeCount}
        </Label>

       </Button>


       <Button as='div' labelPosition='right' onClick={commentOnPost}>
        <Button color='blue'>
            <Icon name ='comments' />
        </Button>
        <Label as='a' basic color='blue' pointing='left'>
            {commentCount}
        </Label>

       </Button>
 

     </Card.Content>
    </Card>
    )
}
    export default PostCard