import { Flex, Text, Button } from '@aws-amplify/ui-react';
import { Schema } from '../../amplify/data/resource';

// Define props interface using the Schema type
interface DataRowProps {
  session: Schema['Session']['type'];
}

function capitalizeFirstLetter(string: string): string {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


export default function DataRow({ session }: DataRowProps) {

  return (
  <Flex
    gap="16px"
    direction="row"
    width="991px"
    justifyContent="center"
    alignItems="center"
    position="relative"
    padding="16px 0px 16px 0px"
  >
    <Text
      fontSize="16px"
      fontWeight="600"
      color="rgba(13,26,38,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      width="300px"
      shrink="0"
      position="relative"
      whiteSpace="pre-wrap"
    >
      {session.title}
    </Text>
    <Text
      fontSize="16px"
      fontWeight="400"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      grow="1"
      shrink="1"
      basis="0"
      position="relative"
      whiteSpace="pre-wrap"
    >
      {capitalizeFirstLetter(session.level)}
    </Text>
    <Button
      shrink="0"
      size="small"
      isDisabled={false}
      variation="link"
    >
      Edit
    </Button>
  </Flex>
  )
}