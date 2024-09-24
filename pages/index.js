import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box boardRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in China!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexgrow={1}>
          <Heading as="h2" variant="page-title">
            m1ng
          </Heading>
          <p>Digital Dreamer ( Artist / Developer / Scholar)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
