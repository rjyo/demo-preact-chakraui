import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  useToast,
} from '@chakra-ui/core'
import React from 'react'

export default function Home() {
  const toast = useToast()
  return (
    <Container my={6}>
      <Heading>Hello</Heading>
      <Box>This page should be loaded</Box>
      <Box mt={4}>
        <Link href="/slow" textDecor="underline">
          And this will be slow
        </Link>
      </Box>
      <Box mt={4}>
        <Button
          borderRadius="full"
          variant="outline"
          onClick={() => {
            toast({ title: 'Hello', description: 'demo', status: 'success' })
          }}
        >
          Button Will be Fine
        </Button>
      </Box>
    </Container>
  )
}
