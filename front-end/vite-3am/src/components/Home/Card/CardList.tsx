import { useState } from 'react';
import Card from './Card';
import type { MemberPros } from '../types';

export default function CardList({ members }: { members: MemberPros[] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLastCardDrop = () => {
    setIsFlipped(true);
  };

  return (
    <>
      {members.map((member, index) => (
        <Card
          index={index}
          isFlipped={isFlipped}
          onDropEnd={
            index === members.length - 1 ? handleLastCardDrop : undefined
          }
          member={member}
        />
      ))}
    </>
  );
}
