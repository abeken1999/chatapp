import type { NextPage } from 'next'
import { Button, Center, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <Center height="100vh">
      <Stack spacing={8}>
        <Heading as="h1" size="4xl" textAlign="center" mb={12}>
          Let's chat！
        </Heading>
        <Center>
          <Link href={'/chat'} passHref>
            <Button colorScheme="teal" size="lg" w="200px" h="60px">
              チャットする
            </Button>
          </Link>
        </Center>
      </Stack>
    </Center>
  )
}

export default Page
