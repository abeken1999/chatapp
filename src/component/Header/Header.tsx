import {
  Avatar,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
} from '@chakra-ui/react'
import { useAuthContext } from '@/feature/auth/provider/AuthProvider'
import { FirebaseError } from '@firebase/util'
import { getAuth, deleteUser, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header = () => {
  const { user } = useAuthContext()
  const toast = useToast()
  const { push } = useRouter()

  // ログアウト処理
  const handleSignOut = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      toast({
        title: 'ログアウトしました。',
        status: 'success',
        position: 'top',
      })
      push('/signin')
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }

  // ユーザー退会処理
  const handleDeleteUser = async () => {
    try {
      const auth = getAuth()
      const currentUser = auth.currentUser
      if (currentUser) {
        await deleteUser(currentUser)
        toast({
          title: '退会しました。',
          status: 'success',
          position: 'top',
        })
        push('/signin')
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }

  return (
    <chakra.header py={4} bgColor={'#000000'}>
      <Container maxW={'container.lg'}>
        <Flex>
          <Link href={'/'} passHref>
            <chakra.a
              _hover={{
                opacity: 0.8,
              }}
            >
              <Heading color={'white'}>Chat App(β版)</Heading>
            </chakra.a>
          </Link>
          <Spacer aria-hidden />
          {user ? (
            <Menu>
              <MenuButton>
                <Avatar flexShrink={0} width={10} height={10} />
              </MenuButton>
              <MenuList py={0}>
                <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                <MenuItem onClick={handleDeleteUser}>退会する</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link href={'/signin'} passHref>
                <Button as={'a'} colorScheme={'blue'}>
                  ログイン
                </Button>
              </Link>
              <Link href={'/signup'} passHref>
                <Button as={'a'} colorScheme={'green'}>
                  サインアップ
                </Button>
              </Link>
            </div>
          )}
        </Flex>
      </Container>
    </chakra.header>
  )
}
