import { chakra, Container, Flex, Link } from '@chakra-ui/react'
import { Navigate } from '@/component/Navigate/Navigate'

export const Footer = () => {
  return (
    <chakra.footer py={4} bgColor={'#000000'} color={'white'}>
      <Container maxW={'container.lg'}>
        <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
          <Navigate href={(path) => path.$url()}>
            <Link lineHeight={1}>トップページ</Link>
          </Navigate>
          <Navigate href={(path) => path.signin.$url()}>
            <Link lineHeight={1}>ログイン</Link>
          </Navigate>
          <Navigate href={(path) => path.signup.$url()}>
            <Link lineHeight={1}>ユーザー登録</Link>
          </Navigate>
          <Navigate href={(path) => path.chat.$url()}>
            <Link lineHeight={1}>チャット</Link>
          </Navigate>
        </Flex>
      </Container>
      <p style={{ textAlign: 'center' }}>© 2023 KentaroAbe</p>
    </chakra.footer>
  )
}
