

import React from 'react'
import {Button, Form } from 'semantic-ui-react'

import { useForm } from '../util/hooks'


function PostForm(){

    const { value, onChange, onSubmit} = useForm(createPostCallback, {
        body:''
    })

    return (
        <Form onSubmit={onSubmit}>
            <h2>Create A Post</h2>
            <Form.Field>
                <Form.Input
                placeholer="Hi World"
                body="body"
                onChange={onChange}
                value={value.body}
                />
                <Button type="submit" color = "slategrey">
                    Submit
                </Button>
            </Form.Field>
        </Form>
    )
}

export default PostForm