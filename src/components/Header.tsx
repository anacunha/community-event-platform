import { Flex, Image, Text, Button } from '@aws-amplify/ui-react';
import Link from './Link';

export default function Header({ signOut }: { signOut?: () => void; }) {
  return (
  <Flex
    gap="10px"
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    overflow="hidden"
    position="relative"
    boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
    padding="16px 32px 16px 32px"
    backgroundColor="#C7BBEB"
  >
    <Flex
      gap="32px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      position="relative"
    >
      <Image
        width="52px"
        height="46px"
        display="block"
        shrink="0"
        position="relative"
        objectFit="cover"
        alt=""
        src='/logo.svg'
        style={{fill: 'white'}}
      />
      <Text
        fontSize="16px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        <Link color="#FFF" to="/dashboard">Dashboard</Link>
      </Text>
      <Text
        fontSize="16px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        <Link color="#FFF" to="/profile">Profile</Link>
      </Text>
      <Text
        fontSize="16px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        <Link color="#FFF" to="/sessions">Talks</Link>
      </Text>
    </Flex>
    <Flex
      gap="8px"
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
    >
      <Button
        shrink="0"
        backgroundColor="#A28EDB"
        size="default"
        isDisabled={false}
        variation="primary"
        onClick={signOut}
      >
        Sign out
      </Button>
    </Flex>
  </Flex>
  )
}
