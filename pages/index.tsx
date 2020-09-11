import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/core'
import React from 'react'

export default function Home() {
  return (
    <Container my={6}>
      <FormControl mt={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email address1</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email address2</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email address3</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email address4</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email address5</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Container>
  )
}
