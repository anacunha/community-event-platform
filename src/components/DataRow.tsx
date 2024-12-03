import { Flex, Text, Button, Badge } from '@aws-amplify/ui-react';
import { Schema } from '../../amplify/data/resource';

// Define props interface using the Schema type
interface DataRowProps {
  session: Schema['Session']['type'];
}

function capitalizeFirstLetter(string: string | null | undefined): string {
  const safeString = string ?? ''; // Use empty string as fallback
  return safeString.charAt(0).toUpperCase() + safeString.slice(1).toLowerCase();
}

export function formatSessionStatus(status: string | null | undefined): string {
  if (!status) return '';

  // Convert from SNAKE_CASE to Title Case
  const formattedStatus = status
    .toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return formattedStatus;
}

// Define the correct type for badge variations
type BadgeVariations = 'info' | 'error' | 'warning' | 'success';

// Define the possible session statuses
type SessionStatus = 'IN_REVIEW' | 'ACCEPTED' | 'DECLINED';

function getStatusBadgeVariation(status: SessionStatus | null | undefined): BadgeVariations {
  if (!status) return 'info';

  switch (status) {
    case 'ACCEPTED':
      return 'success';
    case 'IN_REVIEW':
      return 'info';
    case 'DECLINED':
      return 'error';
    default:
      return 'info';
  }
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
    <Badge
    size="large"
    variation={getStatusBadgeVariation(session.status as SessionStatus)}
  >
    {formatSessionStatus(session.status)}
  </Badge>
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